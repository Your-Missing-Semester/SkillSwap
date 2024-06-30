import React from 'react';
import styles from './SignUp.module.css'; // Adjusted import to use the styles object

function SignUp() {
  return (
    <div>

      <form className={styles.form}> {/* Using styles object */}
        <h1>Sign Up</h1>


        <div className={styles['form-group']}> {/* Using styles object with hyphenated class name */}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="ReType Password" />
        </div>

        <div className={styles['submit-Option']}>
          
        <button className={styles['signUp-Button']}>
            Sign Up
          </button>


          <button className={styles['logIn-Button']}>
            Log In
          </button>
          
        </div>
      </form>

    </div>
  );
}

export default SignUp;
