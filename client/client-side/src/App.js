import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// const socket = io('http://localhost:3001')


// socket.on('connect', () => {
//   console.log(`You connected with id: ${socket.id}`)
// })


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;
