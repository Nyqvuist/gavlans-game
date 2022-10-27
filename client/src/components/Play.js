import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';


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
        setIndex(index + 1)
        setScore(score + 100)
        if(index === 4){
          setShowScore(true);
        }
      }
      
    };

    

    if(isBusy){
      return (
        <h1>hello</h1>
      )
    }
    console.log(showScore)
    console.log("question length: ", question.length)
    console.log("index: ", index)

   return (
      <>
          {showScore ? (
          <Grid container
          spacing={2}
          justifyContent="center"
          alignItems="center">
            <Grid item>
              <Typography variant="h1" sx={{color:'#b71c1c'}}>{score}</Typography>
            </Grid>
          </Grid>) : (<Grid container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              >
                <Grid item>
                  <Typography variant="h2" sx={{mt:20, pb:2, ml:118, color: 'green'}}>{index + 1}/5</Typography>
                </Grid>
                
              <Grid container
              spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{backgroundColor: '#c7e293', mb:20, mx:50}}>
                <Grid item sx={{pt:5}}>
                  <Typography variant ='h4'>{ques}</Typography>
                </Grid>
                <Grid item sx={{pb:20}}>
                  <Typography variant='subtitle1'>{name}</Typography>
                </Grid>
                <Grid item>
                <Grid container 
                rowSpacing={1}
                justifyContent="center"
                alignItems={"center"}
                columnSpacing={{xs:1, sm:2, md:3}}
                sx={{mb:10, ml:30}}>
                  {shuffles?.map((shuffle) => (
                    <Grid item key={shuffle} xs={6}>
                      <Button
                      variant='contained'
                      sx={{backgroundColor: '#1783EF'}}
                        onClick={() => jobDone(shuffle)}
                      >{shuffle}</Button>
                    </Grid>
                  ))}
                </Grid>
                </Grid>
              </Grid>
            </Grid>)} 
      </> 
      )
    }
