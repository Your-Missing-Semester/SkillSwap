import React from "react";
import "./LoginForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  function handleSave() {
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
  function handleCanceRegister() {
    alert("Returning to Sign Up Page");
    navigate("/sign-up");
  }
  function handleCancelForgot() {
    alert("Returning to Reset Password Page");
    navigate("/reset-password");
  }

  return (
    <div className="starter">
      <form action="">
        <h1>Login</h1>

        <div className="input-box">
          <input type="email" placeholder="Username" required id="username" />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            id="password"
          />
        </div>

        <div className="remember-forgot">
          <input type="checkbox" id="rememberMe" />
          <label for="rememberMe">Remember me</label>

          <a href="#" onClick={handleCancelForgot}>
            Forgot password?
          </a>
        </div>

        <button type="submit" onClick={handleSave}>
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={handleCanceRegister}>
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
