import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ParcelCard from "./ParcelCard";
import useStyles from "./parcelcss";

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
  let i = 0;
  const parcelMap = parcel.map((data) => (
    <ParcelCard
      key={i++}
      parcel_info={data.parcel_info}
      parcel_cost={data.parcel_cost}
      parcel_starting_location={data.parcel_starting_location}
      parcel_ending_location={data.parcel_ending_location}
      sender_name={data.sender_name}
      sender_address={data.sender_address}
      sender_phone={data.sender_phone}
      receiver_name={data.receiver_name}
      receiver_address={data.receiver_address}
      receiver_phone={data.receiver_phone}
    />
  ));
  return (
    <div className={classes.mapcard} style={{ width: "85%" }}>
      {parcelMap}
    </div>
  );
};

export default ParcelData;
