import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import AcronymForm from "./components/acronym/AcronymForm";
import Home from "./components/Home";
import AcronymContainer from "./containers/AcronymContainer";
import FavouriteContainer from "./containers/FavouriteContainer";
import NavBar from "./components/navigation/NavBar";
import "fontsource-roboto";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";

const App = props => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={AcronymForm} />
        <Route exact path="/acronyms" component={AcronymContainer} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route
          exact
          path="/favourites"
          render={props => {
            if (props.loggedIn) {
              return <FavouriteContainer {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.users.loggedIn
  };
};

export default connect(mapStateToProps)(App);
