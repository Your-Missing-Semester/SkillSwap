import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Components/Footer.js';
import LandingPage from './Components/LandingPage.js';
import Navbar from './Components/Navbar.js';
import About from './pages/About.js';
import Home from './pages/Home.js';
import SignUp from './Components/SignUp/SignUp.jsx';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import ChangeInfo from "./Components/Change/ChangeInfo.jsx";
import ResetPassword from "./Components/ResetPassword/ResetPassword.jsx";



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
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;

