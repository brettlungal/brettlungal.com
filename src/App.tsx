import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Paper} from '@mui/material'
import Home from './pages/Home';
import NavBar from './components/NavBar'
import CssBaseline from '@mui/material/CssBaseline';




function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  const appTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark': 'light'
    },
  });

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Paper elevation={0} sx={{height:'100vh'}} square>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Home />
      </Paper>
    </ThemeProvider>

  )
}

export default App
