import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
  /*const hitBackend = () => {
    const div = document.getElementById('response');
    fetch('/test')
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      } else {
        return response.json()
      }
    })
    .then((data) => {
      div.innerHTML = data['navn']
    })
    }*/
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
