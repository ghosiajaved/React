import React, { useState } from 'react'

export default function Form() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = (event) => {
        const selected = Object.keys(selectedSkills)
            .filter(skill => selectedSkills[skill])
            .join(', ');
        alert(`Name: ${name}  ,  Address: ${address}  ,  Gender: ${gender}  ,  Selected Skills: ${selected || 'None'}`);
    };

    // checkbox
    const [selectedSkills, setSelectedSkills] = useState({
        javascript: false,
        react: false,
        python: false,
        css: false,
    });

    const handleChange3 = (event) => {
        const { name, checked } = event.target;
        setSelectedSkills({
            ...selectedSkills,
            [name]: checked,
        });
    };

    //radio button
    const [gender, setGender] = useState('');

    const handleChange2 = (event) => {
        setGender(event.target.value);
    };


    return (
        <div>

            <h3>Simple Form</h3>
            <br></br><br></br>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={handleChange} />
                <br></br><br></br>

                <label>Address:</label>
                <input type="text" value={address} onChange={handleChangeAddress} />

                <br></br><br></br>

                <label>Skills: </label><br/><br/>

                <label> JavaScript </label>
                <input
                    type="checkbox" name="javascript" checked={selectedSkills.javascript} onChange={handleChange3}
                />

                <label> React </label>
                <input
                    type="checkbox" name="react" checked={selectedSkills.react} onChange={handleChange3}
                />
               
                <label> Python </label>
                <input
                    type="checkbox" name="python" checked={selectedSkills.python} onChange={handleChange3}
                />
                
                <label> CSS </label>
                <input
                    type="checkbox" name="css" checked={selectedSkills.css} onChange={handleChange3}
                />

                <br/><br></br>

                <label>Gender: </label>
                <br/><br></br>
                <label>Male</label>
                <input
                    type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleChange2}
                />

                <label> Female </label>
                <input
                    type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleChange2}
                />

                <label>Other</label>
                <input
                    type="radio" name="gender" value="other" checked={gender === 'other'} onChange={handleChange2}
                />

                <br></br><br></br>
                <br></br><br></br>
                <button type="submit" class="btn btn-dark">Submit</button>

            </form>

        </div>
    )
}
