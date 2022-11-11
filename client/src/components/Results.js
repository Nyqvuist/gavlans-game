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
            <Typography variant="h5" sx={{fontWeight:'bold', color: 'red', textTransform: 'uppercase', mt: 20}}>{location.state.game}</Typography>
        </Grid>
        <Grid item>
            <Typography variant="subtitle2" sx={{fontWeight:'bold', color: 'red', mt:10}} >Score</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h4" sx={{fontWeight:'bold', color: 'red'}}>{location.state.score + ' Points'}</Typography>
        </Grid>
        <Grid item>
            <Paper square sx={{backgroundColor: 'grey', px:5, py: 5, opacity: 0.75}}>
                <Typography variant='h4' sx={{alignItems: 'center', textAlign: 'center', mb: 4}}>Results Summary</Typography>
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
                                <Typography variant="h5">Questions</Typography>
                                <Divider variant='middle'/>
                            </Grid>
                            {array.map((item, index) => (
                                <Grid item
                                key={index}>
                                    <Typography> Question {item.Index}</Typography>
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
                                <Typography variant="h5">Time Completed</Typography>
                                <Divider variant='middle'/>
                            </Grid>
                            {array.map((item, index) => (
                                <Grid item
                                key={index}>
                                    <Typography>{item.Time} Seconds</Typography>
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
