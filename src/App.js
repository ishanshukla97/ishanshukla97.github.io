import React from "react";
import NavBar from "./components/Navigation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import "./sass/main.scss";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
	const projectsRef = React.useRef(null);
	const skillsRef = React.useRef(null);
	const contactRef = React.useRef(null);

	const refsList = [projectsRef, skillsRef, contactRef];

	return (
		<React.Fragment>
			<NavBar itemRefs={refsList} />
			<Header />
			<Projects mref={projectsRef} />
			<Skills mref={skillsRef} />
			<Contact mref={contactRef} />
		</React.Fragment>
	);
}

export default App;
