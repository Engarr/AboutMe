import '../styles/globals.css';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState('light');


	return (
		<>
			<body >
				<Layout>
					<Component {...pageProps}  />
				</Layout>
			</body>
		</>
	);
}
