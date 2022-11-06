import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Score({score, open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
    window.location.reload(false)
  };

  return (
    <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          >
          <DialogTitle>{"Holy Moly You Suck"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {score + " points"}
            </DialogContentText>
          </DialogContent>
    </Dialog>
  )
}
