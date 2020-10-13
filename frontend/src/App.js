import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AcronymForm from "./components/acronym/AcronymForm";
import Home from "./components/Home";
import AcronymContainer from "./containers/AcronymContainer";
import FavouriteContainer from "./containers/FavouriteContainer";
import NavBar from "./components/navigation/NavBar";
import "fontsource-roboto";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={AcronymForm} />
        <Route exact path="/acronyms" component={AcronymContainer} />
        {/* <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} /> */}
        <Route exact path="/favourites" component={FavouriteContainer} />
      </div>
    </Router>
  );
};

export default App;
