require('dotenv').config();
const REACT_APP_ALCHEMY_KEY = process.env.REACT_APP_ALCHEMY_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(REACT_APP_ALCHEMY_KEY);

// const contract = require("./build/contracts/DiaDragons.json"); // for Truffle 
const contract = require("../artifacts/contracts/DiaDragons.sol/DiaDragons.json");
const contractAddress = "0xda9b9d82e5ae061F8952e174b76Ddeb02049f7f4";
const DiaDragonsContract = new web3.eth.Contract(contract.abi, contractAddress);

async function main() {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); // get latest nonce
    const gasEstimate = await DiaDragonsContract.methods.setBaseURI("https://gateway.pinata.cloud/ipfs/QmSsj9CZBAZRSvZkdRPer7SfxFfr3qvs3xmLjMiTg1TKag/").gasEstimate; // estimate gas

    // Create the transaction
    const tx = {
      'from': PUBLIC_KEY,
      'to': contractAddress,
      'nonce': nonce,
      'gas': 8000000, 
      'maxFeePerGas': 7100000108,
      'data': DiaDragonsContract.methods.setBaseURI("https://gateway.pinata.cloud/ipfs/QmSsj9CZBAZRSvZkdRPer7SfxFfr3qvs3xmLjMiTg1TKag/").encodeABI()
    };

    // Sign the transaction
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signPromise.then((signedTx) => {
      web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
        if (!err) {
          console.log("The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
        } else {
          console.log("Something went wrong when submitting your transaction:", err)
        }
      });
    }).catch((err) => {
      console.log("Promise failed:", err);
    });
}

main();