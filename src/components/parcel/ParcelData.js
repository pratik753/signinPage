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
  Paper,
} from "@mui/material";
import { useSelector } from "react-redux";
import ParcelCard from "./ParcelCard";
import useStyles from "./parcelcss";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
const ParcelData = () => {
  const classes = useStyles();
  const [parcel, setparcel] = useState([]);
  const parcelData = useSelector((state) => state.parcel.parcelDataa);
  useEffect(() => {
    const mdata = [];
    for (const key in parcelData) {
      mdata.push({
        _id: key,
        parcel_info: parcelData[key].parcel_info,
        parcel_cost: parcelData[key].parcel_cost,
        parcel_starting_location: parcelData[key].parcel_starting_location,
        parcel_ending_location: parcelData[key].parcel_ending_location,
        sender_name: parcelData[key].sender_name,
        sender_address: parcelData[key].sender_address,
        sender_phone: parcelData[key].sender_phone,
        receiver_name: parcelData[key].receiver_name,
        receiver_address: parcelData[key].receiver_address,
        receiver_phone: parcelData[key].receiver_phone,
      });
    }
    console.log(mdata);
    setparcel(mdata);
  }, []);
  console.log(parcelData);
  let i = 1;
  // const parcelMap = parcel.map((data) => (
  //   <ParcelCard
  //     key={i++}
  //     parcel_info={data.parcel_info}
  //     parcel_cost={data.parcel_cost}
  //     parcel_starting_location={data.parcel_starting_location}
  //     parcel_ending_location={data.parcel_ending_location}
  //     sender_name={data.sender_name}
  //     sender_address={data.sender_address}
  //     sender_phone={data.sender_phone}
  //     receiver_name={data.receiver_name}
  //     receiver_address={data.receiver_address}
  //     receiver_phone={data.receiver_phone}
  //   />
  // ));
  const parcelMapTable = () => {
    return parcel.map((data) => (
      <tr key={i}>
        <td className={classes.tablehead}>{i++}</td>
        <td className={classes.tablehead}>{data.parcel_info}</td>
        <td className={classes.tablehead}>{data.parcel_cost}</td>
        <td className={classes.tablehead}>{data.parcel_starting_location}</td>
        <td className={classes.tablehead}>{data.parcel_ending_location}</td>
        <td className={classes.tablehead}>{data.sender_name}</td>
        <td className={classes.tablehead}>{data.sender_address}</td>
        <td className={classes.tablehead}>{data.sender_phone}</td>
        <td className={classes.tablehead}>{data.receiver_name}</td>
        <td className={classes.tablehead}>{data.receiver_address}</td>
        <td className={classes.tablehead}>{data.receiver_phone}</td>
      </tr>
    ));
  };
  return (
    <>
      <AppBar
        className={classes.appBar}
        style={{ width: "80%" }}
        position="static"
        color="inherit"
      >
        <div className={classes.brandContainer}>
          <Typography
            //  component={Link}
            to="/"
            className={classes.heading}
            variant="h4"
            align="center"
          >
            Data
          </Typography>
        </div>
      </AppBar>
      <center>
        <br />
        <div className={classes.mapcard} style={{ width: "85%" }}>
          <Grid container spacing={2} className={classes.tabecont}>
            <Paper>
              <TableContainer>
                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  responsive="xl"
                  className={classes.tablecss}
                >
                  <thead className={classes.tablehead} key={"header"}>
                    <th className={classes.tablehead}>S.No.</th>
                    <th className={classes.tablehead}>Info</th>
                    <th className={classes.tablehead}>cost</th>
                    <th className={classes.tablehead}>Starting_location</th>
                    <th className={classes.tablehead}>Ending_location</th>
                    <th className={classes.tablehead}>S_Name</th>
                    <th className={classes.tablehead}>S_Address</th>
                    <th className={classes.tablehead}>S_Phone</th>
                    <th className={classes.tablehead}>R_name</th>
                    <th className={classes.tablehead}>R_address</th>
                    <th className={classes.tablehead}>R_phone</th>
                    {/* <th></th> */}
                    {/* <th></th> */}

                    {/* <th>Remove</th> */}
                  </thead>

                  {/* {allStockItem.length !== 0 && stockDataTable} */}
                  {!parcel.length ? <h3>No Data</h3> : parcelMapTable()}
                  {/* {Object.map} */}
                  {/* {allStockItem.map((data) => (
                <tr>
                  <td>{data.partNo}</td>
                  <td>{data.partName}</td>
                  <td>{data.quantity}</td>
                  <td>{data.mPrice}</td>
                  <td>{data.cPrice}</td>
                </tr>
              ))} */}
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </div>
      </center>
    </>
  );
};

export default ParcelData;
