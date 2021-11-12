/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { REACT_APP_ALCHEMY_KEY, PRIVATE_KEY } = process.env;

module.exports = {
	solidity: "0.8.0",
	defaultNetwork: "mainnet",
	networks: {
		mainnet: {
			url: REACT_APP_ALCHEMY_KEY,
			accounts: [
				`0xb86d58ce6c4b63cb592db1d1b5a3ac6adcf04ed3ea516a060868d9b09895eda3`,
			],
		},   
	},
	etherscan: {
		// Your API key for Etherscan
		// Obtain one at https://etherscan.io/
		apiKey: process.env.ETHERSCAN_API_KEY,
	},
};
