require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");

const { MAINNET_API_URL, SEPOLIA_API_URL, ARBITRUM_API_URL, BASE_API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY, BASE_API_KEY, BLAST_API_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    mainnet: {
      url: MAINNET_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    sepolia: {
      url: SEPOLIA_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    arbitrum: {
      url: ARBITRUM_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    base: {
      url: BASE_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    snowtrace: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      accounts: [process.env.PRIVATE_KEY]
    },
    blast: {
      url: 'https://rpc.blast.io',
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API_KEY,
      sepolia: ETHERSCAN_API_KEY,
      base: BASE_API_KEY,
      snowtrace: "snowtrace",
      blast: "blast"
    },
    customChains: [
      {
        network: "snowtrace",
        chainId: 43114,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan",
          browserURL: "https://snowtrace.io"
        }
      },
      {
        network: "blast",
        chainId: 81457,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/81457/etherscan",
          browserURL: "https://blastexplorer.io"
        }
      }
    ]
  },
};

