import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { mintNFT } from "../../util/interact.js";
import Countdown from "react-countdown";
import egg from "./../../assets/images/egg.gif";

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../../artifacts/contracts/DiaDragons.sol/Diadragons.json");
const contractAddress = "0x1F9E51199D587190120C8180D0Ce0B9bd61D0229";
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


	// Renderer callback with condition
	const renderer = ({ completed }) => {
		if (completed) {
			// Render a completed state
			return (
				<div>
					<h1 className='mt-0 mb-16 reveal-from-bottom' data-reveal-delay='200'>
						Coming soon
					</h1>
					<p className='m-0 mb-16'>
						Join our Discord to be one of the first to mint a Diadragon!
					</p>
					<img src={egg} alt='loading...' width={256} height={256} />
					{/* <Completionist /> */}
				</div>
			);
		} else {
			// Render a countdown
			return (
				<div>
					<h1 className='mt-0 mb-16 reveal-from-bottom' data-reveal-delay='200'>
						Coming soon
					</h1>
					<p className='m-0 mb-16'>
						Join our Discord to be one of the first to mint a Diadragon!
					</p>
					<img src={egg} alt='loading...' width={300} height={300} />
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
									Date.UTC(2021, 8, 21, 12, 12, 0, 0).valueOf() - Date.now()
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
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
