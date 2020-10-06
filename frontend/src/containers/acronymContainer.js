import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchAcronyms } from "../redux/AcronymActions";
import AcronymList from "../components/acronym/AcronymList";
import SearchInput from "../components/search/SearchInput";
import { Grid } from "@material-ui/core";

const AcronymContainer = ({
  fetchAcronyms,
  acronyms,
  searchAcronyms,
  query
}) => {
  useEffect(() => {
    fetchAcronyms();
  }, [fetchAcronyms]);

  const isQuery = () => {
    return query === "" ? acronyms : searchAcronyms;
  };

  return (
    <div>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <SearchInput />
      </Grid>
      <AcronymList acronyms={isQuery()} />
    </div>
  );
};

const mapStateToProps = state => ({
  acronyms: state.acronyms.acronyms,
  searchAcronyms: state.acronyms.searchAcronyms,
  query: state.acronyms.query
});

export default connect(mapStateToProps, { fetchAcronyms })(AcronymContainer);
