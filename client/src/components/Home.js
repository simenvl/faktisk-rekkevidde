import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
