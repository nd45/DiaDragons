import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import image1 from "./../../assets/images/features-split-image-01.png";
import image2 from "./../../assets/images/features-split-image-02.png";
import image3 from "./../../assets/images/features-split-image-03.png";

const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}) => {
	const outerClasses = classNames(
		"features-split section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-split-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const splitClasses = classNames(
		"split-wrap",
		invertMobile && "invert-mobile",
		invertDesktop && "invert-desktop",
		alignTop && "align-top"
	);

	const sectionHeader = {
		title: "What are Diadragons?",
		paragraph:
			"Diadragons are adorable dragons who dedicate their lives to keeping humans healthy and happy. Like a puppy, but less fluffy. They are one-of-a-kind NFTs that live on the Ethereum blockchain.",
	};

	return (
		<section {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className='center-content' />
					<div className={splitClasses}>
						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-left'
								data-reveal-container='.split-item'>
								<h3 className='mt-0 mb-12'>Why should I adopt a Diadragon? </h3>
								<p className='m-0'>
									Besides being the cutest, cuddliest digital art, Diadragons
									have two purposes: To create Life Juice, and to keep you happy
									and healthy.
								</p>
								<h3 className='mt-0 mb-12'>Life Juice?</h3>
								<p className='m-0'>
									The lore: The Diadragon you adopt will fly your donation of
									Ethereum to the Cloud Converter in the sky where it will be
									processed into a magical substance called Life Juice. Once the
									Cloud Converter is full, it squeezes out a Life Drop. In the
									real world, this translates to a year’s worth of insulin and
									glucose monitoring supplies for someone who needs them to
									survive.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container='.split-item'>
								<Image
									src={image3}
									alt='Features split 01'
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-right'
								data-reveal-container='.split-item'>
								<h3 className='mt-0 mb-12'>Why? </h3>
								<p className='m-0'>
									People with Type One Diabetes don’t make insulin at all.
									Without it they die. In the US, insulin and supplies cost
									hundreds of dollars a month. It’s like paying a second rent,
									just to stay alive.
								</p>
								<h3 className='mt-0 mb-12'>Who?</h3>
								<p className='m-0'>
									Two entrepreneurs, two developers, an artist from the UK, and
									an amazing mentor from the successful NFT project, Space
									Poggers. Learn more on our discord.
								</p>
								<h3 className='mt-0 mb-12'>How?</h3>
								<p className='m-0'>
									When we’ve collected enough Ethereum to build a Life Drop, we
									will select one NFT holder and give them control over the Life
									Drop. They can use it on themselves, gift it to a friend, or
									gift it to a family suggested by one of our partner charities.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container='.split-item'>
								<Image
									src={image2}
									alt='Features split 02'
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-left'
								data-reveal-container='.split-item'>
								<h3 className='mt-0 mb-12'>Weekly Prize Drops</h3>
								<p className='m-0'>
									A portion of NFT sales will go towards YOU. We will be
									conducting giveaways every single week with a focus on health
									and life experience. Always wanted a personal trainer but
									never made the commitment? Your Diadragon will bring you one.
									Wanted to take a trip to Europe but haven’t prioritized it?
									Your Diadragon may have the whole thing already planned out
									for you.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container='.split-item'>
								<Image
									src={image1}
									alt='Features split 03'
									width={528}
									height={396}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
