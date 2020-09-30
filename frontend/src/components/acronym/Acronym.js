import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { IconButton } from "@material-ui/core";
import { useState } from "react";

const Acronym = ({ acronym }) => {
  const [clicked, setClicked] = useState();

  const handleFavourite = () => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <Card>
      <CardContent>
        <div>
          <h3>{acronym.name}</h3>
          <p>Definition: {acronym.definition}</p>
          <p>Description: {acronym.description}</p>
        </div>
        <IconButton onClick={handleFavourite}>
          {clicked ? (
            <StarIcon className="favourite-select" />
          ) : (
            <StarBorderIcon className="favourite" />
          )}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Acronym;
