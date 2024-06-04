import React from 'react';
import './App.css';
import SignUp from './SignUp';


function App() {

  // const [count, setCount] = useState(0);
  // function handleClick() {
  //   setCount(count + 1);
  // }

  return (

    <div className='App'>
      <header className="header">

      {/* <h1> Welcome to my app</h1> */}
      <SignUp  />
      
      </header>

    </div>
    
  );

}

export default App;