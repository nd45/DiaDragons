import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
				<h3 className='vertical-timeline-element-title'>Prelaunch</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4> */}
				<p>
					⚬ Daily challenges to win a Free-Diadragon! <br />
					⚬ Weekly townhalls & kahoot challenges: <br />
					&emsp;• Get updates from the team and chat with us about the project!
					<br />
					⚬ Weekly townhalls
					<br /> ⚬ Pre-launch merch!
					<br />
					&emsp;• Deets announced soon! Invite 10 friends to the discord to get
					access to the hidden chat!
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
					Pre-Sale: October 27th
				</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>
					San Francisco, CA
				</h4> */}
				<p>
					{/* ⚬ If you invite 10 friends and answer a question you will have access
					to our pre-launch! This is the best way to get a diadragon (or two)
					with low gas fees! */}
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
					Mint Day: October 30th
				</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>Los Angeles, CA</h4> */}
				{/* <p>User Experience, Visual Design</p> */}
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				contentStyle={{ background: "#242526", color: "#fff" }}
				// date='April 2013'
				iconStyle={{ background: "#23ccfa", color: "#fff" }}
				// icon={<SchoolIcon />}
			>
				<h3 className='vertical-timeline-element-title'>
					Diabetes awareness month: November 2021
				</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>Online Course</h4> */}
				<p>
					⚬ Got any games?
					<br />
					&emsp;• Earn Your Wings Challenge Announcement. <br />
					⚬ Make it rain
					<br />
					&emsp;• Life Drops begin. <br />
					⚬ Twitter takeover
					<br />
					&emsp;• Change your PFP to gain access to new Diadragon banners,
					memes, and animations. <br />
					&emsp;• Art contests, theme song contest. <br />
					⚬ Ready for our close up
					<br />
					&emsp;• Diadragons hits the press. Diadragons will be featured in
					ExpressionMed’s annual Diabetes Awareness month partnerships and
					influencer promotions. <br />
					⚬ Health Focused Weekly Giveaways
					<br />
					&emsp;• Nutrisense, Levels, Cooking Lessons, Personal Trainers, Scuba
					Certification, Castle Tour Vacation, and more! <br />
					&emsp;• These giveaways will be based on which traits your Diadragon
					has so make sure you collect a variety of traits! <br />{" "}
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				contentStyle={{ background: "#242526", color: "#fff" }}
				// date='November 2012'
				iconStyle={{ background: "#23ccfa", color: "#fff" }}
				// icon={<SchoolIcon />}
			>
				<h3 className='vertical-timeline-element-title'>December</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>Certification</h4> */}
				<p>
					⚬ Merch for Diadragon Holders
					<br />⚬ Diadragons Cookbook: Metabolic Health Noms iykyk
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className='vertical-timeline-element--education'
				contentStyle={{ background: "#242526", color: "#fff" }}
				// date='2002 - 2006'
				iconStyle={{ background: "#23ccfa", color: "#fff" }}
				// icon={<SchoolIcon />}
			>
				<h3 className='vertical-timeline-element-title'>Q1-2022</h3>
				{/* <h4 className='vertical-timeline-element-subtitle'>Bachelor Degree</h4> */}
				<p>
					⚬ Product development for awareness (interactive merch!)
					<br />⚬ DAO <br />
					&emsp;• We want to build a DAO with the initiative of filling the gaps
					in medical expenses and laws that are not currently filled by
					non-profits and insurance companies. Some people are not supported due
					to government restrictions. Let’s decide together who needs our help
					and what we can do about it
				</p>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
};
export default Timeline;
