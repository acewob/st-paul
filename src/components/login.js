import { Component } from "react";

import { TextField,Button } from "@mui/material";
import { Login } from "@mui/icons-material"

class StdLogin extends Component{
    render(){
        return(
            <div>
                <center>
                    <h2>LOGIN</h2>
                        <form>
                            <TextField label="Email" color="secondary" variant="outlined"/><br/>
                            <br/>
                            <TextField label="password" color="secondary" variant="outlined" /><br/>
                            <br/>
                            <Button variant="outlined" startIcon={<Login />}>LOGIN</Button>
                        </form>
                </center>
            </div>
            
        );
    }
}
export default StdLogin;