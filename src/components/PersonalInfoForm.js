import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/users";
import { updateFormData } from "../store/users/slice";

export default function PersonalInfoForm({ setActiveTab }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateFormData({ name, email, phone }));
    setActiveTab(2);
  }; 

  return ( 
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ marginLeft: "50px", padding: "10px",minWidth: "600px" }}
    >
      <div>
        <Typography variant="h5" sx={{ fontFamily: "inter" }}>
          {" "}
          Personal Info
        </Typography>
      </div>
      <div>
        <Typography variant="p" sx={{ fontFamily: "inter" }}>
          {" "}
          Please provide your name, email address, and phone number.
        </Typography>
      </div>
      <div >
        <Typography variant="p" sx={{ fontFamily: "inter" }} gutterBottom>
          Name
        </Typography>
      </div>

      <TextField
        fullWidth
        required
        id="outlined-helperText"
        type="text"
        placeholder="e.g. Stephen King"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ marginTop: "10px", marginTop: "20px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <Typography variant="p" gutterBottom sx={{ fontFamily: "inter" }}>
          Email Address
        </Typography>
      </div>
      <div>
        <TextField
          required
          fullWidth
          id="outlined-helperText"
          type="email"
          placeholder="e.g. StephenKing@lorem.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginTop: "20px" }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Typography variant="p" gutterBottom sx={{ fontFamily: "inter" }}>
          Phone Number
        </Typography>
      </div>
      <div>
        <TextField
        fullWidth
          required
          id="outlined-helperText"
          type="number"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{ marginTop: "20px" }}
        />
      </div>
      <div style={{ marginLeft: "80%", marginTop:'40%' }}>
        <Button type="submit" variant="contained">
          Next Step
        </Button>
      </div>
    </Box>
  );
}
