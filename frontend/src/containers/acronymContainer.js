import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

function fetchAcronyms() {
  return dispatch => {
    dispatch({ type: "LOADING_ACRONYMS" });
    fetch("");
  };
}

class AcronymContainer extends Component {
  render() {
    return <div></div>;
  }
}

export default connect(mapStateToProps)(acronymContainer);
