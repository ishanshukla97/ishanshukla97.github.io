import React from "react";
import {Tag} from '../Tag/Tag';

const Projects = props => {
	return (
		<section className="section-projects" ref={props.mref}>
			<h1 className="heading-primary u-margin-bottom-big">Projects</h1>
			<div className="section-projects__card">
				<div className="section-projects__image">
					<img src="proj-2.png" alt="project-2" />
					<a
						className="section-projects__info-btn"
						href="https://github.com/ishanshukla97/deep-builder"
					>
						Know More
					</a>
				</div>
				<div className="section-projects__content">
					<h3 className="heading-tertiary">Deep Builder</h3>
					<Tag content='React' />
					<Tag content='TensorflowJs' />
					<Tag content='Jest' />
					<Tag content='Cypress' />
					<Tag content='Typescript' />
					<p className="paragraph">
					A no code tool for building neural networks in the web. With this tool you can build neural networks without writing a single line of code. Drag layers from the components pane and drop them on the middle of screen. Set layer properties and connect multiple layers together to create a valid neural network. You can also download it in JSON format. However to actually consume the model in your project you have to convert it to keras/tensorflow format. Use tensorflowjs-converter for that purpose.
					</p>
				</div>
			</div>
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
					<Tag content='React' />
					<Tag content='Redux' />
					<Tag content='Jest' />
					<Tag content='Node' />
					<Tag content='Apollo' />
					<Tag content='Graphql' />
					<Tag content='MongoDB' />
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
