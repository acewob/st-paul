import { Component } from "react";
import {Grid} from "@mui/material";
//import {Login } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

class Register extends Component{
    render(){
        return(
        <div>
            <center>
                <Grid container spacing={3}>
                    <Grid size={{xs:4,md:3}}>
                        <item className="lf">grid 1</item>
                    </Grid>
                    <Grid size={{xs:4,md:6}}>
                        <item><p>In order to create a grid layout, you need a container. Use the container prop to create a grid container that wraps the grid items (the Grid is always an item).

Column widths are integer values between 1 and 12. For example, an item with size={6} occupies half of the grid container's width.</p></item>
                    </Grid>
                    <Grid size={{xs:4,md:3}}>
                        <item>grid 1</item>
                    </Grid>
                </Grid>
            </center>
        </div>
        );
    }
}
export default Register;