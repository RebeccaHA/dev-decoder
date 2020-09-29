import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchAcronyms } from "../redux/actions";

const acronymContainer = props => {
  return (
    <div>
      <AcronymList />
      <Acronym />
    </div>
  );
};

useEffect(() => {
  props.fetchAcronyms();
});

export default connect(null, { fetchAcronyms })(acronymContainer);
