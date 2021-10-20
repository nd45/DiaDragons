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

const CauseHero = ({
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
						Welcome!
					</h1>
					<p className='m-0 mb-16'>
						The Diadragons Project is a community of non-diabetics and diabetics
						coming together during diabetes awareness month to take action,
						raise awareness, and get the attention of big brands to make changes
						that will improve the lives of everyone, but especially those living
						with diabetes. Adopting a Diadragon gives you access to real-life
						giveaways, gives you access to an online community, and contributes
						to Life Drops, the way that Diadragons helps to support real humans:
					</p>
					{/* <Completionist /> */}
					<div className='{innerClasses}'>
						<iframe
							width='70%'
							width='560'
							height='315'
							src='https://www.youtube.com/embed/0L68m7e7_9w'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen></iframe>
					</div>
					<p className='m-0 mt-16'>
						For more information about the logistics and mission of this
						project, check out this 9 minute explainer video!
					</p>
					<div className='{innerClasses} mt-16'>
						<iframe
							width='70%'
							width='560'
							height='315'
							src='https://www.youtube.com/embed/vz4-NDarUaE'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen></iframe>
					</div>
					<p className='m-0 mt-16'>
						Now that you understand our mission! Make an account and Come chat
						with us in <a href='https://discord.gg/hVYBgdKQVq'>discord</a>, and
						participate in competitions to win prizes like apple watches and
						Diadragons!
					</p>
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
		</section>
	);
};

CauseHero.propTypes = propTypes;
CauseHero.defaultProps = defaultProps;

export default CauseHero;
