import React from 'react'
import '../styles/start.css';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Singleplayer from '../components/Singleplayer';
import Multiplayer from '../components/Multiplayer';
import { Link } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import '../styles/border.css';


export default function Start() {
    
    const location = useLocation()

  return (
    
    <Grid container
    spacing={0}
    justifyContent="center"
    alignItems="center">
        <Grid item>
            <Link href="/" style={{textDecoration: 'none'}}>
                <Typography variant='h3' sx={{fontWeight:'bold', mt:10, pb:2, color: "#D9DCD6"}}> LOGO </Typography>
            </Link>   
        </Grid>
        <Grid container
        className="colored-grid-box"
        spacing={0}
        direction='column'
        justifyContent="center"
        alignItems="center"
        sx={{mx: 45}}>
            <Grid container
            className="inner-grid-row"
            spacing={5}
            direction='row'
            justifyContent="space-around"
            alignItems="center"
            sx={{py:20}}>
                <Grid item>
                    <Grid container
                    direction='column'
                    spacing={1}
                    className='first-column'
                    justifyContent="center"
                    alignItems="center">
                        <Grid item >
                            <Paper className='fancy-border'>
                                <Typography className="info-header" variant='h4'>Quick Info</Typography>
                                <Typography className="info-1" variant='h5'>• You will have 10 seconds to answer each question.</Typography>
                                <Typography className="info-2" variant='h5'>• The faster you answer the more points you will get.</Typography>
                                <Typography className="info-2" variant='h5'>• You will not know which questions you get wrong.</Typography>
                                <Typography className="info-2" variant='h5'>• Dont suck!</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container
                    direction='column'
                    justifyContent="center"
                    alignItems="center">
                        <Grid item sx={{mt: 1.5}}>
                            <Singleplayer category={location.state}/>
                        </Grid>
                        <Grid item sx={{mt: 5.5}}>
                            <Multiplayer category={location.state}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{mx:40, mb:5}}>
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
