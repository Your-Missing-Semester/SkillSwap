import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';
import LandingPage from './components/LandingPage.js';
import Navbar from './components/Navbar.js';
import About from './pages/About.js';
import Home from './pages/Home.js';
import SignUp from './components/SignUp.jsx';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
