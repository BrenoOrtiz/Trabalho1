import React, { useState } from 'react';
import '../App.css'

const Form = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        cpf: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.userid !== -1) {
            fetch(`http://localhost:8800/${props.userid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
         }
        else {
            fetch('http://localhost:8800/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
        }
        
        
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="age">Idade:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;