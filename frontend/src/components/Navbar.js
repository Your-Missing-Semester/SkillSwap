import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
	return(
		<nav className="navbar">
			<ul className="navbar-links">
				<li><Link to="/">HOME</Link></li>
				<li><Link to="/">XXXXXX</Link></li>
				<li><Link to="/">XXXXXX</Link></li>
				<li><Link to="/about">ABOUT</Link></li>
			</ul>
		</nav>
	);
};

export default Navbar;