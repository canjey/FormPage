import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";

function PlanCard({ image, planName, amount }) {
    const handleClicked =(e)=> {
        console.log("carol")
    }
  return (
    <>
    <Card onClick={handleClicked} sx={{ width: "100%", marginTop: "40px", cursor:'pointer' }}>
      <CardContent sx={{ display: "flex" }}>
        <img src={image} />
        <Typography>
          {planName}
          <br />
          {amount}
        </Typography>
      </CardContent>
      </Card>
    </>
  );
}

export default function PlanInfo() {
  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        validate
        sx={{ padding: "10%", marginTop: "-150px" }}
      >
        <Box>
          <Card sx={{ minWidth: 275, padding: "30px" }}>
            <CardContent>
              <Typography variant="h6">Select Your Plan</Typography>
              <Typography>
                You have the option of monthly and yearly billing
              </Typography>
              <PlanCard image={Arcade} planName="arcade" amount="$1/mo" />
              <PlanCard image={Advanced} planName="Advanced" amount="$2/mo" />
              <PlanCard image={Pro} planName="Pro" amount="$2/mo" />

            </CardContent>
          </Card>
          <Grid container sx={{ marginTop: "30px" }}>
            <Grid item xs={10}>
              <Button variant="text">Go Back</Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained">Next Step</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
