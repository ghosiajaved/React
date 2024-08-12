
import './App.css';
import React, { useEffect } from 'react'
import Navbar from './components/Navbar';
import State from './components/State';

var name = "Learner";
const x = 5;
let text = " ";
if (x >= 5) {
  text = "Lets Get Started !";
}

function App() {

  useEffect(() => {
    console.log("Component Rendered");
  })

  return (

    <>
      {/*  JSX makes it easier to write and add HTML in React.
       JSX converts HTML tags into react elements. */}

      <Navbar title="DREAMSCAPE" home="Home" features="Features" about="About" />

      <div className='intro'>
        <h1>Hello {name}</h1><br></br>
        <h1>React App With Ghosia <br></br>
          React is {5 + 5} times better than JSX</h1>
        <h3>{text}</h3>
        <p>This is my first react app and
          I am happy to work on it</p>
      </div>
      <br></br>
      <State />
      <br></br>
      <br></br>

    </>

  );
}

export default App;
