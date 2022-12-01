import React, { useState } from 'react';
import '../styles/main.css';
import { Grid, useMediaQuery, Zoom } from '@mui/material';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Footer from './Footer';
import logo from "../assets/Gavlans_Game_Logo_v2.png";
import csgo from "../assets/GG_CSGO_Icon.png";
import league from "../assets/GG_League_of_Legends_Icon.png";
import souls from "../assets/GG_Dark_Souls_Icon.png";
import gow from "../assets/GG_God_of_War_Icon.png";
import "../styles/footer.css";
import "../styles/Tooltip.css";


export default function Main() {

  const [open, setOpen] = useState(true)

  const tooltips = useMediaQuery('(max-width: 479px)')

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
              alignItems="center"
              sx={{mb: 16}}>
                <Grid item >
                  <NavLink to='/start' state="cs:go">
                  {tooltips ? (
                    <Tooltip title={<h1 className='tooltip-h1'>CS:GO</h1>} open={open} placement='top'>
                    <div className="img">
                      <img className='img-csgo' src={csgo} alt='cs:go'/>  
                    </div>
                  </Tooltip>
                  ) : (
                    <Tooltip title={<h1 className='tooltip-h1'>CS:GO</h1>} TransitionComponent={Zoom} placement='top'>
                      <div className="img">
                        <img className='img-csgo' src={csgo} alt='csgo'/>  
                      </div>
                    </Tooltip>
                  )}
                  </NavLink>
                </Grid>
                <Grid item >
                  <NavLink to='/start' state="league">
                    {tooltips ? (
                      <Tooltip title={<h1 className='tooltip-h1'>LEAGUE</h1>} open={open} placement='top'>
                      <img className='img' src={league} alt='league'/>  
                    </Tooltip>
                  ) : (
                    <Tooltip title={<h1 className='tooltip-h1'>LEAGUE</h1>} TransitionComponent={Zoom} placement='top'>
                      <img className='img' src={league} alt='league'/>  
                    </Tooltip>
                  )}
                  </NavLink>
                </Grid>
                <Grid item className='container'>
                  <NavLink to='/start' state="gow">
                    {tooltips ? (
                      <Tooltip title={<h1 className='tooltip-h1'>GOD OF WAR</h1>} open={open} placement='top'>
                      <img className='img' src={gow} alt='gow'/>
                    </Tooltip>
                  ) : (
                    <Tooltip title={<h1 className='tooltip-h1'>GOD OF WAR</h1>} TransitionComponent={Zoom} placement='top'>
                      <img className='img' src={gow} alt='gow'/>
                    </Tooltip>
                  )}
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to='/start' state="souls">
                    {tooltips ? (
                      <Tooltip title={<h1 className='tooltip-h1'>DARK SOULS</h1>} open={open} placement='top'>
                        <img className='img' src={souls} alt='souls'/>  
                      </Tooltip>

                  ) : (
                    <Tooltip title={<h1 className='tooltip-h1'>DARK SOULS</h1>} TransitionComponent={Zoom} placement='top'>
                      <img className='img' src={souls} alt='souls'/>  
                    </Tooltip>
                  )}
                  </NavLink>
                </Grid>
              </Grid>
      <Footer className="footer"/>
    </Grid>
  )
}
