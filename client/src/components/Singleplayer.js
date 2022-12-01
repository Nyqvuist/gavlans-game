import React from 'react'
import { Box, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function Singleplayer() {

    const location = useLocation()
    
  return (
    <Box sx={{width:470, height:170, backgroundColor: '#D9DCD6', borderRadius: 2, opacity: 0.75}}>
        <Grid container
            className="inner-grid-row"
            spacing={2}
            direction='row'
            justifyContent="space-between"
            alignItems="center"
            sx={{px: 6}}
            >
                <Grid item>
                    <Grid container
                    direction='column'
                    className='first-column'
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{mr: 9}}>
                        <Grid item>
                            <Typography sx={{fontSize: 24}}>Singleplayer</Typography>
                        </Grid>
                        <Grid item sx={{mb: 4}}>
                            <Typography sx={{fontSize: 18}}>Play a game by yourself.</Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item>
                    <Grid container
                    direction='column'
                    className="icon-column"
                    justifyContent="flex-end"
                    alignItems="flex-end">
                        <Grid item sx={{mt: 3}}>
                            <PersonIcon/>
                        </Grid>
                        <Grid item sx={{mt: 4}}>
                            <NavLink to="/play" state={{game: [location.state.game], title: [location.state.title]}} style={{textDecoration: 'none'}}>
                                <Button variant='contained' sx={{width:90, height:40, textTransform: 'uppercase', textDecoration:'none', backgroundColor: "#4A5E82", fontSize: 16, letterSpacing: 1}}>
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
