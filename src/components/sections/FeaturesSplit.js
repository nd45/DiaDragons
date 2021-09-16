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
			"Diadragons are adorable dragons who dedicate their lives to keeping humanshealthy and happy. Like a puppy, but less fluffy. They are one of a kind NFTs that live on the Ethereum blockchain.",
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
									real world this translates to a full year of insulin and
									glucose monitoring supplies for someone who needs it to
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
									src={image1}
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
									When we’ve collected enough ethereum to build a Life Drop, we
									will select one NFT holder and give them control over the Life
									Drop. They can use it on themselves, gift it to a friend, or
									gift it to a family suggested by one of our partner charities.
								</p>
								<h3 className='mt-0 mb-12'>How?</h3>
								<p className='m-0'>
									When we’ve collected enough ethereum to build a Life Drop, we
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
								<h3 className='mt-0 mb-12'>Keeping you happy and healthy.</h3>
								<p className='m-0'>
									Like any pet, to your DiaDragon, you are the main character.
									They are here to support you in all the ways they can. Since
									they are digital and can’t give you real life cuddles like
									your favorite pupper, they give you opportunities to
									experience life differently. A portion of NFT sales (exact
									numbers below) will go towards YOU. We will be conducting
									giveaways every single week with a focus on health and life
									experience. Always wanted a personal trainer but never made
									the commitment? Your Diadragon will bring you one. Wanted to
									take your girl (or man (or best friend)) on a trip to Europe
									but haven’t prioritized it? Your Diadragon may have the whole
									thing already planned out for you. Not only do you have
									chances at winning every week (yes you can win more than once)
									but you also have the opportunity to be a part of a community
									of other dragon loving humans that are also excited about
									health and experiences!
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
