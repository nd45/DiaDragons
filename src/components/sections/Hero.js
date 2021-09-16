import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import placeholder from "./../../assets/images/video-placeholder.jpg";
import { mintNFT } from "../../util/interact.js";
import Countdown, { zeroPad } from "react-countdown";

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
		const { status } = await mintNFT();
		setStatus(status);
	};

	const openModal = (e) => {
		e.preventDefault();
		setVideomodalactive(true);
	};

	const closeModal = (e) => {
		e.preventDefault();
		setVideomodalactive(false);
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
		if (completed) {
			// Render a completed state
			return <Completionist />;
		} else {
			// Render a countdown
			return (
				<span style={{ color: "#23ccfa" }}>
					{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
				</span>
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
						<h1
							className='mt-0 mb-16 reveal-from-bottom'
							data-reveal-delay='200'>
							Countdown to launch
						</h1>
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
					<div
						className='hero-figure reveal-from-bottom illustration-element-01'
						data-reveal-value='20px'
						data-reveal-delay='800'>
						<a
							data-video='https://player.vimeo.com/video/174002812'
							href='#0'
							aria-controls='video-modal'
							onClick={openModal}>
							<Image
								className='has-shadow'
								src={placeholder}
								alt='Hero'
								width={896}
								height={504}
							/>
						</a>
					</div>
					<Modal
						id='video-modal'
						show={videoModalActive}
						handleClose={closeModal}
						video='https://player.vimeo.com/video/174002812'
						videoTag='iframe'
					/>
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
