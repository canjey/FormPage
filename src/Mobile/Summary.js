import * as React from "react";
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';




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