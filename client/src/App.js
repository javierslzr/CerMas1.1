import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Example from "./pages/Example";
import ExampleForm from "./pages/ExampleForm";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Foot from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import UserIndex from "./components/UserIndex";
import AdminTools from "./components/AdminFunctions/adminTools";
import OnlineStore from "./pages/OnlineStore";
import "./App.css";

function App() {
  return (
    <div className="setup">
      <Router>
        <>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/example/:id" component={Example} />
            <Route exact path="/newexample" component={ExampleForm} />
            <Route path="/userIndex" component={UserIndex} />
            <Route path="/userIndex/tools" component={AdminTools} />
            <Route path="/store" component={OnlineStore} />
            <Route component={NoMatch} />
          </Switch>
          <Foot />
        </>
      </Router>
    </div>
  );
}

export default App;
