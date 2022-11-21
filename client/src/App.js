import Main from '../src/components/Main';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Start from '../src/components/Start';
import Play from '../src/components/Play';
import Results from '../src/components/Results';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'EB Garamond',
      'serif',
      'Cinzel',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/gavlans-game" element={<Main/>}/>
          <Route path="/gavlans-game/start" element={<Start/>}/>
          <Route path='/gavlans-game/play' element={<Play/>}/>
          <Route path='/gavlans-game/results' element={<Results/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
