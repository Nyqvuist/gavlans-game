import React from 'react';
import '../styles/main.css';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import test from '../assets/unnamed.png';
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';


export default function Main() {

  return (
    <Grid container
    spacing={2}
    justifyContent="center"
    alignItems="center">
        <Grid item>
            <Typography variant='h3' sx={{fontWeight:'bold', mt:10, pb:2, color:'#D9DCD6'}}> LOGO </Typography>
        </Grid>
        <Grid container
        spacing={2}
        direction='column'
        justifyContent="center"
        alignItems="center"
        >
            <Grid item>
                <Typography variant ='h2' sx={{color:'#D9DCD6', mt: 5}}>Gavlan Games</Typography>
            </Grid>
            <Grid item>
                <Typography variant='subtitle1' sx={{pb:10, color:'#D9DCD6', fontSize: 24}}>Play trivia games from the biggest collections</Typography>
            </Grid>
            <Grid item>
              <Grid container
              spacing={4}
              direction="row"
              justifyContent="center"
              alignItems="center">
                <Grid item>
                  <img src={test} alt='test' width='100' height='100'/>
                </Grid>
                <Grid item>
                  <NavLink to='/start' state="csgo">
                    <Tooltip title="CSGO" placement='top' arrow>
                      <img className='img' src={test} alt='csgo' width='100' height='100'/>  
                    </Tooltip>
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to='/start' state="league">
                    <Tooltip title='LEAGUE' placement='top' arrow>
                      <img className='img' src={test} alt='league' width='100' height='100'/>  
                    </Tooltip>
                  </NavLink>
                </Grid>
                <Grid item>
                  <img src={test} alt='test' width='100' height='100'/>
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
                  <img src={test} alt='test' width='100' height='100'/>
                </Grid>
                <Grid item>
                  <img src={test} alt='test' width='100' height='100'/>
                </Grid>
                <Grid item>
                  <img src={test} alt='test' width='100' height='100'/>
                </Grid>
                <Grid item>
                  <img src={test} alt='test' width='100' height='100'/>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{mx:30, mt: 10}}>
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
