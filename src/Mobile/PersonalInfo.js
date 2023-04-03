import * as React from "react";
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function PersonalInfo() {
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
                            <Typography variant="h5"> Personal Info</Typography>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <Typography variant="p"> Please provide your name, email address, and phone number.</Typography>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <Typography>Name</Typography>
                            <TextField
                                fullWidth
                                required
                                id="outlined-search"
                                placeholder="e.g Stephen King"
                                type="text" />
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <Typography>Email Address</Typography>
                            <TextField
                                required
                                fullWidth
                                id="outlined-search"
                                placeholder="e.g StephenKing@lorm.com"
                                type="email" />
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <Typography>Phone Number</Typography>
                            <TextField
                                required
                                fullWidth
                                id="outlined-search"
                                placeholder="e.g +123 456 7890"
                                type="phone " />
                        </div>


                    </CardContent>
                </Card>
                </Box>
                <div>
                    <Button type="submit" variant="contained" sx={{ marginTop: '20%', marginLeft: '75%' }}>Next Step</Button>
                </div>
            </Box>

        </>
    )
}