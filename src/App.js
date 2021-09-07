import "./App.css";
import Home from "./Components/Home/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chart from "./Components/Chart/Chart";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/chart">
            <Chart />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
