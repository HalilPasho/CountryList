import React from "react";
import { Route, Link } from "react-router-dom";

import Countries from './views/Countries'
import CountryDetails from "./views/CountryDetails";

import "./App.css";

function App() {
  return (
    <div className="App App-header">
    
      <h1>Menu</h1>
      <ul>
        <li className="link">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="link">
          <Link className="link" to="/countries">
            Countries
          </Link>
        </li>
      </ul>
     
      <Route exact path="/" />
      <Route exact path="/countries" component={Countries} />
      <Route path="/countries/:code" component={CountryDetails} />
    </div>
  );
}

export default App;
