import React, { useState, useContext, useEffect } from 'react';
import Team from './Team';
import people from '../data/yearbook-data.js';
import './App.css';
import {dataContext} from "../context/ContextProvider";
import {Link} from "react-router-dom";

function App() {
  const {setProvidedData} = useContext(dataContext);
  const developerData = people.developers;
  const [developers, setDevelopers] = useState(developerData);

  useEffect(() => {
    setProvidedData(developers);
  }, []);

    return (
      <div className="App">
        <header className="App-header">
          <nav>
           <h1>Yearbook</h1>
           <Link className="addMember" to="/add">Add New Member</Link>
          </nav>
        </header>
        <main>
            <h3>Developers</h3>
            <Team />
        </main>
      </div>
    );
}

export default App;
