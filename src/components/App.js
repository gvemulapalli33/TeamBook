import React from 'react';
import Team from './Team';
import './App.css';

import {Link} from "react-router-dom";

function App() {
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
