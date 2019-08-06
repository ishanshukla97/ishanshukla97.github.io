import React from "react";
import "../../sass/main.scss";

const NavBar = props => {
	return (
		<nav className="navigation">
			<div className="navigation__item">Projects</div>
			<div className="navigation__item">Skills</div>
			<div className="navigation__item">Hobbies</div>
			<div className="navigation__item">Contact</div>
		</nav>
	);
};

export default NavBar;
