import { ethers } from 'hardhat';
import { expect } from 'chai';
import { BigNumber, utils } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { MintingManager, UNSRegistry } from '../types/contracts';

import { MintingManager__factory, UNSRegistry__factory } from '../types/factories/contracts';
import { CNSRegistry__factory, Resolver__factory } from '../types/factories/dot-crypto/contracts';
import {
  MintingController__factory,
  SignatureController__factory,
  URIPrefixController__factory,
} from '../types/factories/dot-crypto/contracts/controllers';
import { CNSRegistryForwarder__factory } from '../types/factories/contracts/metatx';
import { DummyStateSender__factory } from '../types/factories/contracts/@maticnetwork/pos-portal/DummyStateSender.sol';
import { SimpleCheckpointManager__factory } from '../types/factories/contracts/@maticnetwork/pos-portal/SimpleCheckpointManager.sol';
import { MintableERC721Predicate__factory } from '../types/factories/contracts/@maticnetwork/pos-portal/MintableERC721Predicate.sol';
import { RootChainManager__factory } from '../types/factories/contracts/@maticnetwork/pos-portal/RootChainManager.sol';
import { CNSRegistry, Resolver } from '../types/dot-crypto/contracts';
import { MintingController, SignatureController, URIPrefixController } from '../types/dot-crypto/contracts/controllers';
import { CNSRegistryForwarder } from '../types/contracts/metatx';
import { RootChainManager } from '../types/contracts/@maticnetwork/pos-portal/RootChainManager.sol';
import { MintableERC721Predicate } from '../types/contracts/@maticnetwork/pos-portal/MintableERC721Predicate.sol';
import { DummyStateSender } from '../types/contracts/@maticnetwork/pos-portal/DummyStateSender.sol';
import { SimpleCheckpointManager } from '../types/contracts/@maticnetwork/pos-portal/SimpleCheckpointManager.sol';
import { buildPredicateExitInput, writeCheckpoint, buildExitInput } from './helpers/polygon';
import { sign, buildExecuteFunc, ExecuteFunc } from './helpers/metatx';
import { TLD, ZERO_ADDRESS } from './helpers/constants';

describe('RootRegistry', () => {
  let l1UnsRegistry: UNSRegistry, l2UnsRegistry: UNSRegistry, mintingManager: MintingManager, cnsRegistry: CNSRegistry;
  let resolver: Resolver,
    mintingController: MintingController,
    uriPrefixController: URIPrefixController,
    signatureController: SignatureController;
  let cnsForwarder: CNSRegistryForwarder;
  let rootChainManager: RootChainManager,
    predicate: MintableERC721Predicate,
    stateSender: DummyStateSender,
    checkpointManager: SimpleCheckpointManager;

  let registryOwner: SignerWithAddress,
    rcmOwner: SignerWithAddress,
    predicateOwner: SignerWithAddress,
    owner: SignerWithAddress,
    spender: SignerWithAddress;

  let buildExecuteCnsParams: ExecuteFunc, buildExecuteUnsParams: ExecuteFunc;

  const abiCoder = new utils.AbiCoder();

  const mintDomainL1 = async (owner: string, labels: string[]) => {
    await mintingManager.issueWithRecords(owner, labels, [], [], true);
    return await l1UnsRegistry.namehash(labels);
  };

  const mintDomainL2 = async (owner: string, labels: string[]) => {
    await l2UnsRegistry.mintWithRecords(owner, labels, [], [], true);
    return await l2UnsRegistry.namehash(labels);
  };

  before(async () => {
    [registryOwner, rcmOwner, predicateOwner, owner, spender] = await ethers.getSigners();

    l1UnsRegistry = await new UNSRegistry__factory(registryOwner).connect(registryOwner).deploy();

    cnsRegistry = await new CNSRegistry__factory(registryOwner).deploy();
    mintingController = await new MintingController__factory(registryOwner).deploy(cnsRegistry.address);
    await cnsRegistry.addController(mintingController.address);

    signatureController = await new SignatureController__factory(registryOwner).deploy(cnsRegistry.address);
    await cnsRegistry.addController(signatureController.address);
    cnsForwarder = await new CNSRegistryForwarder__factory(registryOwner).deploy(signatureController.address);

    resolver = await new Resolver__factory(registryOwner).deploy(cnsRegistry.address, mintingController.address);

    uriPrefixController = await new URIPrefixController__factory(registryOwner).deploy(cnsRegistry.address);
    await cnsRegistry.addController(uriPrefixController.address);

    mintingManager = await new MintingManager__factory(registryOwner).deploy();

    await mintingController.addMinter(mintingManager.address);
    await uriPrefixController.addWhitelisted(mintingManager.address);

    l2UnsRegistry = await new UNSRegistry__factory(registryOwner).connect(registryOwner).deploy();

    // deploy state sender
    stateSender = await new DummyStateSender__factory(registryOwner).deploy();

    // deploy checkpoint manager
    checkpointManager = await new SimpleCheckpointManager__factory(rcmOwner).deploy();

    // deploy and init predicate
    predicate = await new MintableERC721Predicate__factory(predicateOwner).connect(predicateOwner).deploy();
    await predicate.initialize(predicateOwner.address);

    // deploy and setup root chain manager
    rootChainManager = await new RootChainManager__factory(rcmOwner).connect(rcmOwner).deploy();
    await rootChainManager.initialize(rcmOwner.address);
    await rootChainManager.setCheckpointManager(checkpointManager.address);
    await rootChainManager.setStateSender(stateSender.address);
    await rootChainManager.registerPredicate(utils.keccak256(l1UnsRegistry.address), predicate.address);
    await rootChainManager.mapToken(
      l1UnsRegistry.address,
      l2UnsRegistry.address,
      utils.keccak256(l1UnsRegistry.address),
    );
    await predicate.grantRole(await predicate.MANAGER_ROLE(), rootChainManager.address);

    // post-configuration
    await l1UnsRegistry.initialize(mintingManager.address, cnsRegistry.address, rootChainManager.address, ZERO_ADDRESS);

    await l2UnsRegistry.initialize(registryOwner.address, ZERO_ADDRESS, ZERO_ADDRESS, registryOwner.address);
    await l2UnsRegistry.mintTLD(TLD.WALLET, 'wallet');

    await mintingManager.initialize(
      l1UnsRegistry.address,
      mintingController.address,
      uriPrefixController.address,
      resolver.address,
      ZERO_ADDRESS,
      ZERO_ADDRESS,
    );
    await mintingManager.addMinter(registryOwner.address);
    await mintingManager.setTokenURIPrefix('https://metadata.unstoppabledomains.ooo/metadata/');

    buildExecuteCnsParams = buildExecuteFunc(cnsRegistry.interface, signatureController.address, cnsForwarder);
    buildExecuteUnsParams = buildExecuteFunc(l1UnsRegistry.interface, l1UnsRegistry.address, l1UnsRegistry);
  });

  describe('Deposit', () => {
    describe('One-step deposit', () => {
      it('should deposit token through UNS registry', async () => {
        const tokenId = await mintDomainL1(owner.address, ['poly-1d-as2', 'wallet']);

        await expect(l1UnsRegistry.connect(owner).depositToPolygon(tokenId))
          .to.emit(predicate, 'LockedMintableERC721')
          .withArgs(l1UnsRegistry.address, owner.address, l1UnsRegistry.address, tokenId);

        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });

      it('should meta-deposit token through UNS registry', async () => {
        const tokenId = await mintDomainL1(owner.address, ['poly-1d-bp2', 'wallet']);

        const { req, signature } = await buildExecuteUnsParams('depositToPolygon(uint256)', [tokenId], owner, tokenId);
        await expect(l1UnsRegistry.execute(req, signature))
          .to.emit(predicate, 'LockedMintableERC721')
          .withArgs(l1UnsRegistry.address, owner.address, l1UnsRegistry.address, tokenId);

        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });

      it('should deposit CNS domains through MintingManager', async () => {
        const tokenId = await mintDomainL1(owner.address, ['poly-1md-aq1', 'crypto']);
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        await cnsRegistry
          .connect(owner)
          ['safeTransferFrom(address,address,uint256,bytes)'](
            owner.address,
            l1UnsRegistry.address,
            tokenId,
            abiCoder.encode(['bool'], [true]),
          );

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });

      it('should mate-deposit CNS domains through MintingManager', async () => {
        const tokenId = await mintDomainL1(owner.address, ['poly-1md-bl1', 'crypto']);
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        const { req, signature } = await buildExecuteCnsParams(
          'safeTransferFrom(address,address,uint256,bytes)',
          [owner.address, l1UnsRegistry.address, tokenId, abiCoder.encode(['bool'], [true])],
          owner,
          tokenId,
        );

        await cnsForwarder.execute(req, signature);

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });

      it('should mate-deposit(legacy) CNS domains through MintingManager', async () => {
        const funcSig = 'safeTransferFromFor(address,address,uint256,bytes,bytes)';
        const tokenId = await mintDomainL1(owner.address, ['poly-1md-al1', 'crypto']);
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        const data = cnsRegistry.interface.encodeFunctionData('safeTransferFrom(address,address,uint256,bytes)', [
          owner.address,
          l1UnsRegistry.address,
          tokenId,
          abiCoder.encode(['bool'], [true]),
        ]);
        const nonce = await signatureController.nonceOf(tokenId);
        const signature = await sign(data, signatureController.address, nonce, owner);

        await signatureController
          .connect(spender)
          [funcSig](owner.address, l1UnsRegistry.address, tokenId, abiCoder.encode(['bool'], [true]), signature);

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });
    });

    describe('Two-steps deposit', () => {
      it('should deposit token', async () => {
        const tokenId = await mintDomainL1(owner.address, ['poly-2d-aq1', 'wallet']);

        await l1UnsRegistry.connect(owner).approve(predicate.address, tokenId);

        const data = utils.defaultAbiCoder.encode(['uint256'], [tokenId]);
        await expect(rootChainManager.connect(owner).depositFor(owner.address, l1UnsRegistry.address, data))
          .to.emit(predicate, 'LockedMintableERC721')
          .withArgs(owner.address, owner.address, l1UnsRegistry.address, tokenId);

        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });
    });

    describe('CNS -> UNS migration', () => {
      it('should migrate CNS domain to UNS through safeTransferFrom', async () => {
        const tokenId = await mintDomainL1(owner.address, ['cns-uns-aq1', 'crypto']);
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        await cnsRegistry
          .connect(owner)
          ['safeTransferFrom(address,address,uint256)'](owner.address, l1UnsRegistry.address, tokenId);

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
      });

      it('should meta-migrate CNS domain to UNS through safeTransferFrom', async () => {
        const funcSig = 'safeTransferFromFor(address,address,uint256,bytes)';
        const tokenId = await mintDomainL1(owner.address, ['cns-uns-maq1', 'crypto']);
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        const data = cnsRegistry.interface.encodeFunctionData('safeTransferFrom(address,address,uint256)', [
          owner.address,
          l1UnsRegistry.address,
          tokenId,
        ]);
        const nonce = await signatureController.nonceOf(tokenId);
        const signature = await sign(data, signatureController.address, nonce, owner);

        await signatureController.connect(spender)[funcSig](owner.address, l1UnsRegistry.address, tokenId, signature);

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
      });

      it('should migrate CNS domain to UNS through safeTransferFrom(data)', async () => {
        const tokenId = await mintDomainL1(owner.address, ['cns-uns-aq2', 'crypto']);
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        await cnsRegistry
          .connect(owner)
          ['safeTransferFrom(address,address,uint256,bytes)'](
            owner.address,
            l1UnsRegistry.address,
            tokenId,
            abiCoder.encode(['bool'], [false]),
          );

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
      });

      it('should meta-migrate CNS domain to UNS through safeTransferFrom(data)', async () => {
        const funcSig = 'safeTransferFromFor(address,address,uint256,bytes,bytes)';
        const tokenId = await mintDomainL1(owner.address, ['cns-uns-maq2', 'crypto']);
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        const data = cnsRegistry.interface.encodeFunctionData('safeTransferFrom(address,address,uint256,bytes)', [
          owner.address,
          l1UnsRegistry.address,
          tokenId,
          abiCoder.encode(['bool'], [false]),
        ]);
        const nonce = await signatureController.nonceOf(tokenId);
        const signature = await sign(data, signatureController.address, nonce, owner);

        await signatureController
          .connect(spender)
          [funcSig](owner.address, l1UnsRegistry.address, tokenId, abiCoder.encode(['bool'], [false]), signature);

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
      });

      it('should revert when UNS registry receives token from random ERC721', async () => {
        const randomERC721 = await new CNSRegistry__factory(registryOwner).deploy();
        await randomERC721.controlledMintChild(owner.address, TLD.CRYPTO, 'fake-cns-uns-te1');
        const tokenId = await randomERC721.childIdOf(TLD.CRYPTO, 'fake-cns-uns-te1');

        await expect(
          randomERC721
            .connect(owner)
            ['safeTransferFrom(address,address,uint256)'](owner.address, l1UnsRegistry.address, tokenId),
        ).to.be.revertedWith('Registry: ERC721_RECEIVING_PROHIBITED');
      });
    });
  });

  describe('Withdraw through predicate', () => {
    it('should withdraw a domain', async () => {
      const tokenId = await mintDomainL1(owner.address, ['poly-1w-as1', 'wallet']);
      await l1UnsRegistry.connect(owner).depositToPolygon(tokenId);
      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);

      const inputData = buildPredicateExitInput(owner.address, ZERO_ADDRESS, tokenId);
      await predicate.exitTokens(ZERO_ADDRESS, l1UnsRegistry.address, inputData);

      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
    });

    it('should mint a domain on withdraw while it was minted on L2', async () => {
      const tokenId = await l1UnsRegistry.namehash(['poly-1wm-as1', 'wallet']);
      await expect(l1UnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: invalid token ID');

      const inputData = buildPredicateExitInput(owner.address, ZERO_ADDRESS, tokenId);
      await predicate.exitTokens(ZERO_ADDRESS, l1UnsRegistry.address, inputData);

      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
    });

    it('should revert mint by non-predicate', async () => {
      const tokenId = await l1UnsRegistry.namehash(['poly-1w-revert', 'wallet']);
      await expect(l1UnsRegistry['mint(address,uint256)'](owner.address, tokenId)).to.be.revertedWith(
        'Registry: INSUFFICIENT_PERMISSIONS',
      );
    });

    it('should revert mint by non-predicate', async () => {
      const tokenId = await l1UnsRegistry.namehash(['poly-1w-revert', 'wallet']);
      await expect(l1UnsRegistry['mint(address,uint256,bytes)'](owner.address, tokenId, '0x00')).to.be.revertedWith(
        'Registry: INSUFFICIENT_PERMISSIONS',
      );
    });
  });

  describe('Withdraw', () => {
    const expectNewHeaderBlockEventEmitted = async (setCheckPointTx, checkpointData) => {
      await expect(setCheckPointTx)
        .to.emit(checkpointManager, 'NewHeaderBlock')
        .withArgs(
          rcmOwner.address,
          checkpointData.header.number,
          0,
          checkpointData.number,
          checkpointData.number,
          utils.hexlify(checkpointData.header.root),
        );
    };

    it('should be able to exit through rootChainManager', async () => {
      const tokenId = await mintDomainL2(owner.address, ['poly-ex-1', 'wallet']);
      // Legacy transaction (with `gasPrice`), because proof calculation does not work for EIP1559
      const txn = await l2UnsRegistry.connect(owner).burn(tokenId, { gasPrice: 1000000000 });
      const receipt = await txn.wait();

      const { setCheckPointTx, checkpointData } = await writeCheckpoint(checkpointManager, rcmOwner, txn);
      await expectNewHeaderBlockEventEmitted(setCheckPointTx, checkpointData);

      const data = await buildExitInput(checkpointManager, receipt, checkpointData);
      await rootChainManager.exit(data);

      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
    });

    it('should be able to exit through UNS registry', async () => {
      const tokenId = await mintDomainL2(owner.address, ['poly-ex-2', 'wallet']);
      // Legacy transaction (with `gasPrice`), because proof calculation does not work for EIP1559
      const txn = await l2UnsRegistry.connect(owner).burn(tokenId, { gasPrice: 1000000000 });
      const receipt = await txn.wait();

      const { setCheckPointTx, checkpointData } = await writeCheckpoint(checkpointManager, rcmOwner, txn);
      await expectNewHeaderBlockEventEmitted(setCheckPointTx, checkpointData);

      const data = await buildExitInput(checkpointManager, receipt, checkpointData);
      await l1UnsRegistry.connect(owner).withdrawFromPolygon(data, tokenId, [], []);

      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
    });

    it('should be able to exit through UNS registry with records update', async () => {
      const tokenId = await mintDomainL2(owner.address, ['poly-ex-2up', 'wallet']);
      // Legacy transaction (with `gasPrice`), because proof calculation does not work for EIP1559
      const txn = await l2UnsRegistry.connect(owner).burn(tokenId, { gasPrice: 1000000000 });
      const receipt = await txn.wait();

      const { setCheckPointTx, checkpointData } = await writeCheckpoint(checkpointManager, rcmOwner, txn);
      await expectNewHeaderBlockEventEmitted(setCheckPointTx, checkpointData);

      const data = await buildExitInput(checkpointManager, receipt, checkpointData);
      await l1UnsRegistry.connect(owner).withdrawFromPolygon(data, tokenId, ['k1'], ['v1']);

      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
      expect(await l1UnsRegistry.get('k1', tokenId)).to.be.eql('v1');
    });

    it('should be able to meta-exit through UNS registry with records update', async () => {
      const tokenId = await mintDomainL2(owner.address, ['poly-ex-meta2up', 'wallet']);
      // Legacy transaction (with `gasPrice`), because proof calculation does not work for EIP1559
      const txn = await l2UnsRegistry.connect(owner).burn(tokenId, { gasPrice: 1000000000 });
      const receipt = await txn.wait();

      const { setCheckPointTx, checkpointData } = await writeCheckpoint(checkpointManager, rcmOwner, txn);
      await expectNewHeaderBlockEventEmitted(setCheckPointTx, checkpointData);

      const data = await buildExitInput(checkpointManager, receipt, checkpointData);
      const { req, signature } = await buildExecuteUnsParams(
        'withdrawFromPolygon(bytes,uint256,string[],string[])',
        [data, tokenId, ['k2'], ['v2']],
        owner,
        tokenId,
      );
      await l1UnsRegistry.execute(req, signature);

      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
      expect(await l1UnsRegistry.get('k2', tokenId)).to.be.eql('v2');
    });
  });

  describe('Expirable tokens transfers', async () => {
    let tokenId: BigNumber;

    before(async () => {
      const { timestamp } = await ethers.provider.getBlock('latest');
      const labels = ['expirable-predicate-test', 'com'];

      await mintingManager.issueExpirableWithRecords(
        owner.address,
        labels,
        [],
        [],
        timestamp + 60 * 60 * 24,
        true,
      );

      tokenId = await l1UnsRegistry.namehash(labels);
    });

    it('should revert setOwner to predicate', async () => {
      await expect(
        l1UnsRegistry.connect(owner).setOwner(predicate.address, tokenId),
      ).to.be.revertedWith(
        'Registry: TOKEN_EXPIRABLE',
      );
    });

    it('should revert transferFrom to predicate', async () => {
      await expect(
        l1UnsRegistry.connect(owner).transferFrom(owner.address, predicate.address, tokenId),
      ).to.be.revertedWith(
        'Registry: TOKEN_EXPIRABLE',
      );
    });

    it('should revert safeTransferFrom to predicate', async () => {
      const selector = 'safeTransferFrom(address,address,uint256)';

      await expect(
        l1UnsRegistry.connect(owner)[selector](owner.address, predicate.address, tokenId),
      ).to.be.revertedWith(
        'Registry: TOKEN_EXPIRABLE',
      );
    });

    it('should revert safeTransferFrom to predicate', async () => {
      const selector = 'safeTransferFrom(address,address,uint256)';
      const selectorWithBytes = 'safeTransferFrom(address,address,uint256,bytes)';

      await expect(
        l1UnsRegistry.connect(owner)[selector](owner.address, predicate.address, tokenId),
      ).to.be.revertedWith(
        'Registry: TOKEN_EXPIRABLE',
      );

      await expect(
        l1UnsRegistry.connect(owner)[selectorWithBytes](owner.address, predicate.address, tokenId, '0x'),
      ).to.be.revertedWith(
        'Registry: TOKEN_EXPIRABLE',
      );
    });

    it('should revert depositToPolygon', async () => {
      await expect(
        l1UnsRegistry.connect(owner).depositToPolygon(tokenId),
      ).to.be.revertedWith(
        'Registry: TOKEN_EXPIRABLE',
      );
    });
  });
});
