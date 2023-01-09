import React, { Fragment } from 'react';
import Head from 'next/head';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
	return (
		<div>
			<Head>
				<title> AboutMe: Łukasz Woś </title>
			</Head>

			<MainNavigation />

			<main>{props.children}</main>
		</div>
	);
};

export default Layout;
