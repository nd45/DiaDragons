import React, { useState } from "react";
const Question = ({ title, info }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<article className='question'>
			<header>
				<h4 onClick={() => setExpanded(!expanded)} className='question-title'>
					{title}
				</h4>
				<button className='btn' onClick={() => setExpanded(!expanded)}>
					{expanded ? "-" : "+"}
				</button>
			</header>
			{expanded && <p>{info}</p>}
		</article>
	);
};

export default Question;
