import { useState } from "react";
import {Box,Button, Grid, TextField, Paper, Avatar} from "@mui/material";
import { LockOutline} from "@mui/icons-material";
//import {Login } from "@mui/icons-material";
//import { styled } from '@mui/material/styles';
//import Paper from '@mui/material/Paper';

function Register(){
        const [Password,setPass]=useState();
        const [email,setEmail]=useState();

        const paperStyle={Padding:20,height:"70vh",width:280, margin:"20px auto"}
        const avatarStyle={backgroundColor:"#ffebee",margin:"30px auto"}
        const textFieldStyle={margin:"5px"}
        return(
        <div>
            <center>
                    <Grid >
                            <Paper elevation={10} style={paperStyle}>
                                <Grid align='center'>
                                    <Avatar style={avatarStyle}><LockOutline/></Avatar>
                                    <h2>Sign up</h2>
                                </Grid>
                                <Grid>
                                <Box component="form" sx={{ 
                                    '& > :not(style)': { m: 1, width: '25ch' } }}
                                    noValidate
                                    autoComplete="off"
                                >
                                
                                    <TextField label="Email" value={email} placeholder="Enter Email" variant="standard" fullWidth required/>
                                    <TextField type="password" label="Password" value={Password} placeholder="Enter Password" variant="standard" fullWidth required/>
                                    <Button variant="contained" color="primary" type="sumbit" value="Register">Register</Button>
                                </Box>
                                </Grid>
                            </Paper>
                    </Grid>
            </center>
        </div>
        );
    }
export default Register;