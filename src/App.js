import React from "react";
import NavBar from "./components/Navigation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import "./sass/main.scss";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<Header />
			<Projects />
			<Skills />
			<Contact />
		</React.Fragment>
	);
}

export default App;
