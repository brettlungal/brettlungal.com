import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material'
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import CssBaseline from '@mui/material/CssBaseline';
import { primary, secondary, lightBackground, darkBackground } from './utils/constants'

import { Route } from 'wouter';




function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  const appTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: primary,
      secondary: secondary,
      divider: darkMode ? "#fff" : "#121212"
    },
  });

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            background: darkMode ? darkBackground : lightBackground,
            backgroundSize: 'cover', // Adjust as needed
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          },
        }}
      />
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Route path="/"><Home /></Route>
          <Route path="/About"><About /></Route>
          <Route path="/Portfolio"><Portfolio /></Route>
          <Route path="/Contact"><Contact /></Route>
      </ThemeProvider>
    </>
  )
}

export default App
