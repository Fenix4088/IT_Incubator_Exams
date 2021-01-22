import React from "react";
import "./App.css";
import { Monday } from "./Components/Monday/Monday";
import { Navbar } from "./Components/NavBar/Navbar";
import { Route } from "react-router-dom";
import { Tuesday } from "./Components/Tuesday/Tuesday";
import { Wednesday } from "./Components/Wednesday/Wednesday";
import { Thursday } from "./Components/Thursday/Thursday";
import { Friday } from "./Components/Friday/Friday";
import { Test } from "./Components/Test/Tests";
import { Counter } from "./Components/Counter/Counter";

function App() {
  return (
    <div>
      <Navbar />
        <Route path={"/counter"} render={() => <Counter />} />
      <Route path={"/monday"} render={() => <Monday />} />
      <Route path={"/tuesday"} render={() => <Tuesday />} />
      <Route path={"/wednesday"} render={() => <Wednesday />} />
      <Route path={"/thursday"} render={() => <Thursday />} />
      <Route path={"/friday"} render={() => <Friday />} />
      <Route path={"/tests"} render={() => <Test />} />
    </div>
  );
}

export default App;
