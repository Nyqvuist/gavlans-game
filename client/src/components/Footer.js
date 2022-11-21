import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';


export default function Footer() {
  return (
    <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{mx:30, mt: 5}}>
            <Grid item>
              <Typography variant='subtitle2' sx={{color:'red'}}>LOGO</Typography>
            </Grid>
            <Grid item>
              <Typography variant='subtitle2' sx={{color:'red'}}>test</Typography>
            </Grid>
            <Grid item>
              <GitHubIcon sx={{color:'#D9DCD6'}}/>
              <EmailIcon sx={{color:'#D9DCD6'}}/>
            </Grid>
    </Grid>
  )
}
