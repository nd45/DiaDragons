require("dotenv").config();
const REACT_APP_ALCHEMY_KEY = process.env.REACT_APP_ALCHEMY_KEY;
const PUBLIC_KEY = "0xBb13085F138798fB3Aa42D95797143301493488c";
const PRIVATE_KEY =
	"e4d95d8639fab430bde055caa99e7fde350de9d7ecd9bb210e1fca42d2b50573";

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(REACT_APP_ALCHEMY_KEY);

// const contract = require("./build/contracts/Diadragons.json"); // for Truffle
const contract = require("../artifacts/contracts/Diadragons.sol/Diadragons.json");
const contractAddress = "0x71a03651f1479fbBFD3A1666811522BA00eeE466";
const DiadragonsContract = new web3.eth.Contract(contract.abi, contractAddress);

async function main() {
	const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); // get latest nonce
	const gasEstimate = await web3.eth.estimateGas; // estimate gas

	// Create the transaction
	const tx = {
		from: PUBLIC_KEY,
		to: contractAddress,
		nonce: nonce,
		gas: 10000000,
		maxFeePerGas: 1000000108,
		data: DiadragonsContract.methods.startPresale().encodeABI(),
	};

	// Sign the transaction
	const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
	signPromise
		.then((signedTx) => {
			web3.eth.sendSignedTransaction(
				signedTx.rawTransaction,
				function (err, hash) {
					if (!err) {
						console.log(
							"The hash of your transaction is: ",
							hash,
							"\n Check Alchemy's Mempool to view the status of your transaction!"
						);
					} else {
						console.log(
							"Something went wrong when submitting your transaction:",
							err
						);
					}
				}
			);
		})
		.catch((err) => {
			console.log("Promise failed:", err);
		});
}

main();
