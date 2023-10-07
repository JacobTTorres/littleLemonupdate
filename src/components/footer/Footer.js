import React from 'react';

import './footer.css';

export default function Footer() {
	return (
		<footer>
			<img
				src="https://loopstudio-jt-frontendmentor.netlify.app/static/media/image-interactive.1d330522c9ca6cf07a9c.jpg"
				alt=""
				className="footerImg"
			/>
			<div className="doormatContainer">
				<nav className="doormatNav">
					<h4 className="doormatHeader">
						Doormat <br /> Navigation
					</h4>
					<ul className="footerNav">
						<li className="footerNavLink">
							<p className="footerLinks">Home</p>
						</li>
						<li className="footerNavLink">
							<p className="footerLinks">About</p>
						</li>
						<li className="footerNavLink">
							<p className="footerLinks">Menu</p>
						</li>
						<li className="footerNavLink">
							<p className="footerLinks">Reservations</p>
						</li>
						<li className="footerNavLink">
							<p className="footerLinks">Order Online</p>
						</li>
						<li className="footerNavLink">
							<p className="footerLinks">Login</p>
						</li>
					</ul>
				</nav>
				<div className="contact">
					<h4 className="contactHead">Contact</h4>
					<p className="address">Address</p>
					<p className="phoneNumber">Phone Number</p>
					<p className="email">Email</p>
				</div>
				<div className="socialMedia">
					<h4 className="MediaHead">Social Media Links</h4>
					<p className="address">Address</p>
					<p className="phoneNumber">Phone Number</p>
					<p className="email">Email</p>
				</div>
			</div>
		</footer>
	);
}
