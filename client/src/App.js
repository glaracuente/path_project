import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NextTrain from "./pages/NextTrain";
import Schedule from "./pages/Schedule";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={NextTrain} />
          <Route exact path="/schedule" component={Schedule} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;