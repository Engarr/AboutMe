import React, { useCallback, useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import classes from './DarkMode.module.css';

const DarkMode = () => {
	const [theme, setTheme] = useState('light');
	
	useEffect(() => {
		const data = localStorage.getItem('theme');
		const body = document.body;
		body.classList.add(data);
		
		return () => {
			
			body.classList.remove(data);
		};
	}, [theme]);

	const switchTheme = () => {
		setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
		localStorage.setItem('theme', theme);
		console.log(theme);
	};

	return (
		<button className={classes.darkModeBtn} onClick={(e) => switchTheme(e)}>
			{theme === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />}
		</button>
	);
};

export default DarkMode;
