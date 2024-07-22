import React, { useState } from 'react';
import styles from './SignUp.module.css';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/sign-up', {
        username,
        password,
      });
      console.log('Signup successful:', response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
      console.error('Signup error:', err);
    }
  };


  
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className={styles['form-group']}>
          <input
            type="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="ReType Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={styles['submit-option']}>
          <button className={styles['sign-up-button']}>Sign Up</button>
          <button className={styles['log-in-button']}>Log In Instead</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
