import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Score from '../components/Score';
import ProgressBar from "../components/progressTimer";

var Timer = require("easytimer.js").Timer;
var timerInstance = new Timer();

export default function Play() {

    const location = useLocation()

    const [open, setOpen] = useState(false)
    const [question, setQuestion] = useState([])
    const [index, setIndex] = useState(0)
    const [isBusy, setIsBusy] = useState(true)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [progress, setProgress] = useState(0)
    const [name, setName] = useState('')
    const [answer, setAnswer] = useState('')
    const [ques, setQues] = useState('')
    const [shuffles, setShuffles] = useState([])

    useEffect(() => {
      setIsBusy(true)
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:3001/${location.state}`)
            const jsonResult = result.data
            setQuestion(jsonResult)
            setIsBusy(false)
        }
        fetchData();
        timerInstance.start({precision: 'seconds', startValues: {seconds: 0}, target:{seconds: 10}})
    }, [location.state])

    useEffect(() => {
      if(question.length > 0) {
        shuffleArray();
      }
    },[isBusy])

    // Rework timer

    timerInstance.addEventListener('secondsUpdated', function(e) {
      setProgress(timerInstance.getTimeValues().seconds + 1)
    })

    timerInstance.addEventListener('targetAchieved', function(e) {
      if(index < 4) {
        timerInstance.stop()
        setProgress(1)
        timerInstance.start({precision: 'seconds', startValues: {seconds: 0}, target:{seconds: 10}})
        setIndex(index + 1)
        shuffleArray();
      } else {
        timerInstance.stop()
        setShowScore(true)
        setOpen(true)
      }
      
    })

    const shuffleArray = () => {
      let array = question[index]?.choices?.map(choice => choice)
      let shuffled = array?.sort(() => 0.5 - Math.random());
      let choices = shuffled?.slice(0,3)
      let answer = question[index]?.answer
      let ques = question[index]?.question
      let name = question[index]?.name
      choices?.push(question[index].answer)
      let shuffles = choices?.sort(() => 0.5 - Math.random())
      setName(name)
      setQues(ques)
      setAnswer(answer)
      setShuffles(shuffles)
    }
      

    const jobDone = (shuffle) => {
      if(shuffle === answer){
        timerInstance.pause()
        const points = 100
        let time = timerInstance.getTimeValues().seconds
        if(time === 0){
          setScore(score + 150)
        } else {
          setScore(score + (Math.floor(points / time)))
        }
        timerInstance.stop()
        setProgress(1)
        setIndex(index + 1)
        shuffleArray();
        timerInstance.start({precision: 'seconds', startValues: {seconds: 0}, target:{seconds: 10}})
      } else {
        timerInstance.stop()
        setProgress(1)
        setIndex(index + 1)
        shuffleArray();
        timerInstance.start({precision: 'seconds', startValues: {seconds: 0}, target:{seconds: 10}})
      }
      if(index === 4){
        timerInstance.stop()
        setShowScore(true)
        setOpen(true)
      }
    };


    if(isBusy){
      return (
        <CircularProgress />
      )
    }
   return (
      <>
          {showScore ? (
            <Score score={score} open={open} setOpen={setOpen}/>
          ) : (
            <Grid container
            spacing={2}
            justifyContent="center"
            alignItems="center">
                <Grid item sx={{mt:30, width:125, height:125}}>
                  <ProgressBar progress={progress} index={index}/>
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
                                <Typography variant="h5" sx={{textAlign:'center', fontWeight:'bold', color: 'red', mt: 10}}>
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
