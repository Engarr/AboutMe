import React from 'react';
import classes from './AboutMe.module.css';
const AboutMe = () => {
	return (
		<div className={classes.aboutmeBox}>
			<h2>O mnie:</h2>
			<p className={classes.text}>
				losowe słowa o mnie, o moje historiilosowe słowa o mnie, o moje
				historiilosowe słowa o mnie, o moje historiilosowe słowa o mnie, o moje
				historiilosowe słowa o mnie, o moje historiilosowe słowa o mnie, o moje
				historiilosowe słowa o mnie, o moje historiilosowe słowa o mnie, o moje
				historiilosowe słowa o mnie, o moje historiilosowe słowa o mnie, o moje
				historiilosowe słowa o mnie, o moje historiilosowe słowa o mnie, o moje
				historiilosowe słowa o mnie, o moje historiilosowe słowa o mnie, o moje
				historiilosowe słowa o mnie, o moje historiilosowe słowa o mnie, o moje
				historiilosowe słowa o mnie, o moje historiilosowe słowa o mnie, o moje
				historiilosowe słowa o mnie, o moje historiilosowe słowa o mnie, o moje
				historiilosowe słowa o mnie, o moje historii
			</p>
			<h2>Moja Historia:</h2>
			<div className={classes.historyBox}>
				<p>
					<span>1111</span>: Opis wydarzenia
				</p>
				<p>
					<span>1111</span>: Opis wydarzenia
				</p>
				<p>
					<span>1111</span>: Opis wydarzenia
				</p>
				<p>
					<span>1111</span>: Opis wydarzenia
				</p>
			</div>
			<h2>Zainteresowania:</h2>
			<div>
				<p>Motoryzacja, programowanie, gry komputerowe, filmy</p>
			</div>
			<div className={classes.btnBox}>
				<button type='button' className={classes.btn}>
					Zapraszam do obejrzenia mojego CV
				</button>
			</div>
		</div>
	);
};

export default AboutMe;
