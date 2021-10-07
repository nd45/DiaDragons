import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import MeetTheTeam from "../components/sections/MeetTheTeam";
// import sections

const FAQ = () => {
	const [questions, setQuestions] = useState(data);
	return (
		<main>
			<section className='info'>
				{questions.map((question) => (
					<SingleQuestion key={question.id} {...question} />
				))}
			</section>
		</main>
	);
};

export default FAQ;
