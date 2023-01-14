import React, { useCallback, useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import classes from './DarkMode.module.css';

const DarkMode = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const data = localStorage.getItem('theme');
		setTheme(data);
		const body = document.body;
		body.classList.add(data);

		return () => {
			body.classList.remove(data);
		};
	}, [theme]);

	const switchTheme = useCallback(() => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		const data = localStorage.setItem('theme', newTheme);
		return (
			<button className={classes.darkModeBtn} onClick={(e) => switchTheme(e)}>
				{data === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
			</button>
		);
	}, [theme]);

	return (
		<button className={classes.darkModeBtn} onClick={(e) => switchTheme(e)}>
			{theme === 'light' ? <BsFillMoonFill className={classes.hide} /> : <BsFillSunFill className={classes.hide}/>}
		</button>
	);
};

export default DarkMode;
