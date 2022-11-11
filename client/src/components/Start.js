import React from 'react'
import '../styles/main.css';
import { Box, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Singleplayer from '../components/Singleplayer';
import Multiplayer from '../components/Multiplayer';
import { Link } from '@mui/material';
import { useLocation } from 'react-router-dom';


export default function Start() {
    
    const location = useLocation()
    console.log(location.state)

  return (
    
    <Grid container
    spacing={2}
    justifyContent="center"
    alignItems="center">
        <Grid item>
            <Link href="/" style={{textDecoration: 'none'}}>
                <Typography variant='h3' sx={{fontWeight:'bold', mt:30, pb:2, color: "#D9DCD6"}}> LOGO </Typography>
            </Link>   
        </Grid>
        <Grid container
        className="colored-grid-box"
        spacing={2}
        direction='column'
        justifyContent="center"
        alignItems="center"
        sx={{mx: 20}}>
            <Grid container
            className="inner-grid-row"
            spacing={2}
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
                        <Grid item>
                            <Typography variant='h2'>Rules</Typography>
                        </Grid>
                        <Grid item>
                            <Box sx={{backgroundColor: 'gray', opacity: 0.75, px: 3,py: 3}}>
                                <Typography variant='h5'>• You will have 10 seconds to answer each question.</Typography>
                                <Typography variant='h5'>• The faster you answer the more points you will get.</Typography>
                                <Typography variant='h5'>• You will not know which questions you get wrong.</Typography>
                                <Typography variant='h5'>• Dont suck.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container
                    direction='column'
                    spacing={8}
                    className="singleplayer-column"
                    justifyContent="center"
                    alignItems="center">
                        <Grid item>
                            <Singleplayer category={location.state}/>
                        </Grid>
                        <Grid item>
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
          sx={{mx:40, mb:30}}>
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
