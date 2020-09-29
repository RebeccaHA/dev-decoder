import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchAcronyms } from "../redux/actions";
import AcronymList from "../components/acronym/AcronymList";

const acronymContainer = props => {
  return (
    <div>
      <AcronymList />
    </div>
  );
};

useEffect(() => {
  props.fetchAcronyms();
});

export default connect(null, { fetchAcronyms })(acronymContainer);
