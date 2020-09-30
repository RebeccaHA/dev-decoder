import React from "react";

const Acronym = ({ acronym }) => {
  return (
    <div>
      <h3>{acronym.name}</h3>
      <p>{acronym.description}</p>
      <p>{acronym.definition}</p>
    </div>
  );
};

export default Acronym;
