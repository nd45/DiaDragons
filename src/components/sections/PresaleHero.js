import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
//import { mintNFT } from "../../util/interact.js";
import egg from "./../../assets/images/egg.gif";
import Countdown, { zeroPad } from "react-countdown";
import Select from "react-select";

const options = [
	{ value: "0.05", label: "1 Diadragon" },
	{ value: "0.23", label: "5 DiaDragons" },
	{ value: "0.4", label: "10 DiaDragons" },
	{ value: "1.75", label: "50 DiaDragons" },
];

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../../artifacts/contracts/DiaDragons.sol/Diadragons.json");
const contractAddress = "0x9c7F6bE687a6EE6Bc1C2eF28f33493F75e54413F";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

window.contract = new web3.eth.Contract(contractABI.abi, contractAddress);

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
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

	const onMintPressed = async () => {
		const { selectedOptions } = state;

		if (selectedOptions.value === undefined) selectedOptions.value = ".05";

		const { status } = await mintNFT(selectedOptions.value);
		setStatus(status);
	};

	const state = {
		selectedOptions: [],
	};

	const setState = (selected) => {
		state.selectedOptions = selected;
	};

	const handleChange = (selectedOptions) => {
		setState(selectedOptions);
	};
	const mintNFT = async (amount) => {
		window.contract = await new web3.eth.Contract(
			contractABI.abi,
			contractAddress
		);

		let method = window.contract.methods.mintDiaDragonTier1();
		if (amount === ".23") {
			method = window.contract.methods.mintDiaDragonTier2();
		} else if (amount === ".4") {
			method = window.contract.methods.mintDiaDragonTier3();
		} else if (amount === "1.75") {
			method = window.contract.methods.mintDiaDragonTier4();
		} else {
			method = window.contract.methods.mintDiaDragonTier1();
		}

		const transactionParameters = {
			to: contractAddress, // Required except during contract publications.
			from: window.ethereum.selectedAddress, // must match user's active address.
			value: web3.utils.numberToHex(web3.utils.toWei(amount, "ether")),
			data: method.encodeABI(),
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
				status: "😥 Something went wrong: " + error.message,
			};
		}
	};

	const Completionist = () => {
		return (
			<div>
				<ButtonGroup>
					<Button
						tag='a'
						color='primary'
						wideMobile
						id='mintButton'
						onClick={onMintPressed}>
						Mint DiaDragon
					</Button>
				</ButtonGroup>
				<p id='status' style={{ color: "red" }}>
					{status}
				</p>
			</div>
		);
	};
	// Renderer callback with condition
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		const { selectedOptions } = state;
		if (!completed) {
			// Render a completed state
			return (
				<div>
					<h1 className='mt-0 mb-16 reveal-from-bottom' data-reveal-delay='200'>
						Coming soon
					</h1>
					<h2 style={{ color: "#23ccfa" }}>
						{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:
						{zeroPad(seconds)}
					</h2>
					<p className='m-0 mb-16'>
						Join our Discord to be one of the first to mint a Diadragon!
					</p>
					<Select
						className='mt-0 mb-16'
						options={options}
						isClearable='false'
						onChange={handleChange}
					/>
					{selectedOptions.map((o) => (
						<p>{o.value}</p>
					))}
				</div>
			);
		} else {
			// Render a countdown
			return (
				<div>
					<h1 className='mt-0 mb-16 reveal-from-bottom' data-reveal-delay='200'>
						Mint Presale
					</h1>
					<p className='m-0 mb-16'>
						Join our Discord to be one of the first to mint a Diadragon!
					</p>
					<Select
						className='mt-0 mb-16'
						options={options}
						isClearable='false'
						onChange={handleChange}
						defaultValue={options[0]}
					/>
					{selectedOptions.map((o) => (
						<p>{o.value}</p>
					))}
					{<Completionist className='mt-0 mb-16' />}
					{/* <h2 style={{ color: "#23ccfa" }}>
						{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:
						{zeroPad(seconds)}
					</h2> */}
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
									Date.UTC(2021, 9, 30, 18, 0, 0, 0).valueOf() - Date.now()
								}
								renderer={renderer}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
