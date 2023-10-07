import React, { useState } from 'react';

import './nav.css';

function DropdownMenu({ options, onSelect }) {
	const [selectedOption, setSelectedOption] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		onSelect(option);
		setIsOpen(false);
	};

	return (
		<div className="dropdown">
			<button className="dropDownToggle" onClick={() => setIsOpen(!isOpen)}>
				<span class="material-symbols-outlined">menu</span>
			</button>
			{isOpen && (
				<ul className="dropDownMenu">
					{options.map((option, index) => (
						<ul className="menuLinks" onClick={() => handleOptionClick(option)}>
							<li className="links">Home</li>
							<li className="links">About</li>
							<li className="links">Menu</li>
							<li className="links">Reservations</li>
							<li className="links">Order Online</li>
							<li className="links">Login</li>
						</ul>
					))}
				</ul>
			)}
		</div>
	);
}

export default DropdownMenu;
