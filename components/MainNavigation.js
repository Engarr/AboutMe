import React, { useState } from 'react';
import Link from 'next/link';
import { BsCodeSlash } from 'react-icons/bs';
import { BsGithub} from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaWindowClose } from 'react-icons/fa';
import classes from './MainNavigation.module.css';
import DarkMode from "./DarkMode"

const MainNavigation = () => {
	const [isShown, setIsShown] = useState(false);

	const showMenu = () => {
		setIsShown(true);
	};
	const closeMenu = () => {
		setIsShown(false);
	};

	return (
		<header className={classes.header}>
			<GiHamburgerMenu className={classes.burgerIcon} onClick={showMenu} />
			
			{isShown ? (
				<div className={classes.backdrop} onClick={closeMenu}>
					
					<FaWindowClose className={classes.closeBtn} onClick={closeMenu} />
					<ul className={classes.headerItems}>
						<li>
							<Link href='/'>
								<div className={classes.homeBox}>
									<i>
										<BsCodeSlash />
									</i>
									<p>Home</p>
								</div>
							</Link>
						</li>

						<li>
							<a href='https://github.com/Engarr'> Portfolio</a>
						</li>
						<li>
							<a href='https://github.com/Engarr'>
								<BsGithub /> GitHub
							</a>
						</li>
						<li>
							<DarkMode/>
						</li>
					</ul>
				</div>
			) : (
				<div>
					<ul className={classes.headerItemsBig}>
						<li>
							<Link href='/'>
								<div className={classes.homeBoxBig}>
									<i>
										<BsCodeSlash />
									</i>
									<p>Home</p>
								</div>
							</Link>
						</li>

						<li>
							<a href='https://github.com/Engarr'> Portfolio</a>
						</li>
						<li>
							<a href='https://github.com/Engarr'>
								<BsGithub /> GitHub
							</a>
						</li>
						<li>
							<DarkMode/>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

export default MainNavigation;
