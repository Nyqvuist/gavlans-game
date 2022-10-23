import Main from '../src/components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from '../src/components/Start';
import Play from '../src/components/Play';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/start" element={<Start/>}/>
        <Route path='/play' element={<Play/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
