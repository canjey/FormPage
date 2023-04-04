import * as React from "react";
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/users";
import { updateFormData } from "../store/users/slice";

export default function PersonalInfo({ setActiveTab }) {
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
        <>
            <Box
                component="form" 
                autoComplete="off"
                validate
                
                onSubmit={handleSubmit}
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
                                type="text" 
                                onChange={(e) => setName(e.target.value)}
                                />
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <Typography>Email Address</Typography>
                            <TextField
                                required
                                fullWidth
                                id="outlined-search"
                                placeholder="e.g StephenKing@lorm.com"
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" />
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <Typography>Phone Number</Typography>
                            <TextField
                                required
                                fullWidth
                                id="outlined-search"
                                placeholder="e.g +123 456 7890"
                                onChange={(e) => setPhone(e.target.value)}
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