require('dotenv').config();
const REACT_APP_ALCHEMY_KEY = process.env.REACT_APP_ALCHEMY_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(REACT_APP_ALCHEMY_KEY);

// const contract = require("./build/contracts/SpacePoggers.json"); // for Truffle 
const contract = require("../artifacts/contracts/SpacePoggers.sol/SpacePoggers.json"); // for Hardhat
const contractAddress = process.env.CONTRACT_ADDRESS;
const SpacePoggersContract = new web3.eth.Contract(contract.abi, contractAddress);

async function updateMessage(newMessage) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); // get latest nonce
    const gasEstimate = await SpacePoggersContract.methods.update(newMessage).estimateGas(); // estimate gas

    // Create the transaction
    const tx = {
      'from': PUBLIC_KEY,
      'to': contractAddress,
      'nonce': nonce,
      'gas': gasEstimate, 
      'maxFeePerGas': 1000000108,
      'data': SpacePoggersContract.methods.update(newMessage).encodeABI()
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

async function main() {
    const message = await SpacePoggersContract.methods.message().call();
    console.log("The message is: " + message);
    await updateMessage("Hello Drupe!");
}

main();