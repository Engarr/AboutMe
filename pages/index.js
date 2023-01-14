import React from 'react';
import Profil from '../components/Profil';
import AboutMe from '../components/AboutMe';
import classes from '../styles/index.module.css';
import { FaReact } from 'react-icons/fa';

const index = () => {
	return (
		<div className={classes.mainBox}>
			<FaReact className={classes.cube} />
			<Profil />
			<AboutMe />
		</div>
	);
};

export default index;
