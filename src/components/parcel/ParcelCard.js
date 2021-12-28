import React from "react";
import useStyles from "./parcelcss";
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
const ParcelCard = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        className={classes.parcelDiv}
        style={{ width: "95%" }}
        position="static"
        color="inherit"
      >
        <h5 className={classes.h5Head}>Parcel_Info : {props.parcel_info}</h5>
        <h5 className={classes.h5Head}>Parcel_cost : {props.parcel_cost}</h5>
        <h5 className={classes.h5Head}>
          Parcel_starting_location : {props.parcel_starting_location}
        </h5>
        <h5 className={classes.h5Head}>
          Parcel_ending_location : {props.parcel_ending_location}
        </h5>
        <h5 className={classes.h5Head}>Sender_name : {props.sender_name}</h5>
        <h5 className={classes.h5Head}>
          Sender_address : {props.sender_address}
        </h5>
        <h5 className={classes.h5Head}>Sender_phone : {props.sender_phone}</h5>
        <h5 className={classes.h5Head}>
          Receiver_name : {props.receiver_name}
        </h5>
        <h5 className={classes.h5Head}>
          Receiver_address : {props.receiver_address}
        </h5>
        <h5 className={classes.h5Head}>
          Receiver_phone : {props.receiver_phone}
        </h5>
      </AppBar>
    </div>
  );
};

export default ParcelCard;
