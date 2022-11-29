import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Divider, Grid, Link } from '@mui/material';
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
                  <Link href='mailto:gavlansgamehelp@gmail.com' sx={{textDecoration: 'none'}}>
                    <Typography variant='subtitle2' sx={{color:'#D9DCD6'}}>Contact</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Divider orientation='vertical'/>
                </Grid>
                <Grid item>
                  <a className="donation" href='https://www.paypal.com/donate/?hosted_button_id=XWHFWVRD9UVRC'>
                    <Typography variant='subtitle2' sx={{color:'#D9DCD6'}}>Donation</Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container
              direction={'row'}>
                <Grid item>
                  <a className="donation" href="https://github.com/Nyqvuist">
                    <GitHubIcon sx={{color:'#D9DCD6', mx: 2}}/>
                  </a>
                  <Link href='mailto:gavlansgamehelp@gmail.com'>
                    <EmailIcon sx={{color:'#D9DCD6'}}/>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
    </Grid>
  )
}
