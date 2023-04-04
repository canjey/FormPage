import * as React from "react";
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {List, ListItemButton, ListItemText} from "@mui/material";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import ListItemIcon from '@mui/material/ListItemIcon';
import ReceiptIcon from '@mui/icons-material/Receipt';




export default function Summary() {
    return (
        <>
            <Box
                component="form"
                autoComplete="off"
                validate
                sx={{ padding: '10%', marginTop: '-150px',  }}
            >
                <Box >
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div style={{marginTop:'20px'}}>
                            <Typography variant="h5"> Finishing Up</Typography>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <Typography variant="p"> Double Check Everything looks okay before confirming</Typography>
                        </div>
                        <List
            sx={{marginX: '0.5rem', backgroundColor:'#F0f0F0'}}
            component="nav"
            aria-labelledby="site-menu"
          >
           
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
              </ListItemIcon>
              <ListItemText sx={{color:'black'}} primary="Arcade Monthly"/>
              <ListItemText sx={{color:'gray'}} primary="$9/mo"/>

            </ListItemButton>
            
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
              </ListItemIcon>
              <ListItemText sx={{color:'gray'}} primary="Online Service"/>
              <ListItemText sx={{color:'gray'}} primary="$9/mo"/>
            </ListItemButton>
            
            
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
              </ListItemIcon>
              <ListItemText sx={{color:'gray'}} primary="Larger Storage"/>
              <ListItemText  sx={{color:'gray'}} primary="$9/mo"/>
              
            </ListItemButton>
           
          </List>
          <List>
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
              </ListItemIcon>
              <ListItemText sx={{color:'gray'}} primary="Total (per month)"/>
              <ListItemText  sx={{color:'gray'}} primary="$12/mo"/>
              
            </ListItemButton>
         </List>
                       


                    </CardContent>
                </Card>
                </Box>
                <Grid container sx={{marginTop:'30px'}}>
                    <Grid item xs={10}>
                    <Button variant="text">Go Back</Button>

                    </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained">Confirm</Button>


                    </Grid>
                </Grid>
            </Box>

        </>
    )
}