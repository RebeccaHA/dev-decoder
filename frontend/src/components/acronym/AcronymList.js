import React from "react";
import Acronym from "./Acronym";

const AcronymList = props => {
  const acronyms = props.acronyms.map(acronym => {
    <Acronym key={acronym.id} acronym={acronym} />;
  });

  return acronyms;
};

export default AcronymList;