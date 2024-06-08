import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
	return (
		<div className="landing-page">
			<div className="logo-1">
				<p>LOGO</p>
			</div>
			<div className="logo-2">
				<p>BANNER</p>
			</div>
			<div className="header-div">
				<header className="header">
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat.
					</p>
					<button>SIGN UP</button>
				</header>
				<div className="logo-3">
					<p>IMG</p>
				</div>
			</div>
			<div className="carousel-tri-div">
				<div className="carousel-tri-1">
					<div className="carousel-tri-img-1">IMG</div>
					<h3>Some text here</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className="carousel-tri-2">
					<div className="carousel-tri-img-2">IMG</div>
					<h3>Some text here</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className="carousel-tri-3">
					<div className="carousel-tri-img-3">IMG</div>
					<h3>Some text here</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className="body-div">
				<div className="body-div-column">
					<h1>Some text here</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<div className="body-img">IMG</div>
			</div>
		</div>
	);
};

export default LandingPage;
