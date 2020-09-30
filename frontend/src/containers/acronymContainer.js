import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchAcronyms } from "../redux/AcronymActions";
import AcronymList from "../components/acronym/AcronymList";
import SearchInput from "../components/search/SearchInput";

const AcronymContainer = ({
  fetchAcronyms,
  acronyms,
  searchAcronyms,
  query,
  loading
}) => {
  useEffect(() => {
    fetchAcronyms();
  }, [fetchAcronyms]);

  const isQuery = query => {
    return query !== "" ? searchAcronyms : acronyms;
  };

  return (
    <div>
      <SearchInput />
      <AcronymList acronyms={isQuery()} />
    </div>
  );
};

const mapStateToProps = state => ({
  acronyms: state.acronyms,
  searchAcronyms: state.searchAcronyms,
  query: state.query
});

export default connect(mapStateToProps, { fetchAcronyms })(AcronymContainer);
