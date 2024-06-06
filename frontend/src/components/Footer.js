import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return(
		<footer className="footer">
			<div className="footer-1">
				<div className="footer-logo">LOGO</div>
				<ul>
					<li>FOLLOW US</li>
					<li className="social"></li>
					<li className="social"></li>
					<li className="social"></li>
				</ul>
			</div>
			<div className="footer-2">
				<p><Link to="/terms">Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link></p>
				<p>Business Inquiries: <a href="mailto:test@example.com">test@example.com</a></p>
			</div>
			<div className="footer-3">
				<p>Copyright &copy; 2024 SkillSwap | All Rights Reserved</p>
				<p>Customer Support: <a href="mailto:test@example.com">test@example.com</a></p>
			</div>
		</footer>
	);
}

export default Footer;