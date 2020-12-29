import React from 'react';
import './Person.css';

function Person({id, name, photo, quote, goals}) {
    const image = photo || "./leta.jpg";
    return(
        <article className="person" id={id}>
            <img className="pic" src={image} alt={name} />
            <p className="name">{name}</p>
            <p className="quote">{quote}</p>
            <p className="superlative">{goals}</p>
        </article>
    );
}

export default Person;
