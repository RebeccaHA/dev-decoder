import React from "react";
import Acronym from "./Acronym";
import Grid from "@material-ui/core/Grid";

const AcronymList = props => {
  const acronymsObjects = props.acronyms.map(acronym => (
    <div key={acronym.id}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Acronym acronym={acronym} />
        </Grid>
      </Grid>
    </div>
  ));

  return acronymsObjects;
};
export default AcronymList;
