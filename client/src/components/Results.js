import { Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/results.css';


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
            <Typography className="title" sx={{fontFamily: 'Cinzel'}}>{location.state.game}</Typography>
        </Grid>
        <Grid item>
            <Typography className="score">Score</Typography>
        </Grid>
        <Grid item>
            <Typography className="points">{location.state.score + ' Points'}</Typography>
        </Grid>
        <Grid item>
            <Paper square className="summary-paper">
                <Typography className='summary-title'>Results Summary</Typography>
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
                                    <Typography className="item-map" > Question {item.Index}</Typography>
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
                                    <Typography className="item-map">{item.Time} Seconds</Typography>
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
