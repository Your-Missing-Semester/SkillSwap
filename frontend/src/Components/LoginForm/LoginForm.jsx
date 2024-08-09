import React from "react";
import "./LoginForm.module.css";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const redirect = redirect();
  const navigate = useNavigate();

  function handleSave({ username, password }) {
    axios
      .post(`http://localhost:8000/log-in`, {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      })
      .then(function (response) {
        console.info(response);
        alert("Sent!");
      })
      .catch(function (error) {
        console.error(error);
        alert("Error submitting form");
      });
  }
  function handleCancel() {
    alert("Returning to previous page");
    navigate(-1);
  }

  return (
    <div className="starter">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="remember-forgot">
          <input type="checkbox" id="rememberMe" />
          <label for="rememberMe">Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
