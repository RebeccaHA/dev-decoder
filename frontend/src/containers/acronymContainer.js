import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchAcronyms } from "../redux/AcronymActions";
import AcronymList from "../components/acronym/AcronymList";
import SearchInput from "../components/search/SearchInput";

const AcronymContainer = ({ fetchAcronyms, acronyms }) => {
  useEffect(() => {
    fetchAcronyms();
  }, [fetchAcronyms]);

  return (
    <div>
      <SearchInput />
      <AcronymList acronyms={acronyms} />
    </div>
  );
};

const mapStateToProps = state => {
  return { acronyms: state.acronyms };
};

export default connect(mapStateToProps, { fetchAcronyms })(AcronymContainer);
