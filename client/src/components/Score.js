import React, { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, DialogActions, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';


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

export default function Score({score, open, setOpen}) {

  const [line, setLine] = useState('')

  const getRandomItem = (arr) => {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
  }

  useEffect(() => {
    checkScore(score)
  },[])

  const handleClose = () => {
    setOpen(false);
    window.location.reload(false)
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

  return (
    <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          sx={{'& .MuiDialog-paper': {
            backgroundColor: 'lightgrey',
            opacity: 0.6,
            px:3,
            py:3
          }}}
          >
          <DialogTitle sx={{textAlign: 'center', fontSize: 46, fontWeight: 'bold', color: 'red'}}>{"Game Over"}</DialogTitle>
          <Typography sx={{textAlign:'center', mb:2, fontWeight: 'bold'}}>{line}</Typography>
          <Divider variant='middle' light={true} />
          <DialogContent sx={{}}>
            <DialogContentText sx={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
              {score + " points"}
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{justifyContent: 'center'}}>
            <Button variant="contained"  color='success' endIcon={<KeyboardArrowRightSharpIcon/>}  disableElevation sx={{textTransform: 'none'}}>Next</Button>
          </DialogActions>
    </Dialog>
  )
}
