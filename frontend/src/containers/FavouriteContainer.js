import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchFavouriteAcronyms } from "../redux/AcronymActions";
import AcronymList from "../components/acronym/AcronymList";
import { Grid } from "@material-ui/core";

const FavouriteContainer = ({ fetchFavouriteAcronyms, favourite_acronyms }) => {
  useEffect(() => {
    fetchFavouriteAcronyms();
  }, [fetchFavouriteAcronyms]);

  return (
    <div>
      <AcronymList acronyms={favourite_acronyms} />
    </div>
  );
};

const mapStateToProps = state => ({
  favourite_acronyms: state.acronyms.acronyms
});

export default connect(mapStateToProps, { fetchFavouriteAcronyms })(
  FavouriteContainer
);
