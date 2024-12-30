import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeToggle, {ThemeToggleProps} from './ThemeToggle'
import {pages} from '../utils/constants'
import {useTheme} from '@mui/material/styles'


const NavBar: React.FC<any> = ({darkMode, setDarkMode}: ThemeToggleProps) => {
    const theme = useTheme();
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
