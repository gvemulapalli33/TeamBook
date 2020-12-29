import React, {useContext} from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {dataContext} from "../context/ContextProvider";

function Person({id, name, photo, quote, goals}) {
    const image = photo || "./leta.jpg";
    const {removeMember} = useContext(dataContext);

    const handleClick = (event) => {
       const {id} = event.target.closest('.person');
       console.log(id, event.target);
       removeMember(id);
    };

    return(
        <article className="person" id={id}>
            <img className="pic" src={image} alt={name} />
            <p className="name">{name}</p>
            <p className="quote">❝ {quote} ❞</p>
            <p className="goals">{goals}</p>
            <button className="delete" onClick={handleClick}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </article>
    );
}

export default Person;
