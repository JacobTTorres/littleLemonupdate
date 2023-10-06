import React from 'react';

import './header.css';

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
        <img
          src="https://loopstudio-jt-frontendmentor.netlify.app/static/media/image-interactive.1d330522c9ca6cf07a9c.jpg"
          alt=""
          className="headerImg"
        />
      </div>
    </header>
  );
}
