import React, { useContext } from "react";
import ThemesContext from "../../Context/ThemesContext";
const Themes = () => {
	const { theme, setTheme } = useContext(ThemesContext);
	console.log(theme);

	const handleTheme = (e) => {
		console.log(e, e.target.value);
		setTheme(e.target.value);
	};

	return (
		<div>
			<select value={theme} onChange={handleTheme} className={`select `}>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="purple">Purple</option>
				<option value="green">Green</option>
				<option value="blue">Blue</option>
			</select>
		</div>
	);
};

export default Themes;
