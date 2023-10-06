import React from 'react';

import './nav.css';

export default function Nav() {
  return (
    <nav className="topNavbar">
      <div className="navContainer">
      <img
        src="https://loopstudio-jt-frontendmentor.netlify.app/static/media/logo.5b4e652aff88b09ef8f1d465f3db445b.svg"
        alt="Little Lemon img"
        className="logo"
      />
      <ul className="navLinks">
        <li className="links">Home</li>
        <li className="links">About</li>
        <li className="links">Menu</li>
        <li className="links">Reservations</li>
        <li className="links">Order Online</li>
        <li className="links">Login</li>
      </ul>
      </div>
    </nav>
  );
}
