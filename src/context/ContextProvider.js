import React, { useState, useEffect } from 'react';
import people from '../data/yearbook-data.js';

export const dataContext = React.createContext();

export function ContextProvider(props) {
    const developerData = people.developers;
    const initialData = JSON.parse(localStorage.getItem('info')) || [];
    const [data, setData] = useState(initialData);

    useEffect(() => {
        localStorage.setItem("info", JSON.stringify(developerData));
        const input = JSON.parse(localStorage.getItem('info')) || [];
        setData(input);
    }, []);

    const addNewMember = (member) => {
        localStorage.setItem("info", JSON.stringify([...data, member]));
        const updatedData = JSON.parse(localStorage.getItem("info"));
        setData(updatedData);
    }

    const removeMember = (id) => {
        const updatedData = data.filter(({id : memberId}) => {
            return memberId !== +id;
        });
        localStorage.setItem("info", JSON.stringify(updatedData));
        const newData = JSON.parse(localStorage.getItem("info"));
        setData(newData);
    }
    
    return (
        <dataContext.Provider value={{data, addNewMember, removeMember}}>
            {props.children}
        </dataContext.Provider>
    );
}