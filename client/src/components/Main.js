import React from 'react';
import '../styles/main.css';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Footer from './Footer';
import logo from "../assets/Gavlans_Game_Logo_v2.png";
import csgo from "../assets/GG_CSGO_Icon.png";
import league from "../assets/GG_League_of_Legends_Icon.png";
import souls from "../assets/GG_Dark_Souls_Icon.png";
import gow from "../assets/GG_God_of_War_Icon.png";
import "../styles/footer.css"


export default function Main() {

  return (
    <Grid container
    spacing={0}
    justifyContent="center"
    alignItems="center">
        <Grid item sx={{mt: 4, mb: 4}}>
            <img className="main-logo" src={logo} alt='logo' width='200' height='200'/> 
        </Grid>
        <Grid container
        spacing={0}
        direction='column'
        justifyContent="center"
        alignItems="center"
        >
            <Grid item>
                <Typography variant ='h2' sx={{color:'#D9DCD6'}}>Gavlan's Game</Typography>
            </Grid>
            <Grid item>
                <Typography variant='subtitle1' sx={{color:'#D9DCD6', fontSize: 24}}>The harshest speed trivia game.</Typography>
                <Typography variant='subtitle1' sx={{pb:10, color:'#D9DCD6', fontSize: 24, textAlign: 'center'}}>Gavlan Wheel? Gavlan Deal.</Typography>
            </Grid>
        </Grid>
              <Grid container
              spacing={8}
              direction="row"
              justifyContent="center"
              alignItems="center">
                <Grid item >
                  <NavLink to='/start' state="csgo">
                    <Tooltip title="CSGO" placement='top' arrow>
                      <img className='img-csgo' src={csgo} alt='csgo' width='200' height='200'/>  
                    </Tooltip>
                  </NavLink>
                </Grid>
                <Grid item >
                  <NavLink to='/start' state="league">
                    <Tooltip title='LEAGUE' placement='top' arrow>
                      <img className='img' src={league} alt='league' width='200' height='200'/>  
                    </Tooltip>
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to='/start' state="gow">
                    <Tooltip title='GOD OF WAR' placement='top' arrow>
                      <img src={gow} alt='gow' width='200' height='200'/>  
                    </Tooltip>
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to='/start' state="souls">
                    <Tooltip title='DARK SOULS' placement='top' arrow>
                      <img src={souls} alt='souls' width='200' height='200'/>  
                    </Tooltip>
                  </NavLink>
                </Grid>
              </Grid>
        <Footer className="footer"/>
    </Grid>
  )
}
