import React from 'react';
import './App.css';
import {Monday} from "./Components/Monday/Monday";
import {Navbar} from "./Components/NavBar/Navbar";
import { Route } from 'react-router-dom';
import {Tuesday} from "./Components/Tuesday/Tuesday";
import {Wednesday} from "./Components/Wednesday/Wednesday";

function App() {
  return (
    <div>
      <Navbar/>
      <Route path={"/monday"} render={() => <Monday/>}/>
      <Route path={"/tuesday"} render={() => <Tuesday/>}/>
      <Route path={"/wednesday"} render={() => <Wednesday/>}/>

    </div>
  );
}

export default App;
