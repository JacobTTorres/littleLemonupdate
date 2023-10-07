import React from 'react';
import './style.css';

import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

export default function App() {
	return (
		<>
			<div className="outterApp"></div>
			<div className="headerBackdrop"></div>
			<div className="appContainer">
				<Nav />
				<Header />
				<Main />
				<Footer />
			</div>
		</>
	);
}
