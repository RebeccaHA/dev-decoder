import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AcronymForm from "./components/acronym/AcronymForm";
import Home from "./components/Home";
import AcronymContainer from "./containers/AcronymContainer";

const App = () => {
  return (
    <Router>
      <div>
        <h1>test</h1>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={AcronymForm} />
        <Route exact path="/acronyms" component={AcronymContainer} />
      </div>
    </Router>
  );
};

export default App;
