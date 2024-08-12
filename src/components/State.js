import React, { useEffect, useState } from 'react'

export default function State() {
    // count is the current state and set count allows you to change this current state
    const [count, setcount] = useState(() => {
        return 6;
    })
    function decrement() {
        // setcount=>{count+1}  incorrect way
        setcount(prevcount => prevcount - 1)
    }
    function increment() {
        setcount(prevcount => prevcount + 1)
    }

    const [text, setText] = useState("");

    const upppercase = () => {
        setText(text.toUpperCase());
    }

    const [car, setCar] = useState({
        brand: "Audi",
        year: "2024",
        color: "black"
    });
    // triple dots used to keep other values same/consistent
    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    }

    useEffect(()=>{
        console.log("Component Updated...");

        return ()=>{
            console.log("Component Removed");
        }
    },[count])

    return (
        <div>
            <center><h3>UseState</h3>
                <br></br>
                <h4>INCREMENT / DECREMENT WITH USESATE</h4>
                <button onClick={increment}> + </button> &nbsp;
                <span>{count}</span> &nbsp;
                <button onClick={decrement}> - </button>
                <br></br>
                <br></br>
                <input type='text' onChange={(e) => setText(e.target.value)}></input>
                <button onClick={upppercase}>Convert</button>
                <br></br><br></br>
                <p>{text}</p>
                <br></br>
                <h1>{car.brand}</h1>
                <p> It is a {car.color} car from {car.year}</p>
                <button type="button" onClick={updateColor}>Update Color</button>
            </center>
        </div>
    )
}
