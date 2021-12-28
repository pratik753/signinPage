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
import useStyles from "./parcelcss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { parcelAction } from "../../store/parcel";
import { useSelector } from "react-redux";
import ParcelData from "./ParcelData";
const ParcelInfo = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setvalue] = useState({
    parcel_info: "",
    parcel_cost: "",
    parcel_starting_location: "",
    parcel_ending_location: "",
    sender_name: "",
    sender_address: "",
    sender_phone: "",
    receiver_name: "",
    receiver_address: "",
    receiver_phone: "",
  });

  const parcel_infoHandler = (event) => {
    setvalue({ ...value, parcel_info: event.target.value });
  };
  const parcel_costHandler = (event) => {
    setvalue({ ...value, parcel_cost: event.target.value });
  };
  const parcel_starting_locationHandler = (event) => {
    setvalue({ ...value, parcel_starting_location: event.target.value });
  };
  const parcel_ending_locationHandler = (event) => {
    setvalue({ ...value, parcel_ending_location: event.target.value });
  };
  const sender_nameHandler = (event) => {
    setvalue({ ...value, sender_name: event.target.value });
  };
  const sender_addressHandler = (event) => {
    setvalue({ ...value, sender_address: event.target.value });
  };
  const sender_phoneHandler = (event) => {
    setvalue({ ...value, sender_phone: event.target.value });
  };
  const receiver_nameHandler = (event) => {
    setvalue({ ...value, receiver_name: event.target.value });
  };
  const receiver_addressHandler = (event) => {
    setvalue({ ...value, receiver_address: event.target.value });
  };
  const receiver_phoneHandler = (event) => {
    setvalue({ ...value, receiver_phone: event.target.value });
  };

  const parcelData = useSelector((state) => state.parcel.parcelDataa);
  const SubmitHandler = () => {
    dispatch(parcelAction.add({ ...value }));
    console.log(value);
    console.log(parcelData);
  };
  return (
    <div>
      <AppBar
        className={classes.signDiv}
        style={{ width: "80%" }}
        position="static"
        color="inherit"
      >
        <center>
          <label>
            <h2>Parcel Info</h2>
            <hr />
            <br />
          </label>
          <Grid container columnSpacing={1} rowSpacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Parcel_Info"
                type="text"
                className={classes.fillbox}
                onChange={parcel_infoHandler}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Parcel_cost"
                type="text"
                className={classes.fillbox}
                onChange={parcel_costHandler}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="parcel_starting_location"
                type="text"
                className={classes.fillbox}
                onChange={parcel_starting_locationHandler}
                name="psw"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="parcel_ending_location"
                type="text"
                className={classes.fillbox}
                onChange={parcel_ending_locationHandler}
                name="psw"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="sender_name"
                type="text"
                className={classes.fillbox}
                onChange={sender_nameHandler}
                name="psw"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="sender_phone"
                type="number"
                className={classes.fillbox}
                onChange={sender_phoneHandler}
                name="psw"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="sender_address"
                type="text"
                className={classes.fillbox}
                onChange={sender_addressHandler}
                name="psw"
                required
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="receiver_name"
                type="text"
                className={classes.fillbox}
                onChange={receiver_nameHandler}
                name="psw"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="receiver_phone"
                type="number"
                className={classes.fillbox}
                onChange={receiver_phoneHandler}
                name="psw"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="receiver_address"
                type="text"
                className={classes.fillbox}
                onChange={receiver_addressHandler}
                name="psw"
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={SubmitHandler}
                className={classes.sub}
                type="submit"
              >
                Add Parcel
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

export default ParcelInfo;
