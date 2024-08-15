
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import List from './components/List';


function App() {


  return (

    <>
      {/*  JSX makes it easier to write and add HTML in React.
       JSX converts HTML tags into react elements. */}

      <Navbar title="DREAMSCAPE" home="Home" features="Features" about="About" branches="DREAMSCAPE Branches" />

      <div className="container" style={{ width: '800px', height: '710px', paddingTop: '30px' }}>
        

          <h1>LISTS AND KEYS IN REACT</h1>
          <br></br>
          <List/>


        

      </div >



    </>

  );
}

export default App