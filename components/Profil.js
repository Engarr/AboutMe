import React from 'react';
import classes from './Profil.module.css';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';

const Profil = () => {
	return (
		<div className={classes.profilBox}>
			<div className={classes.infoBox}>
				<div className={classes.nameBox}>
					<p className={classes.name}>Łukasz Woś</p>
					<p className={classes.detail}>Front-End Developer</p>
				</div>
				<div className={classes.socialMediaBox}>
					<p>
						<Link href='https://www.facebook.com/profile.php?id=100001584875603'>
							<BsFacebook className={classes.fb} />
						</Link>
					</p>
					<p>
						<a href='https://www.instagram.com/wosiiiu/'>
							<BsInstagram className={classes.ig} />
						</a>
					</p>
					<p>
						<a href='/'>
							<BsLinkedin className={classes.li} />
						</a>
					</p>
				</div>
			</div>

			<div>
				<a href='https://www.facebook.com/photo/?fbid=4620306204698830&set=a.116304678432361'>
					<img
						src='https://scontent.fktw1-1.fna.fbcdn.net/v/t39.30808-6/244415886_4620306191365498_9152555187707568624_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2MZROskBjlgAX_49xD2&_nc_ht=scontent.fktw1-1.fna&oh=00_AfCLlY8ok0yH9D38eBUtIvPX7HgV8wiBQIu_EB8Xp0qk6Q&oe=63CFD8B9'
						className={classes.imgBox}
					/>
				</a>
			</div>
		</div>
	);
};

export default Profil;
