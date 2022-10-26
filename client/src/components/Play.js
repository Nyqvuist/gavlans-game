import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { blue } from '@mui/material/colors';

export default function Play() {

    const location = useLocation()

    const [question, setQuestion] = useState([])
    const [index, setIndex] = useState(0)
    const [isBusy, setIsBusy] = useState(true)
    const [score, setScore] = useState(0)

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
    
    const jobDone = () => {
      setIndex(index + 1)
      setScore(score + 100)
    };
    

  return (
    <div>
      {isBusy ? (<div>hello</div>) : (<h1 style={{backgroundColor:blue}}>{JSON.stringify(ques)} + {JSON.stringify(answer)}</h1>)}
      <div>
        <button onClick={() => jobDone()}>Click me</button>
        <h1>{sessionStorage.getItem("autosave")}</h1>
      </div>
    </div>
  )
}
