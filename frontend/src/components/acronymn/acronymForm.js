import React, { useState } from "react";

const AcronymForm = () => {
  const [acronymName, setAcronymName] = useState("");
  const [definition, setDefinition] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeAcronymn = e => {
    setAcronymName(e.target.value);
  };
  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };
  const handleChangeDefinition = e => {
    setDefinition(e.target.value);
  };

  return (
    <div>
      <input
        type="acronymName"
        value={acronymName}
        onChange={handleChangeAcronymn}
      />
      <br />
      <input
        type="definition"
        value={definition}
        onChange={handleChangeDefinition}
      />
      <br />
      <textarea
        type="description"
        value={description}
        onChange={handleChangeDescription}
      />
      <br />
      <input type="submit" />
      <h1>{acronymName}</h1>
      <h1>{definition}</h1>
      <h1>{description}</h1>
    </div>
  );
};

export default AcronymForm;
