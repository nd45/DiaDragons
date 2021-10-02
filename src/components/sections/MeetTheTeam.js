import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import image1 from "./../../assets/images/meet1.jpeg";
import image2 from "./../../assets/images/meet2.jpeg";
import image3 from "./../../assets/images/meet3.jpeg";
import image4 from "./../../assets/images/meet4.jpeg";
import image5 from "./../../assets/images/meet5.jpeg";
import styles from "./../../App.css";

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};
const MeetTheTeam = ({
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
		title: "Our Team",
		paragraph: "",
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
											width={160}
											height={160}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Meghan</h4>
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
											width={160}
											height={160}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Amy</h4>
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
											width={160}
											height={160}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Rohit</h4>
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
											width={160}
											height={160}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Nick</h4>
								</div>
							</div>
						</div>
						<div className='tiles-item reveal-from-bottom'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={image5}
											alt='Features tile icon 05'
											width={160}
											height={160}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Emma</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

MeetTheTeam.propTypes = propTypes;
MeetTheTeam.defaultProps = defaultProps;

export default MeetTheTeam;
