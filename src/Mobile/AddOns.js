import * as React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Arcade from "../assets/images/icon-arcade.svg"
import Advanced from "../assets/images/icon-advanced.svg"
import Pro from "../assets/images/icon-pro.svg"
import Checkbox from '@mui/material/Checkbox';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AddOns() {
    return (
        <>
            <Box
                component="form"
                autoComplete="off"
                validate
                sx={{ padding: '10%', marginTop: '-150px', }}
            >
                <Box >
                <Card sx={{ minWidth: 275, padding:'30px' }}>
                    <CardContent>
                    
                        <Typography>
                            Pick Addons
                        </Typography>
                        <Typography>
                            Add ons help you enhance your gaming experience
                        </Typography>
                        <Card sx={{ width:"100%", marginTop:'40px' }}>
                        <CardContent sx={{display:'flex', justifyContent:'space-between'}}>
                        <Checkbox {...label}  />
                        <Typography style={{marginLeft:'10px'}}>
                                Online Service<br />
                               Access to multiplayer games
                            </Typography>
                            <Typography style={{marginLeft:'10px'}}>
                                $1/mo
                            </Typography>

                        </CardContent>

                        </Card>
                        <Card sx={{ width:"100%", marginTop:'10%' }}>
                        <CardContent sx={{display:'flex', justifyContent:'space-between'}}>
                        <Checkbox {...label}  />
                        <Typography style={{marginLeft:'10px'}}>
                                Larger Storage<br />
                               Extra 1TB of cloud space 
                            </Typography>
                            <Typography style={{marginLeft:'10px'}}>
                                $2/mo
                            </Typography>
                        </CardContent>

                        </Card>
                        <Card sx={{ width:"100%", marginTop:'10%' }}>
                        <CardContent sx={{display:'flex', justifyContent:'space-between'}}>
                        <Checkbox {...label}  />
                        <Typography style={{marginLeft:'10px'}}>
                                Customizable Profile<br />
                               Custome theme on your profile
                            </Typography>
                            <Typography style={{marginLeft:'10px'}}>
                                $2/mo
                            </Typography>
                        </CardContent>

                        </Card>

                    </CardContent>
                </Card>
                <Grid container sx={{marginTop:'30px'}}>
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
    )
}