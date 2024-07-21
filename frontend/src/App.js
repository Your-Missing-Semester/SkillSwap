import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';
import LandingPage from './components/LandingPage.js';
import Navbar from './components/Navbar.js';
import About from './pages/About.js';
import Home from './pages/Home.js';
import SignUp from './components/SignUp/SignUp.jsx';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import ChangeInfo from './components/Change/ChangeInfo.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="log-in" element={<LoginForm />} />
        <Route path="change" element={<ChangeInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
