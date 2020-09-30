import React, { useState } from "react";
import { connect } from "react-redux";
import { addAcronym } from "../../redux/actions";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { spacing } from "@material-ui/system";

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
    console.log(state);
    setState({ name: "", definition: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputLabel>Acronym Name:</InputLabel>
      <Input
        type="text"
        value={state.name}
        onChange={handleSetFormData}
        name="name"
      />
      <br />
      <InputLabel>Acronym Definition:</InputLabel>
      <Input
        type="text"
        value={state.definition}
        onChange={handleSetFormData}
        name="definition"
      />
      <br />
      <InputLabel>Acronym Description</InputLabel>
      <TextareaAutosize
        type="text"
        value={state.description}
        onChange={handleSetFormData}
        name="description"
      />
      <br />
      <Button type="submit">Contribute</Button>
      <h1>{state.name}</h1>
      <h1>{state.definition}</h1>
      <h1>{state.description}</h1>
    </form>
  );
};

export default connect(null, { addAcronym })(AcronymForm);
