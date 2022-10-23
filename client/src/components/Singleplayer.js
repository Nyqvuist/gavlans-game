import React from 'react'
import { Box, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function Singleplayer() {

    const location = useLocation()
    console.log(location.state)
    
  return (
    <Box sx={{width:360, height:120, backgroundColor:'white'}}>
        <Grid container
            className="inner-grid-row"
            spacing={2}
            direction='row'
            justifyContent="space-evenly"
            alignItems="center"
            >
                <Grid item>
                    <Grid container
                    direction='column'
                    className='first-column'
                    justifyContent="flex-start"
                    alignItems="flex-start">
                        <Grid item>
                            <Typography variant="h6">Singleplayer</Typography>
                        </Grid>
                        <Grid item sx={{pb:5}}>
                            <Typography variant="subtitle2">Play a game by yourself.</Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item>
                    <Grid container
                    direction='column'
                    className="icon-column"
                    justifyContent="flex-end"
                    alignItems="flex-end">
                        <Grid item>
                            <PersonIcon/>
                        </Grid>
                        <Grid item sx={{pt:3}}>
                            <NavLink to="/play" state={location.state}>
                                <Button variant='contained' sx={{width:90, height:30}}>
                                    Play!
                                </Button>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </Box>
  )
}
