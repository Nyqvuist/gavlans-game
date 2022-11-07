import React from 'react'
import '../styles/main.css';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import test from "../assets/unnamed.png";
import { TextField } from '@mui/material';
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
                <Typography variant='h3' sx={{fontWeight:'bold', mt:30, pb:2, color:'red'}}> LOGO </Typography>
            </Link>   
        </Grid>
        <Grid container
        className="colored-grid-box"
        spacing={2}
        direction='column'
        justifyContent="center"
        alignItems="center"
        sx={{backgroundColor: '#c7e293', mx: 40}}>
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
                    spacing={6}
                    className='first-column'
                    justifyContent="center"
                    alignItems="center">
                        <Grid item>
                            <Avatar alt="test" src={test} sx={{width:160, height:160}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" sx={{textAlign:'center', fontWeight:'bold'}}>
                                Username: <TextField id="outlined-basic" onChange={(event) => sessionStorage.setItem("autosave", event.target.value)} label="Name" variant="outlined" required={true} size="small" /> 
                            </Typography>
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
