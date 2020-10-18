import React, { useState } from "react";
import { connect } from "react-redux";
import { addAcronym } from "../../redux/AcronymActions";
import { removeError } from "../../redux/AcronymActions";
import Input from "@material-ui/core/Input";
import { Alert } from "@material-ui/lab";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { spacing } from "@material-ui/system";
import Grid from "@material-ui/core/Grid";

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
    console.log("a");
    props.addAcronym(state);
    console.log("b");
    setState({ name: "", definition: "", description: "" });
  };

  const [hidden, setHidden] = useState(false);

  const handleClose = e => {
    e.preventDefault();
    setHidden(true);
    props.removeError();
    setHidden(false);
  };

  return (
    <div>
      {props.errorMessage ? (
        <Alert onClose={handleClose}>{props.errorMessage}</Alert>
      ) : null}

      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-label">Acronym Name:</label>
          <br />
          <Input
            type="text"
            value={state.name}
            onChange={handleSetFormData}
            name="name"
            className="form-input"
            required
          />
          <br />
          <label className="form-label">Acronym Definition:</label>
          <br />
          <Input
            type="text"
            value={state.definition}
            onChange={handleSetFormData}
            name="definition"
            className="form-input"
          />
          <br />
          <label className="form-label">Acronym Description</label>
          <br />
          <TextareaAutosize
            type="text"
            value={state.description}
            onChange={handleSetFormData}
            name="description"
            className="form-input"
          />
          <br />
          <Button type="submit">Contribute</Button>
        </form>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  errorMessage: state.acronyms.errorMessage
});

export default connect(mapStateToProps, { addAcronym, removeError })(
  AcronymForm
);
