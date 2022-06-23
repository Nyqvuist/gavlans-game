// import { io } from 'socket.io-client';
// import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import '../styles/main.css';
import React from 'react';
import { Grid } from '@mui/material';
import '../styles/main.css';


export default function Main() {
  return (
    <>
    <Grid container>
        <Grid item>
            <Typography variant='h3' sx={{fontWeight:'bold'}}> LOGO </Typography>
        </Grid>
        <Grid container 
        sx={{backgroundColor: '#c7e293'}}>
            <Grid item>
                <Typography>Hello World</Typography>
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}
