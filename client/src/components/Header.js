import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import logo from "../assets/Gavlans_Game_Logo_v2.png";
import '../styles/play.css';


export default function Header({game}) {
  return (
    <Grid container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{mt:10}}
          >
            <Grid item>
              <img src={logo} alt='logo' width='150' height='150'/> 
            </Grid>
            <Grid item >
              <Typography className='title' sx={{fontFamily: 'Cinzel', mx: 88}}>{game}</Typography>
            </Grid>
    </Grid>
  )
}
