require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.REACT_APP_STAGING_ALCHEMY_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/beec3ffec28f485fb9bf679eb19e5b6d",
      accounts: ["0xa6fa446aabf4a31ebc3e16b7896e880d64384929d370206b30f52f51eb09013d"],
    },
  },
  etherscan: {
    apiKey: "CYDWCJPRVMF9THJ8VNDFGBGP3QYK3BHN1W",
  },
};