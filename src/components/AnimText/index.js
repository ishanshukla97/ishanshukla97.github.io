import React from "react";
import "./index.scss";

const AnimText = props => {
	const letters = props.text.split("");
	var className;

	if (props.active) {
		className = "anim-text__word anim-text__word" + "--active";
	} else if (props.inactive) {
		className = "anim-text__word anim-text__word" + "--inactive";
	} else {
		className = "anim-text__word anim-text__word";
	}

	return (
		<div className={className}>
			{letters.map(l => {
				return (
					<span
						style={{ transitionDelay: Math.random() * 1000 + "ms" }}
						className="anim-text__letter"
					>
						{l}
					</span>
				);
			})}
		</div>
	);
};

export default AnimText;
