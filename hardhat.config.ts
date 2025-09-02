import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import dotenv from "dotenv";

dotenv.config();

console.log("AMOY_RPC:", process.env.AMOY_RPC);
console.log("AMOY_PRIVATE_KEY:", process.env.AMOY_PRIVATE_KEY);

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    localhost: {
    url: "http://127.0.0.1:8545",
    chainId: 31337
    },
    amoy: {
    url: process.env.AMOY_RPC, // or another stable RPC
    chainId: 80002,
    accounts: [process.env.AMOY_PRIVATE_KEY as string],
  },
//    polygon: {
//      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
//      accounts: [`0x${process.env.PRIVATE_KEY}`],
//    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
};

export default config;