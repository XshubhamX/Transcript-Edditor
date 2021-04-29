import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Saved from "./components/pages/saved";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/saved" component={Saved} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
  return <>{routes}</>;
};

export default App;
