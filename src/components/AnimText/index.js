import React from "react";
import "./index.scss";

const AnimText = props => {
	const letters = props.text.split("");
	var className = "anim-text__word anim-text__word";
	var maxDelay = 500;
	var minDelay = 10;

	if (props.active) {
		className += "--active";
		maxDelay = 1200;
		minDelay = 900;
	} else if (props.inactive) {
		className += "--inactive";
		maxDelay = 800;
	}

	return (
		<div className={className}>
			{letters.map(l => {
				return (
					<span
						style={{
							transitionDelay:
								randFromInterval(minDelay, maxDelay) + "ms"
						}}
						className="anim-text__letter"
					>
						{l === " " ? <span>&nbsp;</span> : l}
					</span>
				);
			})}
		</div>
	);
};

const randFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export default AnimText;
