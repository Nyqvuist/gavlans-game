import Main from '../src/components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from '../src/components/Start';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/start" element={<Start/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
