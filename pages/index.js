import React from 'react';
import Profil from '../components/Profil';
import classes from '../styles/index.module.css';

const index = () => {
	
	return (
		<div className={classes.mainBox}>
			<div className={classes.imageShadow}></div>

			<img
				src='https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				alt=''
				className={classes.backgroundImage}
			/>


			<Profil />
		</div>
	);
};

export default index;
