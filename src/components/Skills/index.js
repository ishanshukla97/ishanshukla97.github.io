import React from "react";

const Skills = props => {
	return (
		<section className="section-skills">
			<h1 className="heading-primary u-margin-bottom-big">Tech Stack</h1>
			<div className="section-skills__content-wrap">
				<div className="section-skills__card">
					<img src="skill-1.png" />
					<p className="section-skills__caption">NodeJs/ExpressJs</p>
				</div>
				<div className="section-skills__card">
					<img src="skill-2.png" />
					<p className="section-skills__caption">
						Apollo Sever/Client
					</p>
				</div>
				<div className="section-skills__card">
					<img src="skill-3.png" />
					<p className="section-skills__caption">Graphql</p>
				</div>
				<div className="section-skills__card">
					<img src="skill-4.png" />
					<p className="section-skills__caption">ReactJS</p>
				</div>
				<div className="section-skills__card">
					<img src="skill-5.png" />
					<p className="section-skills__caption">SASS</p>
				</div>
			</div>
		</section>
	);
};

export default Skills;
