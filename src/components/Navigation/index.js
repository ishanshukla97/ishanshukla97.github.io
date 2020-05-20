import React from "react";
import "../../sass/main.scss";

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100);

const NavBar = props => {
	return (
		<nav className="navigation">
			<div
				className="navigation__item"
				onClick={() => scrollToRef(props.itemRefs[0])}
			>
				Projects
			</div>
			<div
				className="navigation__item"
				onClick={() => scrollToRef(props.itemRefs[1])}
			>
				Tech Stack
			</div>
			<div className="navigation__item">
				<a
					href="https://drive.google.com/open?id=1yDHR7rsa71sMJ3qoPTW5quouVSKWROPD"
					className="u-no-style-link"
				>
					Resume
				</a>
			</div>
			<div
				className="navigation__item"
				onClick={() => scrollToRef(props.itemRefs[2])}
			>
				Contact
			</div>
		</nav>
	);
};

export default NavBar;
