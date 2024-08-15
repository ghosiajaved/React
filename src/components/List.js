import React from 'react'

export default function List() {

    const simplenames = ["Ayesha", "Alina", "Ayla"];
    const name = ["Ali", "Ahmed", "Raza"];
    const nameList = ["Adnan", "Danish", "Bilal"];
    const members = nameList.map(names => <p>{names}</p>);

    //list containing checked and unchecked papers 
    const isChecked = [true, false, true, true, false, true, false, false, true, true];
    const filteredPapers = isChecked.filter(paper => paper.valueOf(true));

    //reduce
    const skills = [{ name: "MERN" },
    { name: "MEAN" },
    { name: "ML" }
    ];

    //foreach
    //console.log(skills);
    skills.forEach(skill => {
        console.log(skill.name);
    })

    //reduce

    const products = [
        { name: 'Pringles', price: 600 },
        { name: 'Spicy Potato chips', price: 300 },
        { name: 'Hersheys bar', price: 150 },
    ];
    const totalAmount = products.reduce((accumulator, product) => accumulator + product.price, 0);

    //keys
    const fruits = [
        { id: 1, name: "Apple", price: 250 },
        { id: 2, name: "Mango", price: 350 },
        { id: 3, name: "Peach", price: 150 }
    ]
    const fruitsList = fruits.map(fruit => <p>{fruit.id}. {fruit.name}</p>)

    const person = [
        { id: 1, name: "Rehan", age: 25, skill: "MERN" },
        { id: 2, name: "Rohan", age: 27, skill: "MEAN" },
        { id: 3, name: "Roham", age: 21, skill: "MERN" }
    ]
    //keys are always unique
    const personList = person.map((person) => (
        <li key={person.id}>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Skill: {person.skill}</p>
        </li>
    ));


    return (
        <div>
            <h3>Using Simple Arrays </h3><br></br>
            <p>{simplenames[0]}</p>
            <p>{simplenames[1]}</p>
            <p>{simplenames[2]}</p>
            <br></br>

            <h3>Using Map Method </h3><br></br>
            <h5>Array 1</h5>
            {
                name.map(name => <p>{name}</p>)
            }
            <br></br>

            <h5>Array 2</h5>
            <div>{members}</div>
            <br></br>

            <h3>Using Filter Method </h3><br></br>
            <p>6 bullets displayed because six values are true i.e six papers are checked</p>
            {
                filteredPapers.map(paper => <li key={paper.id}>{paper.name}</li>)
            }
            <br></br>

            <h3>Using Foreach </h3><br></br>
            <p>Check the console for the list of skills</p>
            <br></br>

            <h3>Using Reduce Method </h3><br></br>
            <p>Total Price: Rs.{totalAmount}</p>
            <br></br>

            <h3>KEYS</h3><br></br>
            <h5>Example 1</h5><br></br>
            {fruitsList}
            <br></br>
            <h5>Example 2</h5><br></br>
            <ul>{personList}</ul>
            <br></br>






        </div>
    )
}
