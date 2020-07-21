import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sum from "./components/pages/Sum";
import Input from "./components/pages/Input";
import MyHoc from "./components/MyHoc";
import ToDo from "./components/pages/ToDo";
import "../src/App.css"
import New from "./components/pages/New";
import MyState from "./components/MyState";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/sum/2/5">Sum</Link>
            </li>
            <li>
              <Link to="/input">input</Link>
            </li>
            <li>
              <Link to="/to-do">to do</Link>
            </li>
            <li>
              <Link to="/use-state">Use State</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/sum/:a/:b?">
            <Sum />
          </Route>
          <Route path="/input">
            <Input />
          </Route>
          <Route path="/to-do">
            <ToDo />
          </Route>
          <Route path="/use-state">
            <MyState />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
