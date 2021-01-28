import React from "react";
import "./App.css";
import { Monday } from "./Components/Monday/Monday";
import { Navbar } from "./Components/NavBar/Navbar";
import { Route, Switch } from "react-router-dom";
import { Tuesday } from "./Components/Tuesday/Tuesday";
import { Wednesday } from "./Components/Wednesday/Wednesday";
import { Thursday } from "./Components/Thursday/Thursday";
import { Friday } from "./Components/Friday/Friday";
import { Test } from "./Components/Test/Tests";
import { Counter } from "./Components/Counter/Counter";

export const PATH = {
    COUNTER: "/counter",
    MONDAY: "/monday",
    TUESDAY: "/tuesday",
    WEDNESDAY: "/wednesday",
    THURSDAY: "/thursday",
    FRIDAY: "/friday",
    TESTS: "/tests",
}

function App() {
  return (
    <div>
      <Navbar />
        <Switch>
            <Route path={PATH.COUNTER} render={() => <Counter/>}/>
            <Route path={PATH.MONDAY} render={() => <Monday/>}/>
            <Route path={PATH.TUESDAY} render={() => <Tuesday/>}/>
            <Route path={PATH.WEDNESDAY} render={() => <Wednesday/>}/>
            <Route path={PATH.THURSDAY} render={() => <Thursday/>}/>
            <Route path={PATH.FRIDAY} render={() => <Friday/>}/>
            <Route path={PATH.TESTS} render={() => <Test/>}/>
        </Switch>
    </div>
  );
}

export default App;
