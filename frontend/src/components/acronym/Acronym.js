import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Acronym = ({ acronym }) => {
  return (
    <Card>
      <CardContent>
        <div>
          <h3>{acronym.name}</h3>
          <p>{acronym.description}</p>
          <p>{acronym.definition}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Acronym;
