import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";

const Timeline = () => {
	return (
		<VerticalTimeline layout={"2-columns"} animate={false}>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				contentStyle={{ background: "#242526", color: "#fff" }}
				contentArrowStyle={{ borderRight: "7px solid  #fff" }}
				// date='2011 - present'
				iconStyle={{ background: "#23ccfa", color: "#fff" }}
				// icon={<WorkIcon />}
			>
				<h3 className='vertical-timeline-element-title'>
					Completed Milestones
				</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4> */}
				<p>
					⚬ Diadragons Backstory Animation revealed <br />
					⚬ Mission Video Released. <br />
					⚬ Giveaways & prizes sent to pre-sale contest winners. <br />
					⚬ ETH dragons Minted. <br />
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				contentStyle={{ background: "#242526", color: "#fff" }}
				contentArrowStyle={{ borderRight: "7px solid  #fff" }}
				// date='2011 - present'
				iconStyle={{ background: "#23ccfa", color: "#fff" }}
				// icon={<WorkIcon />}
			>
				<h3 className='vertical-timeline-element-title'>
					Surprise milestones!{" "}
				</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4> */}
				<p>
					⚬ When ETH gas surges our team doesn’t quit, we pivot. <br />
					⚬ Switch to Polygon to avoid gas fees. <br />
					⚬ Price adjustments.
					<br /> ⚬ Payment gateway for community who thinks in FIAT.
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				contentStyle={{ background: "#242526", color: "#fff" }}
				// date='2010 - 2011'
				iconStyle={{ background: "#23ccfa", color: "#fff" }}
				// icon={<WorkIcon />}
			>
				<h3 className='vertical-timeline-element-title'>
					The Great Migration: November 11
				</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>
					San Francisco, CA
				</h4> */}
				<p>
					⚬ Airdrop Polygon Diadragons to owners of ETH Diadragons. <br />⚬
					Reopen minting gateway for FIAT purchasing to eliminate gas fees for
					buyers.
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				contentStyle={{ background: "#242526", color: "#fff" }}
				// date='2008 - 2010'
				iconStyle={{ background: "#23ccfa", color: "#fff" }}
				// icon={<WorkIcon />}
			>
				<h3 className='vertical-timeline-element-title'>
					Diabetes Awareness Month:
				</h3>
				<p>
					⚬ Social Media challenges and Diadragon Art Contest. <br />
					⚬ Diadragons are featured in new channels ranging from Yahoo Finance
					to NFT Culture. <br />⚬ Health focused giveaways.
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				contentStyle={{ background: "#242526", color: "#fff" }}
				// date='April 2013'
				iconStyle={{ background: "#23ccfa", color: "#fff" }}
				// icon={<SchoolIcon />}
			>
				<h3 className='vertical-timeline-element-title'>Sold out:</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>Online Course</h4> */}
				<p>
					⚬ Donate at least 5 life drops and pay a year’s worth of insulin and
					cgm supplies for 5 people. If we still have funds left we will select
					more winners until we run out.
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				contentStyle={{ background: "#242526", color: "#fff" }}
				// date='November 2012'
				iconStyle={{ background: "#23ccfa", color: "#fff" }}
				// icon={<SchoolIcon />}
			>
				<h3 className='vertical-timeline-element-title'>
					Building a Life Drop Dao.{" "}
				</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>Certification</h4> */}
				<p>
					⚬ Diadragons are the first step to making insulin more accessible and
					affordable but they are not the last.
					<br />⚬ We will work with our partners Thanisi Dilos and the team at
					Civics Unplugged to build a DAO to collect donations, and a tokenomics
					system to allow the funds to be utilized to purchase insulin in a way
					that involves less manual labor than our current life drops execution
					strategy.
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				contentStyle={{ background: "#242526", color: "#fff" }}
				// date='2002 - 2006'
				iconStyle={{ background: "#23ccfa", color: "#fff" }}
				// icon={<SchoolIcon />}
			>
				<h3 className='vertical-timeline-element-title'>Games</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>Bachelor Degree</h4> */}
				<p>
					⚬ In our brainstorming channel on discord, there has been talk of a
					Diadragons meets flappy bird educational game. When we will sell out
					we will work to make this vision a reality. Intrigued to know how it
					would work? Jump into our{" "}
					<a href='https://discord.com/invite/hVYBgdKQVq'>Discord.</a>
				</p>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
};
export default Timeline;
