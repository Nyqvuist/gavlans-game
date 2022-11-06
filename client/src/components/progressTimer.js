import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../styles/progress.css";

export default function progressTimer({progress, index}) {
  return (

    <CircularProgressbar
        minValue={0}
        maxValue={10}
        value={progress}
        text={(index + 1) + " / 5"}
        styles={buildStyles({
            trokeLinecap: 'butt',
            textSize:'24px',
            pathTransitionDuration: 0.5,

        })}
    />
  )
}
