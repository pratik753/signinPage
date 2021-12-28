import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  Box,
  TextField,
  Grid,
} from "@mui/material";
import useStyles from "./signincss";

import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setvalue] = useState({
    email: "",
    password: "",
  });

  const emailHandler = (event) => {
    setvalue({ ...value, email: event.target.value });
  };
  const passwordHandler = (event) => {
    setvalue({ ...value, password: event.target.value });
  };

  const SubmitHandler = (event) => {
    setvalue({ ...value, email: event.target.value });
  };
  const switchonClick = () => {
    navigate("/signUp");
  };
  return (
    <div>
      <AppBar
        className={classes.signDiv}
        style={{ width: "50%" }}
        position="static"
        color="inherit"
      >
        <center>
          <label>
            <h2>Sign In</h2>
            <hr />
            <br />
          </label>
          <Grid container columnSpacing={1} rowSpacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                className={classes.fillbox}
                onClick={emailHandler}
                placeholder="Enter e-mail"
                name="uname"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                className={classes.fillbox}
                onClick={passwordHandler}
                placeholder="Enter Password"
                name="psw"
                required
              />
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchonClick}>
                  Don't have an account? Sign Up
                  {/* Already have an Account? Sign In */}
                  {/* "Don't have an account? Sign Up" */}
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={SubmitHandler}
                className={classes.sub}
                type="submit"
              >
                Sign In
              </Button>
            </Grid>
          </Grid>

          {/* <div class={classes.container}>
        <div>{/* <label for="uname"><b>Username</b></label> *</div>
        <div>{/* <label for="uname"><b>Username</b></label> *</div>
        <div>{/* <label for="uname"><b>Username</b></label> *</div>
        <div>{/* <label for="uname"><b>Username</b></label> }</div>
        <div>{/* <label for="psw"><b>Password</b></label> </div>
      </div> */}
        </center>
      </AppBar>
    </div>
  );
};

export default SignIn;
