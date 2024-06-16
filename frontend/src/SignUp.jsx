import React from 'react';
import './SignUp.css';


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
       
        <div className='submitOption'>
        <input type="submit" value="Sign Up" />
        <button className="logInButton">Log In</button>
        </div>
    
    </form>
  
    </div> 
    

  );

}

export default SignUp;


