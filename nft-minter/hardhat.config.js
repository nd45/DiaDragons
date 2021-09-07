/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { REACT_APP_ALCHEMY_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "rinkeby",
  networks: {
      rinkeby: {
         url: REACT_APP_ALCHEMY_KEY,
         accounts: [`0x${PRIVATE_KEY}`]
      }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};