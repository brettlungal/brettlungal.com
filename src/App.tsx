import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper, GlobalStyles } from '@mui/material'
import Home from './pages/Home';
import NavBar from './components/NavBar'
import CssBaseline from '@mui/material/CssBaseline';
import { primary, secondary, lightBackground, darkBackground } from './utils/constants'




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
      background:{
        default: darkMode ? darkBackground : lightBackground
      },
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
          <Home />
      </ThemeProvider>
    </>
  )
}

export default App
