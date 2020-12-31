import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {ContextProvider} from "./context/ContextProvider";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddTeamMember from "./components/AddTeamMember";

ReactDOM.render(<Router basename={window.location.pathname || ''}><ContextProvider>
<Switch>
    <Route exact path="/">
        <App />
    </Route>
    <Route path="/add">
        <AddTeamMember />
    </Route>
</Switch></ContextProvider></Router>, document.getElementById('root'));
