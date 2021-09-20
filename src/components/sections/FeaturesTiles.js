import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import image1 from "./../../assets/images/feature-tile-icon-01.svg";
import image2 from "./../../assets/images/feature-tile-icon-02.svg";
import image3 from "./../../assets/images/feature-tile-icon-03.svg";
import image4 from "./../../assets/images/feature-tile-icon-04.svg";
import image5 from "./../../assets/images/feature-tile-icon-05.svg";
import styles from "./../../App.css";

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
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
		"features-tiles section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-tiles-inner section-inner pt-0",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const tilesClasses = classNames(
		"tiles-wrap center-content",
		pushLeft && "push-left"
	);

	const sectionHeader = {
		title: "Milestones",
		paragraph:
			"As we meet the following milestones for our launch, we will release new updates on each of the corresponding goals! Each milestone refers to the percentage of total NFTs sold (out of 10,000).",
	};

	return (
		<section {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className='center-content' />
					<div className={tilesClasses}>
						<div className='tiles-item reveal-from-bottom'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<img
											className={styles.testhover}
											src={image1}
											alt='Features tile icon 01'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>10% sold</h4>
									<p className='m-0 text-sm'>
										Life Drops unlocked. 1 lucky Diadragon owner will be the
										first ever person to use or gift a Life Drop.
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='200'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={image2}
											alt='Features tile icon 02'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>25% sold</h4>
									<p className='m-0 text-sm'>
										Diadragon’s backstory and mission animation unlocked.
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='400'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={image3}
											alt='Features tile icon 03'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>50% sold</h4>
									<p className='m-0 text-sm'>
										The second Life Drop recipient will be chosen from the first
										5000 Diadragon owners.
									</p>
								</div>
							</div>
						</div>

						<div className='tiles-item reveal-from-bottom'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={image4}
											alt='Features tile icon 04'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>75% sold</h4>
									<p className='m-0 text-sm'>
										Community animations unlocked. Vote on which stories to tell
										and which Diadragon will be featured.
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='200'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={image5}
											alt='Features tile icon 05'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>100% sold</h4>
									<p className='m-0 text-sm'>
										Weekly giveaways unlocked. Follow our Twitter to see how to
										win! Life Drops will continue to be awarded as the project
										grows.
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

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
