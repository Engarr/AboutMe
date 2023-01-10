import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();

	return (
		<div className={classes.footer}>
			&#174;
			<p>
				Rok publikacji: <time id='current-year'>{year}</time>
			</p>
		</div>
	);
};

export default Footer;
