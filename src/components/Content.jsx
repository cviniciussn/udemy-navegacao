import React from "react";
import "./layout/Content.css";
import { Switch, Route } from "react-router-dom";
import About from "../views/examples/About";
import Home from "../views/examples/Home";

const Content = (props) => {
  return (
    <div className="content">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
