import { createContext, useState } from "react";

const ThemesContext = createContext({});

export const ThemesContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	return (
		<ThemesContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemesContext.Provider>
	);
};

export default ThemesContext;
