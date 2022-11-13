import Main from '../src/components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/" element={<Main/>}/>
          <Route path="/start" element={<Start/>}/>
          <Route path='/play' element={<Play/>}/>
          <Route path='/results' element={<Results/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
