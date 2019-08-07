import React from "react";
import NavBar from "./components/Navigation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import "./sass/main.scss";
import Skills from "./components/Skills";

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<Header />
			<Projects />
			<Skills />
		</React.Fragment>
	);
}

export default App;
