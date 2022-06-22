import { io } from 'socket.io-client';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

const socket = io('http://localhost:3001')


socket.on('connect', () => {
  console.log(`You connected with id: ${socket.id}`)
})


function App() {
  return (
    <Container>
      <Typography variant ='h1'>Hello World</Typography>
    </Container>
  );
}

export default App;
