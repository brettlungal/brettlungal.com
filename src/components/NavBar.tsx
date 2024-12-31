import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeToggle, {ThemeToggleProps} from './ThemeToggle'
import {pages} from '../utils/constants'
import {useTheme} from '@mui/material/styles'

import { useLocation } from 'wouter';


const NavBar: React.FC<any> = ({darkMode, setDarkMode}: ThemeToggleProps) => {
    const theme = useTheme();
    const [, navigate] = useLocation();


    const handleRouting = (event:any) => {
      const route = event.target.innerText.replace(' ','').replace("Home",'/')
      navigate(route)
    }

  return (
    <AppBar
      position="static"
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        padding: '0',
      }}
    >
      <Toolbar sx={{ justifyContent: 'right' }}>
          {pages.map((item) => (
            <Typography
                key={item}
                onClick={handleRouting}
                sx={{
                    marginRight: '2%',
                    cursor: 'pointer',
                    color: 'text.primary',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: theme.palette.primary[theme.palette.mode],
                    },
                }}
                >
                {item}
            </Typography>
          ))}
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
