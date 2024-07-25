import React from 'react';
import './ResetPassword.module.css';
import axios from 'axios';
import {
  Form,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";

// import { Route, BrowserRouter, useNavigate as Router, Routes, useNavigate } from 'react-router-dom';



const ResetPassword = () => {
  function savePass() {
    alert('Clicked!');
  }
  
  function cancelPass() {
    alert('Returning to previous page');
    navigate(-1)
    
  }
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-container">

        <div className="form-section">
          <div className="header">
            <div className="text">Change Password</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="password" id="oldPassword" placeholder='Old Password' />
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="password" id="new-password" placeholder='New Password' />
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="password" id="passwordConfirm" placeholder='Confirm Password'/>
            </div>
          </div>
          <div className='submit-container'>
            <div className='submit save' onClick={savePass}>SAVE</div>
            <div className='submit cancel' onClick={cancelPass}>CANCEL</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
