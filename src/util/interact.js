// import { pinJSONToIPFS } from "./pinata.js";
require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../artifacts/contracts/DiaDragons.sol/Diadragons.json");
const contractAddress = "0x98f61868687E5d1b678F64C6d7427AA8091A3CcA";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

export const connectWallet = async () => {
	try {
		if (window.ethereum) {
			try {
				const addressArray = await window.ethereum.request({
					method: "eth_requestAccounts",
				});
				const obj = {
					status: "👆🏽 Write a essage in the text-field above.",
					address: addressArray[0],
				};
				return obj;
			} catch (err) {
				return {
					address: "",
					status: "😥 " + err.message,
				};
			}
		} else {
			return {
				address: "",
				status: (
					<span>
						<p>
							{" "}
							🦊{" "}
							<a target='_blank' href={`https://metamask.io/download.html`}>
								You must install Metamask, a virtual Ethereum wallet, in your
								browser.
							</a>
						</p>
					</span>
				),
			};
		}
	} catch (error) {}
};

export const getCurrentWalletConnected = async () => {
	try {
		if (window.ethereum) {
			try {
				const addressArray = window.ethereum.request({
					method: "eth_accounts",
				});
				if (addressArray.length > 0) {
					return {
						address: addressArray[0],
						status: "👆🏽 Write a message in the text-field above.",
					};
				} else {
					return {
						address: "",
						status: "🦊 Connect to Metamask using the top right button.",
					};
				}
			} catch (err) {
				return {
					address: "",
					status: "😥 " + err.message,
				};
			}
		} else {
			return {
				address: "",
				status: (
					<span>
						<p>
							{" "}
							🦊{" "}
							<a target='_blank' href={`https://metamask.io/download.html`}>
								You must install Metamask, a virtual Ethereum wallet, in your
								browser.
							</a>
						</p>
					</span>
				),
			};
		}
	} catch (error) {}
};

export const mintNFT = async () => {
	// //make metadata
	// const metadata = new Object();
	// metadata.name = name;
	// metadata.image = url;
	// metadata.description = description;

	// const pinataResponse = await pinJSONToIPFS(metadata);
	// if (!pinataResponse.success) {
	//   return {
	//     success: false,
	//     status: "😢 Something went wrong while uploading your tokenURI.",
	//   };
	// }
	// const tokenURI = pinataResponse.pinataUrl;
	try {
		window.contract = await new web3.eth.Contract(
			contractABI.abi,
			contractAddress
		);

		const transactionParameters = {
			to: contractAddress, // Required except during contract publications.
			from: window.ethereum.selectedAddress, // must match user's active address.
			value: web3.utils.numberToHex(
				web3.utils.toWei((0.07).toString(), "ether")
			),
			data: window.contract.methods.mintDiadragonTier1().encodeABI(),
		};

		try {
			const txHash = await window.ethereum.request({
				method: "eth_sendTransaction",
				params: [transactionParameters],
			});
			return {
				success: true,
				status:
					"✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/" +
					txHash,
			};
		} catch (error) {
			return {
				success: false,
				status: "😥 Something went wrong: wallet not found",
			};
		}
	} catch (error) {
		return {
			success: false,
			status: "😥 Something went wrong: wallet not found",
		};
	}
};
