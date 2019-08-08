import React from "react";

const Social = props => {
	return (
		<div className="social-content">
			<a
				href="https://facebook.com/ishanxavi"
				className="social-content__btn"
			>
				<img src="facebook.png" alt="facebook" />
			</a>
			<a
				className="social-content__btn"
				href="https://github.com/ishanshukla97"
			>
				<img src="github.png" alt="github" />
			</a>
			<a
				className="social-content__btn"
				href="https://www.linkedin.com/in/ishan-shukla-975576107/"
			>
				<img src="linkedin.png" alt="linkedin" />
			</a>
		</div>
	);
};

export default Social;
