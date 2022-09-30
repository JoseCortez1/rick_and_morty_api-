import logo from "./logo.svg";
import "./App.css";
import Characters from "./Components/Characters";
import { useContext, useState } from "react";
import ThemesContext from "./Context/ThemesContext";
import Themes from "./Components/Themes/Themes";

function App() {
	const { theme } = useContext(ThemesContext);
	return (
		<div className={`App  ${theme} `}>
			<Themes />
			<Characters />
		</div>
	);
}

export default App;
