import React from 'react'
import { Box, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';


export default function Multiplayer(props) {
  return (
    <Box sx={{width:360, height:120, backgroundColor:'grey'}}>
        <Grid container
            className="inner-grid-row"
            spacing={2}
            direction='row'
            justifyContent="space-around"
            alignItems="center"
            >
                <Grid item>
                    <Grid container
                    direction='column'
                    className='first-column'
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    >
                        <Grid item>
                            <Typography variant="h6">Multiplayer</Typography>
                        </Grid>
                        <Grid item sx={{pb:5}}>
                            <Typography variant="subtitle2">Play with friends.</Typography>
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
                            <GroupIcon/>
                        </Grid>
                        <Grid item sx={{pt:3}}>
                            <Button variant='contained' sx={{width:90, height:30}}>
                                Play!
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </Box>
  )
}
