import React from 'react';
import '../styles/main.css';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import test from '../assets/unnamed.png';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';


export default function Main() {

  return (
    <Grid container
    spacing={2}
    justifyContent="center"
    alignItems="center">
        <Grid item>
            <Typography variant='h3' sx={{fontWeight:'bold', mt:10, pb:2, color:'red'}}> LOGO </Typography>
        </Grid>
        <Grid container
        spacing={2}
        direction='column'
        justifyContent="center"
        alignItems="center"
        >
            <Grid item>
                <Typography variant ='h2'>Esport Guesser</Typography>
            </Grid>
            <Grid item>
                <Typography variant='subtitle1' sx={{pb:10}}>Play Trivia games from the biggest collections</Typography>
            </Grid>
            <Grid item>
              <Grid container
              spacing={4}
              direction="row"
              justifyContent="center"
              alignItems="center">
                <Grid item>
                  <Button className='button'>
                    <img src={test} alt='test' width='200' height='200'/>
                  </Button>
                </Grid>
                <Grid item>
                  <NavLink to='/start' state="csgo">
                    <img className='img' src={test} alt='csgo' width='200' height='200'/>  
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to='/start' state="league">
                    <img className='img' src={test} alt='league' width='200' height='200'/>  
                  </NavLink>
                </Grid>
                <Grid item>
                  <Button className='button'>
                    <img src={test} alt='test' width='200' height='200'/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
            <Grid container
              spacing={4}
              direction="row"
              justifyContent="center"
              alignItems="center"
              >
                <Grid item>
                  <Button className='button'>
                    <img src={test} alt='test' width='200' height='200'/>
                  </Button>
                </Grid>
                <Grid item>
                  <Button className='button'>
                    <img src={test} alt='test' width='200' height='200'/>
                  </Button>
                </Grid>
                <Grid item>
                  <Button className='button'>
                    <img src={test} alt='test' width='200' height='200'/>
                  </Button>
                </Grid>
                <Grid item>
                  <Button className='button'>
                    <img src={test} alt='test' width='200' height='200'/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{mx:30}}>
            <Grid item>
              <Typography variant='subtitle2' sx={{color:'red'}}>LOGO</Typography>
            </Grid>
            <Grid item>
              <Typography variant='subtitle2' sx={{color:'red'}}>test</Typography>
            </Grid>
            <Grid item>
              <Typography variant='subtitle2' sx={{color:'red'}}>test</Typography>
            </Grid>
        </Grid>
    </Grid>
  )
}
