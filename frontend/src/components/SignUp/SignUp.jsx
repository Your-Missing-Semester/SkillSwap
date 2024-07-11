import React from 'react';
import styles from './SignUp.module.css';

function SignUp() {
  return (
    <div>
      <form className={styles.form}>
        <h1>Sign Up</h1>
        <div className={styles['form-group']}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="ReType Password" />
        </div>
        <div className={styles['submit-option']}>
          <button className={styles['sign-up-button']}>Sign Up</button>

          <button className={styles['log-in-button']}>Log In</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
