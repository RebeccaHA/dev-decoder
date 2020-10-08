import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { IconButton, Button } from "@material-ui/core";
import { favourite } from "../../redux/AcronymActions";
import { unfavourite } from "../../redux/AcronymActions";
import { connect } from "react-redux";

const Acronym = ({ acronym, favourite, unfavourite }) => {
  const handleFavourite = () => {
    if (acronym.favourite === false) {
      favourite(acronym);
    } else if (acronym.favourite === true) {
      unfavourite(acronym);
    }
  };

  return (
    <Card>
      <CardContent className="card">
        <div>
          <h3 className="card-title">{acronym.name}</h3>
          <p className="card-font">
            <strong>Definition:</strong> {acronym.definition}
          </p>
          <p className="card-font">
            <strong>Description:</strong> {acronym.description}
          </p>
          <IconButton className="favourite" onClick={handleFavourite}>
            {acronym.favourite === true ? (
              <StarIcon className="favourite-select" />
            ) : (
              <StarBorderIcon className="favourite" />
            )}
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default connect(null, { favourite, unfavourite })(Acronym);
