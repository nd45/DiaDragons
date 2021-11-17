import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import egg from "./../../assets/images/egg.gif";
import diadragongif from "./../../assets/images/diadragon-gif.gif";
import Countdown, { zeroPad } from "react-countdown";
import Testimonial from "./Testimonial";
import detectEthereumProvider from "@metamask/detect-provider";

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../../artifacts/contracts/DiaDragons.sol/Diadragons.json");
const contractAddress = "0xcc407c43572b96Be0aE774653D2a48e33aB49c3A";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const provider = detectEthereumProvider();

window.contract = new web3.eth.Contract(contractABI.abi, contractAddress);

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

const mintNFT = async (amount) => {
	try {
		console.log("here");
		window.contract = await new web3.eth.Contract(
			contractABI.abi,
			contractAddress
		);
		try {
			console.log("here");

			const transactionParameters = {
				to: contractAddress, //Required except during contract publications.
				from: window.ethereum.selectedAddress, // must match user's active address.
				value: web3.utils.numberToHex(web3.utils.toWei("15", "ether")),
				data: window.contract.methods.mintDiadragons(1).encodeABI(),
			};
			const txHash = await window.ethereum.request({
				method: "eth_sendTransaction",
				params: [transactionParameters],
			});
			return {
				success: true,
				status: "https://polygonscan.io/tx/" + txHash,
			};
		} catch (error) {
			return {
				success: false,
				status: "😥 Something went wrong: " + error.message,
			};
		}
	} catch (e) {}
};

const getTotal = async () => {
	try {
		window.contract = await new web3.eth.Contract(
			contractABI.abi,
			contractAddress
		);
		const transactionParameters = {
			to: contractAddress, // Required except during contract publications.
			from: window.ethereum.selectedAddress, // must match user's active address.
			data: window.contract.methods.getTotalSupply().encodeABI(),
		};
		try {
			const total = await window.ethereum.request({
				method: "eth_call",
				params: [transactionParameters],
			});
			try {
				const test = parseInt(Number(total), 10);
				return {
					total: test,
				};
			} catch (e) {
				return {
					total: 0,
				};
			}
		} catch (error) {
			return {
				total: 0,
			};
		}
	} catch (e) {
		return {
			total: 0,
		};
	}
};

const Hero = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const [videoModalActive, setVideomodalactive] = useState(false);
	const [status, setStatus] = useState("");
	const [success, setSuccess] = useState("");
	const [total, setTotal] = useState("");
	const totalSupply = async () => {
		const { total } = await getTotal();
		setTotal(total);
	};

	const test = async () => {
		try {
			await window.ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: "0x89" }],
			});
		} catch (switchError) {
			// This error code indicates that the chain has not been added to MetaMask.
			if (switchError.code === 4902) {
				try {
					await window.ethereum.request({
						method: "wallet_addEthereumChain",
						params: [{ chainId: "0x89", rpcUrl: "https://polygon-rpc.com" }],
					});
				} catch (addError) {
					// handle "add" error
				}
			}
			// handle other "switch" errors
		}
	};

	const trythis = async () => {
		if (provider) {
			console.log("Ethereum successfully detected!");

			// From now on, this should always be true:
			// provider === window.ethereum

			// Access the decentralized web!

			// Legacy providers may only have ethereum.sendAsync
			return await window.ethereum
				.request({
					method: "eth_chainId",
				})
				.then(console.log);
		} else {
			// if the provider is not detected, detectEthereumProvider resolves to null
			//	console.error("Please install MetaMask!", error);
		}
	};
	const chain = trythis();

	console.log(chain);
	if (chain != "0x89") {
		test();
	}

	totalSupply();

	const onMintPressed = async () => {
		const { status, success } = await mintNFT();
		setStatus(status);
		setSuccess(success);
	};

	const showTx = (bool) => {
		if (bool) {
			return (
				<p id='status' style={{ color: "white" }}>
					<a href={status}>View Transaction</a>
				</p>
			);
		}
	};

	const Completionist = () => {
		return (
			<div className='mt-16 mb-16'>
				<ButtonGroup>
					<a href='https://diadragons.myshopify.com/collections/all'>
						<Button tag='a' color='primary' wideMobile id='mintButton'>
							Shop Now
						</Button>
					</a>
					<Button
						className='ml-24'
						tag='a'
						color='primary'
						wideMobile
						id='mintButton'
						onClick={onMintPressed}>
						Mint with MATIC
					</Button>
				</ButtonGroup>
			</div>
		);
	};
	// Renderer callback with condition
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			return (
				<div>
					<h1 className='m-0 mb-16'>Welcome To Diadragons! </h1>
					<p>{total}/11,111</p>
					<img src={diadragongif} alt='loading...' width={256} height={256} />
					{<Completionist />}
					<div>{showTx(success)}</div>
				</div>
			);
		} else {
			// Render a countdown
			return (
				<div>
					<h2></h2>
					<p className='m-0 mb-16'>
						Once you have minted your Diadragon egg Join our{" "}
						<a href='https://discord.gg/xNwzzYGupY'>discord</a> and type !join
						in any channel to get verified!
					</p>

					<img src={diadragongif} alt='loading...' width={256} height={256} />
					{<Completionist />}
					<div>{showTx(success)}</div>
				</div>
			);
		}
	};

	const outerClasses = classNames(
		"hero section center-content",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"hero-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	return (
		<section {...props} className={outerClasses}>
			<div className='container-sm'>
				<div className={innerClasses}>
					<div className='hero-content'>
						<div className='reveal-from-bottom' data-reveal-delay='600'>
							<Countdown
								date={
									//Date.now() +
									Date.UTC(2021, 9, 30, 17, 0, 0, 0).valueOf() - Date.now()
								}
								renderer={renderer}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='{innerClasses}'>
				<iframe
					width='70%'
					height='315'
					src='https://www.youtube.com/embed/0L68m7e7_9w'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen></iframe>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
