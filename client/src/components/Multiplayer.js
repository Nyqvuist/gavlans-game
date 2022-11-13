import React from 'react'
import { Box, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';


export default function Multiplayer(props) {
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
                    sx={{mr: 9}}
                    >
                        <Grid item>
                            <Typography sx={{fontSize:24}}>Multiplayer</Typography>   
                        </Grid>
                        <Grid item sx={{mb: 4}}>
                            <Typography sx={{fontSize: 18}}>Play with friends.</Typography>
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
                            <GroupIcon/>
                        </Grid>
                        <Grid item sx={{mt: 4}}>
                            <Button disabled variant='contained' sx={{width:90, height:40, textTransform: 'none', textDecoration:'none', fontSize: 16, fontWeight: 'medium'}}>
                                Play!
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </Box>
  )
}
