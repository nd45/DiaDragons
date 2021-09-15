import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};

const Testimonial = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		"testimonial section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"testimonial-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

	const sectionHeader = {
		title: "Where is this money coming from?",
		paragraph:
			"Like other NFT projects, Diadragons takes 6% royalties on all sales. These are like sales tax but with a purpose.",
	};

	return (
		<section {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className='center-content' />
					<div className={tilesClasses}>
						<div
							className='tiles-item reveal-from-right'
							data-reveal-delay='200'>
							<div className='tiles-item-inner'>
								<div className='testimonial-item-content'>
									<p className='testimonial-title'>2% to Creators</p>
									<p className='text-sm mb-0'>
										1% will go to our amazing artists. We are selling art after
										all, so it only makes sense that art is a permanent part of
										our future income. 1% will go to the creators and organizers
										of this project who will work tirelessly to ensure that all
										Diadragon owners receive an endless stream of value and
										community conversation.
									</p>
								</div>
							</div>
						</div>

						<div className='tiles-item reveal-from-bottom'>
							<div className='tiles-item-inner'>
								<div className='testimonial-item-content'>
									<p className='testimonial-title'>2% to the Community</p>
									<p className='text-sm mb-0'>
										Giving the people what they want and need! With all of the
										chaos we’ve endured this year we want to gift experiences
										that grow the health and happiness of Diadragon owners. They
										are supporting the health and happiness of families with
										diabetes so the Diadragons want to gift it right back. Uno
										reverse card.
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-left'
							data-reveal-delay='200'>
							<div className='tiles-item-inner'>
								<p className='testimonial-title'>2% to Cause</p>
								<div className='testimonial-item-content'>
									<p className='text-sm mb-0'>
										We thought long and hard about how to do this right. It’s a
										lot for our intro page so we wrote a blog about it. And for
										those of you who don’t like reading, here’s a video (link)
									</p>
								</div>
							</div>
						</div>
						<div
							className='tiles-item reveal-from-right'
							data-reveal-delay='200'>
							<div className='tiles-item-inner'>
								<p className='testimonial-title'>The other 94%?</p>
								<div className='testimonial-item-content'>
									<p className='text-sm mb-0'>
										To you of course! When you sell your Diadragon you keep the
										money. It’s like buying and selling any collectible item.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
