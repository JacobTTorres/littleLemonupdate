import React from 'react';

import './header.css';
import HeaderImg from '../../icons_assets/restauranfood.jpg';

export default function Header() {
	return (
		<header>
			<div className="left">
				<h1 className="headerTitle">Little Lemon</h1>
				<h3 className="location">Chicago</h3>
				<p className="headerInfo">
					We are a family owned <br />
					Mediterranean restaurant, <br />
					focused on traditional recipes <br />
					served with a modern twist.
				</p>
				<button className="resTableBtn">Reserve a Table</button>
			</div>
			<div className="right">
				<img src={HeaderImg} alt="" className="headerImg" />
			</div>
		</header>
	);
}
