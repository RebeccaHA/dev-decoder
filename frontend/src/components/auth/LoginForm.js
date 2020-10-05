import React, { useState } from "react";
import { connect } from "react-redux";
import { LogIn } from "../../redux/AuthActions";
import { SignUp } from "../../redux/AuthActions";
import Input from "@material-ui/core/Input";
import { Alert } from "@material-ui/lab";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { spacing } from "@material-ui/system";
import Grid from "@material-ui/core/Grid";

const LoginForm = props => {
  const [state, setState] = useState({
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleSetFormData = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.LogIn(state);

    setState({ email: "", password: "", password_confirmation: "" });
  };

  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-label">Email:</label>
          <br />
          <Input
            type="text"
            value={state.email}
            onChange={handleSetFormData}
            name="email"
            className="form-input"
            required
          />
          <br />
          <label className="form-label">Password:</label>
          <br />
          <Input
            type="text"
            value={state.password}
            onChange={handleSetFormData}
            name="password"
            className="form-input"
          />
          <br />
          <label className="form-label">Password Confirmation</label>
          <br />
          <TextareaAutosize
            type="text"
            value={state.password_confirmation}
            onChange={handleSetFormData}
            name="password_confirmation"
            className="form-input"
          />
          <br />
          <Button type="submit">Login</Button>
        </form>
      </Grid>
    </div>
  );
};

export default connect(null, { LogIn, SignUp })(LoginForm);
