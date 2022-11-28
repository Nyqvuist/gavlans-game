import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Divider, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import logo from "../assets/Hassan_Lion_Logo_Alt.png";
import "../styles/Divider.css";


export default function Footer() {
  return (
    <Grid container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          className="footer">
            <Grid item>
              <Grid container
              direction={'row'}>
                <Grid item>
                  <img src={logo} alt='logo' width='70' height='70'/> 
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container
              spacing={0.5}
              direction={'row'}
              sx={{mx: 5}}>
                <Grid item>
                  <Typography variant='subtitle2' sx={{color:'#D9DCD6'}}>Terms of Service</Typography>
                </Grid>
                <Grid item>
                  <Divider orientation='vertical'/>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle2' sx={{color:'#D9DCD6'}}>Privacy</Typography>
                </Grid>
                <Grid item>
                  <Divider orientation='vertical'/>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle2' sx={{color:'#D9DCD6'}}>Contact</Typography>
                </Grid>
                <Grid item>
                  <Divider orientation='vertical'/>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle2' sx={{color:'#D9DCD6'}}>Donation</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container
              direction={'row'}>
                <Grid item>
                  <GitHubIcon sx={{color:'#D9DCD6', mx: 2}}/>
                  <EmailIcon sx={{color:'#D9DCD6'}}/>
                </Grid>
              </Grid>
            </Grid>
    </Grid>
  )
}
