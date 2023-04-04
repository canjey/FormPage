import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import { List, ListItemButton, ListItemText } from "@mui/material";

export default function AddOnsForm() {
  return (
    <>
      <Box sx={{ marginLeft: "50px", padding: "10px" }}>
        <Grid>
          <div>
            <Typography variant="h5" sx={{ fontFamily: "inter" }}>
              Pick add-ons
            </Typography>
          </div>
          <div>
            <Typography variant="p" sx={{ fontFamily: "inter" }}>
              {" "}
              Add-ons helps enhance your gaming experience
            </Typography>
          </div>

          <Grid container spacing={3}>
            <Grid item size={3}>
              <List sx={{fontFamily:'inter'}}>
                <FormGroup>
                  <ListItemButton
                  fullwidth
                    sx={{ borderRadius: "0.5rem", marginBottom: "0.5rem" }}
                  >
                    <ListItemIcon sx={{ color: "gray" }}>
                      <FormControlLabel control={<Checkbox defaultChecked />} />
                      Online Service Access <br /> to multiplayer games $+1/mo
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton
                    sx={{ borderRadius: "0.5rem", marginBottom: "0.5rem" }}
                  >
                    <ListItemIcon sx={{ color: "gray" }}>
                      <FormControlLabel control={<Checkbox />} /> Larger Storage <br />
                      Extra 1TB of cloud save $+2/mo
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton
                    sx={{ borderRadius: "0.5rem", marginBottom: "0.5rem" }}
                  >
                    <ListItemIcon sx={{ color: "gray" }}>
                      <FormControlLabel control={<Checkbox />} /> Customizable
                      Profile Custom <br /> theme on your profile $+2/mo
                    </ListItemIcon>
                  </ListItemButton>
                </FormGroup>
              </List>
            </Grid>
          </Grid>

          <Button>Go Back</Button>
          <Button>Next Step</Button>
        </Grid>
      </Box>
    </>
  );
}
