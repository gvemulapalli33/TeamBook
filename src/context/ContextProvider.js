import React, { useState } from 'react';

export const dataContext = React.createContext();

export function ContextProvider(props) {
    const initialData = JSON.parse(localStorage.getItem('info')) || [];
    const [data, setData] = useState(initialData);

    const setProvidedData = (input) => {
        localStorage.setItem("info", JSON.stringify(input));
        setData(input);
    }

    const addNewMember = (member) => {
        localStorage.setItem("info", JSON.stringify([...data, member]));
        const updatedData = JSON.parse(localStorage.getItem("info"));
        console.log(updatedData);
        setData(updatedData);
    }
    
    return (
        <dataContext.Provider value={{setProvidedData, data, addNewMember}}>
            {props.children}
        </dataContext.Provider>
    );
}