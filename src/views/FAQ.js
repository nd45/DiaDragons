import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

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
