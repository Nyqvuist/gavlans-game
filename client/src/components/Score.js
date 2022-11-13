import React, { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, DialogActions, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import { NavLink } from 'react-router-dom';
import '../styles/score.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const goodArray = [
  'I admire your confidence',
  'Glad you tried your best',
  'You did a lot better than any of us thought you would!',
  'You totally live up to your reputation',
  'You worked really hard to get that done, didn\'t you?',
]

const mediocreArray = [
  'Well aren\'t you right at the top of the bell curve!',
  'Bless your little heart',
  'I feel like I asked too much of you',
  'Interesting...',
  'Thats really awesome, especially for you',
  'Not to be rude, but...',
]

const badArray = [
  'I smurf your peak',
  'You\'re serious?',
  'I\'m sure you\'re doing the best you can',
  'Can you explain what you were going for, exactly?',
  'I feel like I asked too much of you',
  'What do you think about trying something new?',
]

export default function Score({score, open, setOpen, game, array}) {

  const [line, setLine] = useState('')

  const getRandomItem = (arr) => {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
  }

  useEffect(() => {
    checkScore(score)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleClose = () => {
    setOpen(false);
  };

  const checkScore = (score) => {
    if(score >= 400){
      setLine(getRandomItem(goodArray))
    } else if(score < 400 && score > 100) {
      setLine(getRandomItem(mediocreArray))
    } else if (score <= 100) {
      setLine(getRandomItem(badArray))
    } 
  }
  console.log(game, array)

  return (
    <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          sx={{'& .MuiDialog-paper': {
            backgroundColor: '#D9DCD6',
            opacity: 0.75,
            px:3,
            py:3
          }}}
          >
          <DialogTitle className="game-over" sx={{fontFamily: 'Cinzel'}}>{"Game Over"}</DialogTitle>
          <Typography className="random-line">{line}</Typography>
          <Divider variant='middle' light={true} />
          <DialogContent sx={{}}>
            <DialogContentText className="point">
              {score + " points"}
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{justifyContent: 'center'}}>
            <NavLink to='/results' state={{game: [game], array: [array], score: [score]}} style={{textDecoration: 'none'}}>
              <Button 
              variant="contained"  
              color='success' 
              endIcon={<KeyboardArrowRightSharpIcon/>}  
              disableElevation
              className='next-button'>Next</Button>
            </NavLink>
          </DialogActions>
    </Dialog>
  )
}
