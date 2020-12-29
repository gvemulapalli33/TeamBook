import React, {useState, useContext} from 'react';
import './AddTeamMember.css';
import {dataContext} from "../context/ContextProvider";
import {Link} from "react-router-dom";

export default function AddTeamMember() {
    const {addNewMember} = useContext(dataContext);
    const [name, setName] = useState('');
    const [quote, setQuote] = useState('');
    const [goals, setGoals] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const newMember = {
            id: name,
            name,
            quote,
            goals
        }
        addNewMember(newMember);
        clearForm();
    }

    const clearForm = () => {
         setName('');
         setQuote('');
         setGoals('');
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'quote') {
            setQuote(value);
        } else {
            setGoals(value);
        }
    }

    return (
      <>
        <h3>Add New Member</h3>
        <Link to="/"><p className="back">Back to All Members</p></Link>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
                <input type="text" id="name" name="name" value={name} required onChange={handleChange}></input>
            </label>
            <label htmlFor="quote">
                Quote:
                <input type="text" id="quote" name="quote" value={quote} required onChange={handleChange}></input>
            </label>
            <label htmlFor="goals">
                Goals:
                <input type="text" id="goals" name="goals" value={goals} required onChange={handleChange}></input>
            </label>
            <button className="btn">Add Member</button>
        </form>
      </>
    );

}