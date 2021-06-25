import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import History from "./pages/History";
import Nothing from "./pages/Nothing";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/saved" component={History} />
          <Route component={Nothing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
