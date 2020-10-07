import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchFavouriteAcronyms } from "../redux/AcronymActions";
import AcronymList from "../components/acronym/AcronymList";
import SearchInput from "../components/search/SearchInput";
import { Grid } from "@material-ui/core";

const FavouriteContainer = ({ fetchFavouriteAcronyms, favourite_acronyms }) => {
  useEffect(() => {
    fetchFavouriteAcronyms();
  }, [fetchFavouriteAcronyms]);

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
      <AcronymList acronyms={favourite_acronyms} />
    </div>
  );
};

const mapStateToProps = state => ({
  favourite_acronyms: state.acronyms.favourite_acronyms
});

export default connect(mapStateToProps, { fetchFavouriteAcronyms })(
  FavouriteContainer
);
