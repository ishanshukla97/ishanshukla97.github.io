import React from "react";
import NavBar from "./components/Navigation";
import Header from "./components/Header";
import "./sass/main.scss";

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<Header />
		</React.Fragment>
	);
}

export default App;
