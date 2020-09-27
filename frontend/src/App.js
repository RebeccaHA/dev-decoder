import React from "react";
import { BrowswerRouter as Router, Switch, Route } from "react-dom";
import "./App.css";
// import acronymForm from "./components/acronymn/acronymForm";
import home from "./components/home";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={home} />
        {/* <Route exact path="/new" component={acronymForm} /> */}
        {/* <Route exact path="/acronyms" component={acronymContainer} /> */}
      </div>
    </Router>
  );
}

export default App;
