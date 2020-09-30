import React, { useState } from "react";
import { connect } from "react-redux";
import { addAcronym } from "../../redux/actions";

const AcronymForm = props => {
  const [state, setState] = useState({
    name: "",
    definition: "",
    description: ""
  });

  const handleSetFormData = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addAcronym(state);
    setState({ name: "", definition: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={state.name}
        onChange={handleSetFormData}
        name="acronymName"
      />
      <br />
      <input
        type="text"
        value={state.definition}
        onChange={handleSetFormData}
        name="definition"
      />
      <br />
      <textarea
        type="text"
        value={state.description}
        onChange={handleSetFormData}
        name="description"
      />
      <br />
      <input type="submit" />
      <h1>{state.name}</h1>
      <h1>{state.definition}</h1>
      <h1>{state.description}</h1>
    </form>
  );
};

export default connect(null, { addAcronym })(AcronymForm);
