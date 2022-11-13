import { Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';


export default function Results() {

    const location = useLocation()
    const array = location.state.array[0]

  return (
    <Grid container
    spacing={2}
    justifyContent="center"
    alignItems={"center"}
    direction="column">
        <Grid item>
            <Typography variant="h5" sx={{fontWeight:'bold', color:'#D9DCD6', textTransform: 'uppercase', mt: 20}}>{location.state.game}</Typography>
        </Grid>
        <Grid item>
            <Typography variant="subtitle2" sx={{fontWeight:'bold', color:'#D9DCD6', mt:10}} >Score</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h4" sx={{fontWeight:'bold', color:'#D9DCD6'}}>{location.state.score + ' Points'}</Typography>
        </Grid>
        <Grid item>
            <Paper square sx={{backgroundColor: '#D9DCD6', px:5, py: 5, opacity: 0.75}}>
                <Typography variant='h4' sx={{alignItems: 'center', textAlign: 'center', mb: 4, color:'#39352B'}}>Results Summary</Typography>
                <Grid container
                rowSpacing={0}
                direction="row">
                    <Grid item>
                        <Grid container
                        spacing={1}
                        justifyContent="flex-start"
                        alignItems={"flex-start"}
                        direction="column">
                            <Grid item sx={{mr:12}}>
                                <Typography variant="h5" sx={{color:'#39352B'}}>Questions</Typography>
                                <Divider variant='middle'/>
                            </Grid>
                            {array.map((item, index) => (
                                <Grid item
                                key={index}>
                                    <Typography sx={{color:'#39352B'}}> Question {item.Index}</Typography>
                                </Grid>
                            ))}

                        </Grid>
                    </Grid>
                    <Grid item>
                    <Grid container
                        spacing={1}
                        justifyContent="flex-end"
                        alignItems={"flex-end"}
                        direction="column">
                            <Grid item>
                                <Typography variant="h5" sx={{color:'#39352B'}}>Time Completed</Typography>
                                <Divider variant='middle'/>
                            </Grid>
                            {array.map((item, index) => (
                                <Grid item
                                key={index}>
                                    <Typography sx={{color:'#39352B'}}>{item.Time} Seconds</Typography>
                                </Grid>
                            ))}

                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
  )
}
