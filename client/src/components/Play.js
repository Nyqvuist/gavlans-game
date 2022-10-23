import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function Play() {

    const location = useLocation()
    console.log(location.state)

    const [question, setQuestion] = useState([])
    const [index, setIndex] = useState(0)
    const [refreshKey, setRefreshKey] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:3000/${location.state}`)
            const jsonResult = result.data
            setQuestion(jsonResult[index])

        }

        fetchData();
        
        
    }, [refreshKey])

    

  return (
    <div>{JSON.stringify(question.question)} + {JSON.stringify(question.answer)}</div>
  )
}
