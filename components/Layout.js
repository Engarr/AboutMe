import React, { Fragment } from 'react';
import Head from 'next/head';
import MainNavigation from './MainNavigation';
import Footer from './Footer';

const Layout = (props) => {
	return (
		<div>
			<Head>
				<title> AboutMe: Łukasz Woś </title>
			</Head>

			<MainNavigation />

			<main>{props.children}</main>
			<footer>
				<Footer/>
			</footer>
		</div>
	);
};

export default Layout;
