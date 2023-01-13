import React, { useCallback, useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import classes from './DarkMode.module.css';
const DarkMode = () => {
	const [theme, setTheme] = useState('light');

	const switchTheme = useCallback(() => {
		setTheme((theme) => (theme === 'light' ? 'dark' : 'light')), [theme];
	});

	useEffect(() => {
		const body = document.body;

		body.classList.add(theme);
		return () => {
			document.body.classList.remove(theme);
		};
	}, [theme]);

	return (
		<button className={classes.darkModeBtn} onClick={(e) => switchTheme(e)}>
			{theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
		</button>
	);
};

export default DarkMode;