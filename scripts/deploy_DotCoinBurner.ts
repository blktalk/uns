import { network } from 'hardhat';

import { mergeUnsNetworkConfig, getUnsNetworkConfig } from '../src/config';
import { Deployer } from '../src/deployer';
import { unwrap } from '../src/helpers';

async function main () {
  console.log('Network:', network.name);

  const chainId: number = unwrap(network.config, 'chainId');
  const config = getUnsNetworkConfig(chainId);
  if (!config) {
    throw new Error(`Config not found for network ${network.config.chainId}`);
  }

  const deployer = await Deployer.create();
  const deployConfig = await deployer.execute(['dot_coin_burner'], config);
  mergeUnsNetworkConfig(deployConfig);

  console.log('Deployed!');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
