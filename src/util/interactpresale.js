import { pinJSONToIPFS } from "./pinata.js";
require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../artifacts/contracts/DiaDragons.sol/Diadragons.json");
const contractAddress = "0xf5DA133329dB9Ebe5791007A3Dc850472ABbcF04";
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
