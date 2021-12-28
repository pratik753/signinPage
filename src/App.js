import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParcelInfo from "./components/parcel/ParcelInfo";
import ParcelData from "./components/parcel/ParcelData";

function App() {
  return (
    <BrowserRouter>
      <br />
      <NavBar />
      <Routes>
        {/* <Route path="/"><SignIn /></Route> */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/parcel" element={<ParcelInfo />} />
        <Route path="/parcelData" element={<ParcelData />} />
        {/* <SignUp /> */}
        {/* </Route> */}
      </Routes>
      <br />
    </BrowserRouter>
  );
}

export default App;
