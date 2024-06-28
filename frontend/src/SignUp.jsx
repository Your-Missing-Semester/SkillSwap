import React from 'react';
import './SignUp.module.css';


function SignUp() {
  return (    
    <div >

    <form className='form'>

        <h1>Sign Up</h1>
        
        <div className='form-group'>

        <label>Email:</label>
            <input type="email" name="email" />
            
        </div>
        
        <div className='form-group'>
        <label>Password:</label>
        <input type="password" name="password" />
        </div>
        
        
        <div className='form-group'>
        <label>Retype Password: </label>
        <input type="password" name="password" />
        </div>
       
        <div className='submit-Option'>
        <input type="submit" value="Sign Up" />

        <button className="logIn-Button">
          Log In
          </button>
        </div>


    </form>
  
    </div> 

  );

}

export default SignUp;
