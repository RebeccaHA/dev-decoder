import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchAcronyms } from "../redux/actions";
import AcronymList from "../components/acronym/AcronymList";

const AcronymContainer = ({ fetchAcronyms, acronyms }) => {
  console.log(acronyms);
  useEffect(() => {
    fetchAcronyms();
  }, [fetchAcronyms]);

  return (
    <div>
      <AcronymList acronyms={acronyms} />
    </div>
  );
};

const mapStateToProps = state => {
  return { acronyms: state.acronyms };
};

export default connect(mapStateToProps, { fetchAcronyms })(AcronymContainer);
