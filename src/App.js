
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
            <h4>Arrow Function</h4>
            <button type="button" class="btn btn-dark" onClick={handleClick}>Click Me</button>
            <br></br><br></br>
            <h4>Function With Argument</h4>
            <button type="button" class="btn btn-dark" onClick={() => handleClickOp("Button was clicked!")}>Click Me</button>
          </div>
          <br></br>
          <h4>Handling Events with State</h4>
          <input type="text" value={inputValue} onChange={handleChange} /><br></br><br></br>
          <p>Current value: {inputValue}</p>
          <br></br><br></br>
          <button type="button" class="btn btn-dark" onClick={handleClick1}>Click Me</button>
          <br></br><br></br>
          <h4>Handling Keyboard Event</h4>
          <div>
            <input type="text" onKeyDown={handleKeyDown} />
            <br></br><br></br>
            <p>Last key pressed: {key}</p>
          </div>

          {/* <div className='mouseOver' onMouseOver={handleMouseOver}>
            Point Mouse On Me
            </div> */}



        </div>






      </div >



    </>

  );
}

export default App;
