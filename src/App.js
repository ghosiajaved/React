
import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import State from './components/State';
import Btn from './components/Btn';

var name = "Learner";
const x = 5;
let text = " ";
if (x >= 5) {
  text = "Lets Get Started !";
}

export const Context = React.createContext();

function App() {

  useEffect(() => {
    console.log("Component Rendered");
  })

  const [signedIn, setSignedIn] = useState(false);

  return (

    <>
      {/*  JSX makes it easier to write and add HTML in React.
       JSX converts HTML tags into react elements. */}

      <Context.Provider value={[signedIn, setSignedIn]}>
        <Navbar title="DREAMSCAPE" home="Home" features="Features" about="About" />
        <center>
            <h1>{signedIn ? "Signed In" : "Signed Out"}</h1>
          </center>
      </Context.Provider>

        <div className="container" style={{ width: '800px', height: '710px', paddingTop: '30px' }}>
          <div className='intro'>
            <h1>Hello {name}</h1><br></br>
            <h1>React App With Ghosia <br></br>
              React is {10 + 5} times better than JSX</h1>
            <h3>{text}</h3>
            <p>This is my first react app and
              I am happy to work on it</p>
          </div>
          <br></br>

          <State />
          <br></br> <br></br>



    </div >



    </>

  );
}

export default App;
