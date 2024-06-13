import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer.js";
import LandingPage from "./components/LandingPage.js";
import Navbar from "./components/Navbar.js";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import ChangeInfo from './Change/ChangeInfo';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<LandingPage />
				<Routes>
					<Route path="/" element={<Home />} />
					//<Route path="/about" element={<About />} />
  				<Route path="/changeInfo" element={<ChangeInfo />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
