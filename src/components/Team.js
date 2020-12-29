import React, {useContext} from 'react';
import Person from './Person';
import './Team.css';
import {dataContext} from "../context/ContextProvider";

function Team() {
    const {data} = useContext(dataContext);
    const PersonList = data.map((input) => <Person key={input.id} {...input} />)
    return  (
        <main className="team">
            {PersonList}
       </main>
    );
}
export default Team;
