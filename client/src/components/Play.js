import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Score from '../components/Score';
import ProgressBar from "../components/progressTimer";
import { useTimer } from 'use-timer';
import '../styles/play.css';
import "animate.css";


let trackArray = []

export default function Play() {

  const { time, start, pause, reset } = useTimer({
    endTime: 10,
    onTimeOver: () => {
      if(done){
        if(index < (question.length - 1)) {
          reset();
          setIndex(index + 1)
          createObj(10);
          start();
          shuffleArray();
        } else {
          pause();
          createObj(10);
          setDone(false)
          setShowScore(true)
          setOpen(true)
        }
      }
    },
    onTimeUpdate: (time) => {
      setProgress(time)
    },
  });


    const location = useLocation()

    const [open, setOpen] = useState(false)
    const [question, setQuestion] = useState([])
    const [index, setIndex] = useState(0)
    const [isBusy, setIsBusy] = useState(true)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [progress, setProgress] = useState(0)
    const [answer, setAnswer] = useState('')
    const [ques, setQues] = useState('')
    const [shuffles, setShuffles] = useState([])
    const [done, setDone] = useState(true)


    useEffect(() => {
      setIsBusy(true)
        const fetchData = async () => {
            const result = await axios.get(`http://172.26.112.1:3001/${location.state}`)
            const jsonResult = result.data
            setQuestion(jsonResult)
            setIsBusy(false)
        }
        fetchData();
        start();
        trackArray = [];
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.state])

    useEffect(() => {
      if(question.length > 0) {
        shuffleArray();
      }
      //eslint-disable-next-line react-hooks/exhaustive-deps
    },[isBusy])

    const createObj = (time) => {
      let obj = {Time: time, Index: index + 1}
      trackArray.push(obj)
    };

    // This shuffles the choices 
    const shuffleArray = () => {
      let array = question[index]?.choices?.map(choice => choice)
      let shuffled = array?.sort(() => 0.5 - Math.random());
      let choices = shuffled?.slice(0,3)
      let answer = question[index]?.answer
      let ques = question[index]?.question
      choices?.push(question[index].answer)
      let shuffles = choices?.sort(() => 0.5 - Math.random())
      setQues(ques)
      setAnswer(answer)
      setShuffles(shuffles)
    }
    
    // This is the main game logic to check answers
    const jobDone = (shuffle) => {
      if(shuffle === answer){
        pause();
        const points = 100
        if(time === 0){
          setScore(score + 150)
        } else {
          setScore(score + (Math.floor(points / time)))
        }
        let obj = {Time: time, Index: index + 1}
        trackArray.push(obj)
        reset();
        setIndex(index + 1)
        shuffleArray();
        start();
      } else if (shuffle !== answer){
        pause();
        let obj = {Time: time, Index: index + 1}
        trackArray.push(obj)
        reset();
        setIndex(index + 1)
        shuffleArray();
        start();
      }
      if(index === (question.length - 1)){
        pause();
        setDone(false)
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
            <Score score={score} open={open} setOpen={setOpen} game={location.state} array={trackArray}/>
          ) : (
            <Grid container
            spacing={0}
            justifyContent="center"
            alignItems="center"
            direction={"column"}>
              <Grid item>
                <Typography className='title' sx={{fontFamily: 'Cinzel'}}>{location.state}</Typography>
              </Grid>
                <Grid item key={index} className="animate__animated animate__flash" sx={{mt: 6}} >
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
                            spacing={0}
                            justifyContent="center"
                            alignItems="center">
                                <Grid item>
                                <Typography className="question">
                                        {ques} 
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container
                            direction="row"
                            rowSpacing={6}
                            alignItems="center"
                            justifyContent="space-evenly"
                            >
                              <Grid item>
                                <Grid container
                                direction="column"
                                alignItems={"center"}
                                justifyContent="space-evenly"
                                spacing={4}
                                >
                                  <Grid item>
                                    <Button
                                    variant='contained'
                                    key={index}
                                    className="animate__animated animate__fadeInUp"
                                      onClick={() => jobDone(shuffles[0])}
                                    >{shuffles?.[0]}</Button>
                                  </Grid>
                                  <Grid item>
                                    <Button
                                      variant='contained'
                                      key={index}
                                      className="animate__animated animate__fadeInUp"
                                        onClick={() => jobDone(shuffles[1])}
                                      >{shuffles?.[1]}</Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item>
                              <Grid container
                                direction="column"
                                alignItems={"center"}
                                justifyContent="space-evenly"
                                spacing={4}
                                sx={{ml: -1}}>
                                  <Grid item>
                                    <Button
                                    variant='contained'
                                    key={index}
                                    className="animate__animated animate__fadeInUp"
                                      onClick={() => jobDone(shuffles[2])}
                                    >{shuffles?.[2]}</Button>
                                  </Grid>
                                  <Grid item>
                                    <Button
                                      variant='contained'
                                      key={index}
                                      className="animate__animated animate__fadeInUp"
                                        onClick={() => jobDone(shuffles[3])}
                                      >{shuffles?.[3]}</Button>
                                  </Grid>
                                </Grid>
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


    