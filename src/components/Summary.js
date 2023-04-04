import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {List, ListItemButton, ListItemText} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



export default function Summary(){
    return(
       <>
            <>
            <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", padding:'20px', height:'100vh', minWidth:'600px', }}>
                <Box >
                
                        <div style={{marginTop:'20px'}}>
                            <Typography variant="h5" sx={{ fontFamily:'inter'}}> Finishing Up</Typography>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <Typography variant="p" sx={{ fontFamily:'inter'}}> Double Check Everything looks okay before confirming</Typography>
                        </div>
                        <List
            sx={{marginX: '0.5rem', backgroundColor:'#F0f0F0'}}
            component="nav"
            aria-labelledby="site-menu"
          >
           
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
              </ListItemIcon>
              <ListItemText sx={{color:'black',  fontFamily:'inter'}} primary="Arcade Monthly"/>
              <ListItemText sx={{color:'gray',  fontFamily:'inter'}} primary="$9/mo"/>

            </ListItemButton>
            
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
              </ListItemIcon>
              <ListItemText sx={{color:'gray',  fontFamily:'inter'}} primary="Online Service"/>
              <ListItemText sx={{color:'gray',  fontFamily:'inter'}} primary="$9/mo"/>
            </ListItemButton>
            
            
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
              </ListItemIcon>
              <ListItemText sx={{color:'gray',  fontFamily:'inter'}} primary="Larger Storage"/>
              <ListItemText  sx={{color:'gray',  fontFamily:'inter'}} primary="$9/mo"/>
              
            </ListItemButton>
           
          </List>
          <List>
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
              </ListItemIcon>
              <ListItemText sx={{color:'gray',  fontFamily:'inter'}} primary="Total (per month)"/>
              <ListItemText  sx={{color:'gray',  fontFamily:'inter'}} primary="$12/mo"/>
              
            </ListItemButton>
         </List>
                       


                </Box>
                
                   
                    
                  

                    
            </Box>

        </>
       </>
    )
}