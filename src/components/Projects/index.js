import React from "react";

const Projects = props => {
	return (
		<section className="section-projects" ref={props.mref}>
			<h1 className="heading-primary u-margin-bottom-big">Projects</h1>
			<div className="section-projects__card">
				<div className="section-projects__image">
					<img src="proj-1.png" alt="project-1" />
					<a
						className="section-projects__info-btn"
						href="https://github.com/ishanshukla97/online-store"
					>
						Know More
					</a>
				</div>
				<div className="section-projects__content">
					<h3 className="heading-tertiary">Online Store</h3>
					<p className="paragraph">
						This project is made in Express, Graphql and React. It
						consist of user frontend where you can view products,
						add them in cart and checkout your order. A back office
						admin panel was built where an admin can create, remove,
						update or delete the product. Admin can also manage
						orders and change their status.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Projects;
