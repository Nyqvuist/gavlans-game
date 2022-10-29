import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';
var Timer = require("easytimer.js").Timer;
var timerInstance = new Timer();


export default function Play() {

    const location = useLocation()

    const [question, setQuestion] = useState([])
    const [index, setIndex] = useState(0)
    const [isBusy, setIsBusy] = useState(true)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    useEffect(() => {
      setIsBusy(true)
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:3001/${location.state}`)
            const jsonResult = result.data
            setQuestion(jsonResult)
            setIsBusy(false)
            
        }
        fetchData();
        timerInstance.start({precision: 'seconds'})
        
    }, [])


    let array = question[index]?.choices?.map(choice => choice)
    let shuffled = array?.sort(() => 0.5 - Math.random());
    let choices = shuffled?.slice(0,3)
    let answer = question[index]?.answer
    let ques = question[index]?.question
    let name = question[index]?.name
    choices?.push(question[index].answer)
    let shuffles = choices?.sort(() => 0.5 - Math.random())

    const jobDone = (shuffle) => {
      if(shuffle === answer){
        timerInstance.pause()
        const points = 100
        let time = timerInstance.getTimeValues().seconds
        setScore(score + (Math.floor(points / time)))
        timerInstance.reset()
        setIndex(index + 1)
        timerInstance.start({precision:'seconds'})
      } else {
        setIndex(index + 1)
      }
      if(index === 4){
        setShowScore(true)
      }
    };

    

    if(isBusy){
      return (
        <h1>hello</h1>
      )
    }
   return (
      <>
          {showScore ? (
          <Grid container
          spacing={2}
          justifyContent="center"
          alignItems="center">
            <Grid item>
              <Typography variant="h1" sx={{color:'#b71c1c', textAlign: 'center'}}>{score}</Typography>
            </Grid>
          </Grid>) : (
            <Grid container
            spacing={2}
            justifyContent="center"
            alignItems="center">
                <Grid item>
                  <Typography variant='h3' sx={{fontWeight:'bold', mt:30, pb:2, color:'red'}}> {index + 1}/5 </Typography>
                </Grid>
                <Grid container
                direction={'column'}
                spacing={1}
                justifyContent="center"
                alignItems="center"
                >
                    <Grid container
                    spacing={1}
                    direction={'column'}
                    justifyContent="center"
                    alignItems="center">
                        <Grid item>
                            <Grid container
                            direction='column'
                            spacing={2}
                            justifyContent="center"
                            alignItems="center">
                                <Grid item>
                                <Typography variant="h5" sx={{textAlign:'center', fontWeight:'bold', color: 'red'}}>
                                        {ques} 
                                </Typography>
 
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" sx={{textAlign:'center', fontWeight:'bold', color: 'red'}}>
                                        {name} 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container
                            rowSpacing={1}
                            alignItems="center"
                            justifyContent="center"
                            sx={{ml:5, pt:5}}>
                                <Grid item xs={6}>
                                <Button
                                variant='contained'
                                sx={{backgroundColor: '#1783EF'}}
                                  onClick={() => jobDone(shuffles[0])}
                                >{shuffles?.[0]}</Button>  
                                </Grid>
                                <Grid item xs={6}>
                                <Button
                                variant='contained'
                                sx={{backgroundColor: '#1783EF'}}
                                  onClick={() => jobDone(shuffles[1])}
                                >{shuffles?.[1]}</Button>
                                </Grid>
                                <Grid item xs={6}>
                                <Button
                                variant='contained'
                                sx={{backgroundColor: '#1783EF'}}
                                  onClick={() => jobDone(shuffles[2])}
                                >{shuffles?.[2]}</Button>
                                </Grid>
                                <Grid item xs={6}>
                                <Button
                                variant='contained'
                                sx={{backgroundColor: '#1783EF'}}
                                  onClick={() => jobDone(shuffles[3])}
                                >{shuffles?.[3]}</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
          )} 
      </> 
      )
    }
