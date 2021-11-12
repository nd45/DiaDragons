require("dotenv").config();
const REACT_APP_ALCHEMY_KEY = process.env.REACT_APP_ALCHEMY_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(REACT_APP_ALCHEMY_KEY);

// const contract = require("./build/contracts/Diadragons.json"); // for Truffle
const contract = require("../artifacts/contracts/Diadragons.sol/Diadragons.json");
const contractAddress = "0x63c72C1E3353c1DC247210C3Fba1B2e190B931E2";
const DiadragonsContract = new web3.eth.Contract(contract.abi, contractAddress);

async function main() {
	const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); // get latest nonce
	const gasEstimate = await web3.eth.estimateGas; // estimate gas

	// Create the transaction
	const tx = {
		from: PUBLIC_KEY,
		to: contractAddress,
		nonce: nonce,
		gas: 5000000,
		maxFeePerGas: 1000000108,
		data: DiadragonsContract.methods.reserveDiadragons(2).encodeABI(),
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