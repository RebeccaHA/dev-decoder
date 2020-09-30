import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Acronym = ({ acronym }) => {
  return (
    <Card>
      <CardContent>
        <div>
          <h3>Name: {acronym.name}</h3>
          <p>Definition: {acronym.definition}</p>
          <p>Description: {acronym.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Acronym;
