import React, { useState } from 'react';

import DropDownMenu from './DropDownMenu';
import Logo from '../../icons_assets/Logo.svg';

import './nav.css';

export default function Nav() {
	const options = ['Option 1'];
	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelect = (option) => {
		setSelectedOption(option);
	};

	return (
		<nav className="topNavbar">
			<div className="navContainer">
				<img src={Logo} alt="Little Lemon img" className="logo" />
				<ul className="navLinks">
					<li className="links">Home</li>
					<li className="links">About</li>
					<li className="links">Menu</li>
					<li className="links">Reservations</li>
					<li className="links">Order Online</li>
					<li className="links">Login</li>
				</ul>
				<button className="navBtn">
					<DropDownMenu options={options} onSelect={handleSelect} />
				</button>
			</div>
		</nav>
	);
}
