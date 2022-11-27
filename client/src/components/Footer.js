import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Divider, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import logo from "../assets/Gavlans_Game_Logo_v2.png";


export default function Footer() {
  return (
    <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{mt: 5}}
          className="footer">
            <Grid item sx={{mr: 72}}>
              <img src={logo} alt='logo' width='70' height='70'/> 
            </Grid>
            <Grid item>
              <Typography variant='subtitle2' sx={{color:'#D9DCD6'}}>Terms of Service</Typography>
            </Grid>
            <Divider orientation='vertical' variant='middle' sx={{color:'#D9DCD6', mx: 0.2}}/>
            <Grid item>
              <Typography variant='subtitle2' sx={{color:'#D9DCD6'}}>Privacy</Typography>
            </Grid>
            <Divider orientation='vertical' variant='middle' sx={{color:'#D9DCD6', mx: 0.2}}/>
            <Grid item>
              <Typography variant='subtitle2' sx={{color:'#D9DCD6'}}>Contact</Typography>
            </Grid>
            <Grid item sx={{ml: 70}}>
              <GitHubIcon sx={{color:'#D9DCD6', mx: 2}}/>
              <EmailIcon sx={{color:'#D9DCD6'}}/>
            </Grid>
    </Grid>
  )
}
