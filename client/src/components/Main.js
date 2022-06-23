import React from 'react';
import '../styles/main.css';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

export default function Main() {
  return (
    <Grid container 
    justifyContent="center"
    alignItems="center">
        <Grid item>
            <Typography variant='h3' sx={{fontWeight:'bold', mt:30}}> LOGO </Typography>
        </Grid>
        <Grid container 
        sx={{backgroundColor: '#c7e293', mx: 30, mb:30}}>
            <Grid item>
                <Typography variant ='h2'>Esport Guesser</Typography>
            </Grid>
        </Grid>
    </Grid>
  )
}
