import React from 'react';
import './ChangeInfo.module.css';

const ChangeInfo = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-section">
          <div className="header">
            <div className="text">Change Username</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="text" id="username" placeholder="Username" />
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="password" id="password" placeholder="Password" />
            </div>
          </div>
          <div className="submit-container">
            <div className="submit save">SAVE</div>
            <div className="submit cancel">CANCEL</div>
          </div>
        </div>
        <div className="form-section">
          <div className="header">
            <div className="text">Change Password</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input
                type="password"
                id="oldPassword"
                placeholder="Old Password"
              />
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input
                type="password"
                id="new-password"
                placeholder="New Password"
              />
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input
                type="password"
                id="passwordConfirm"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="submit-container">
            <div className="submit save">SAVE</div>
            <div className="submit cancel">CANCEL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeInfo;
