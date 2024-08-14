
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';


function App() {

  const handleClick = () => {
    alert("WELCOME TO HANDLING EVENTS TUTORIAL");
  }

  const handleMouseOver = () => {
    alert("Mouse Is Pointed Over Me");
  }

  function handleClickOp(message) {
    alert(message);
  }

  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick1(e) {
    console.log('Event type:', e.type);
    console.log('Button clicked:', e.target.innerText);
  }

  const [key, setKey] = useState('');

  function handleKeyDown(event) {
    setKey(event.key);
  }

  //If-else
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  //Logical &&
  const [isAdmin, setIsAdmin] = useState(true);  //hard-coded true... If false nothing will be displayed

  //Ternary Operator
  const [isSubscribed, setIsSubscribed] = useState(false);

  //In-line functions
  const [count, setCount] = useState(0);

  function countMessage() {
    if (count > 10) {
      return <p>Count is greater than 10 !</p>;
    }
    return <p>Keep counting...</p>;
  }

  //switch statement
  const [data, setData] = useState('idle');

  const renderData = () => {
    switch (data) {
      case 'loading':
        return <p>Fetching data...</p>;
      case 'success':
        return <p>Data fetched successfully !</p>;
      case 'error':
        return <p>Error fetching data.</p>;
      default:
        return <p>Data status unknown.</p>;
    }
  };

  return (

    <>
      {/*  JSX makes it easier to write and add HTML in React.
       JSX converts HTML tags into react elements. */}

      <Navbar title="DREAMSCAPE" home="Home" features="Features" about="About" branches="DREAMSCAPE Branches" />

      <div className="container" style={{ width: '800px', height: '710px', paddingTop: '30px' }}>
        <div className='intro'>

          <h1>HANDLING EVENTS IN REACT</h1>
          <br></br>
          <div className='clickButton'>
            <h4>1. Arrow Function</h4> <br></br>

            <button type="button" class="btn btn-dark" onClick={handleClick}>Click Me</button>

            <br></br><br></br>
            <h4>2. Function With Argument</h4> <br></br>

            <button type="button" class="btn btn-dark" onClick={() => handleClickOp("Button was clicked!")}>Click Me</button>

          </div>
          <br></br>
          <h4>3. Handling Events with State</h4> <br></br>

          <input type="text" value={inputValue} onChange={handleChange} /><br></br><br></br>
          <p>Current value: {inputValue}</p>

          <br></br><br></br>

          <button type="button" class="btn btn-dark" onClick={handleClick1}>Click Me</button>

          <br></br><br></br>

          <h4>4. Handling Keyboard Event</h4><br></br>
          <div>
            <input type="text" onKeyDown={handleKeyDown} />
            <br></br><br></br>
            <p>Last key pressed: {key}</p>
          </div> <br></br>

          <div className='mouseOver' onMouseOver={handleMouseOver}>
            Point Mouse On Me
          </div>

        </div>
        <br></br><br></br>

        <h1>CONDITIONAL RENDERING IN REACT</h1>
        <br></br>
        <h4>1. Using If-Else</h4>
        <br></br>
        {isLoggedIn ? (
          <div>
            <h5>Welcome back!</h5>
            <button type="button" class="btn btn-dark" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h5>Please sign in</h5>
            <button type="button" class="btn btn-dark" onClick={handleLogin}>Login</button>
          </div>
        )}
        <br></br><br></br>

        <h4>2. Using Logical AND (&&)</h4><br></br>

        {isAdmin && <h6>WELCOME ADMIN <br></br> <p>You have acces to all information</p></h6>}

        <br></br><br></br>

        <h4>3. Using Ternary Operator</h4><br></br>

        {isSubscribed ? (
          <div>
            <h6>Subscribed</h6><br></br>
            <button class="btn btn-dark" onClick={() => setIsSubscribed(false)}>Unsubscribe</button>
          </div>
        ) : (
          <div>
            <h6>Unsubscribed</h6><br></br>
            <button class="btn btn-dark" onClick={() => setIsSubscribed(true)}>Subscribe</button>
          </div>
        )}

        <br></br><br></br>

        <h4>4. Using In-line Functions</h4><br></br>
        <div>
          <h5>Count: {count}</h5><br></br>
          <button class="btn btn-dark" onClick={() => setCount(count + 1)}>Increase Count</button><br></br><br></br>
          {countMessage()}
        </div>
        <br></br><br></br>

        <h4>5. Using Switch Statement</h4><br></br>
        <div>
          <button class="btn btn-dark" onClick={() => setData('loading')}>Start Fetching</button><br></br><br></br>
          {renderData()}
        </div>
        <br></br><br></br>


      </div >



    </>

  );
}

export default App