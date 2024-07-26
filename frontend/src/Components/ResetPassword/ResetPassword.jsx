import React from 'react';
import './ResetPassword.module.css';
import axios from 'axios';
import {
  Form,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";

const ResetPassword = () => {

  const navigate = useNavigate();

  function handleSave({newPassword}) { 
    axios.post(`http://localhost:8000/resetPassword`, {
      password: document.getElementById('newPassword').value
    })
    .then(function (response) {
      console.info(response)
      alert('Sent!')
    })
    .catch( function (error){
      console.error(error)
      alert('Error submitting password change')
    });
  }
  
  function handleCancel() {
    alert('Returning to previous page');
    navigate(-1)
    
  }

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
              <input type="password" id="newPassword" placeholder='New Password' />
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="password" id="passwordConfirm" placeholder='Confirm Password'/>
            </div>
          </div>
          <div className='submit-container'>
            <div className='submit save' onClick={handleSave}>SAVE</div>
            <div className='submit cancel' onClick={handleCancel}>CANCEL</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
