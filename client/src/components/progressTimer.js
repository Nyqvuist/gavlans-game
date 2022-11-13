import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../styles/progress.css";

export default function progressTimer({progress, index}) {
  return (

    <CircularProgressbar
        minValue={0}
        maxValue={10}
        value={progress}
        text={(index + 1) + " / 5"}
        styles={{
          root: {width: 150, height:150},
          path: {
            stroke: `#B88846`,
            pathTransitionDuration: 0.5,
          },
          trail: {
            strokeLinecap: 'butt',
          },
          text: {
            fontSize:'20px',
            fill: '#B88846',
          },            
        }}
    />
  )
}
