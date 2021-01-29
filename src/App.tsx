import React from "react";
import "./App.css";
import { Monday } from "./Components/Monday/Monday";
import { Navbar } from "./Components/NavBar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { Tuesday } from "./Components/Tuesday/Tuesday";
import { Wednesday } from "./Components/Wednesday/Wednesday";
import { Thursday } from "./Components/Thursday/Thursday";
import { Friday } from "./Components/Friday/Friday";
import { Counter } from "./Components/Counter/Counter";
import {Error404} from "./Components/Error404/Error404";
import {TodoListApp} from "./Components/TodoListContainer/TodoListApp";

type PathType = {
    [key: string] : string
}

export const PATH:PathType = {
    COUNTER: "/counter",
    MONDAY: "/monday",
    TUESDAY: "/tuesday",
    WEDNESDAY: "/wednesday",
    THURSDAY: "/thursday",
    FRIDAY: "/friday",
    TODOLIST: "/todolist",
}

function App() {
  return (
    <div>
      <Navbar />
        <Switch>
            <Route
                path={"/"}
                exact
                render={() => <Redirect to={PATH.COUNTER} />}
            />
            <Route path={PATH.COUNTER} render={() => <Counter/>}/>
            <Route path={PATH.MONDAY} render={() => <Monday/>}/>
            <Route path={PATH.TUESDAY} render={() => <Tuesday/>}/>
            <Route path={PATH.WEDNESDAY} render={() => <Wednesday/>}/>
            <Route path={PATH.THURSDAY} render={() => <Thursday/>}/>
            <Route path={PATH.FRIDAY} render={() => <Friday/>}/>
            <Route path={PATH.TODOLIST} render={() => <TodoListApp/>}/>
            <Route render={() => <Error404 />} />
        </Switch>
    </div>
  );
}

export default App;
