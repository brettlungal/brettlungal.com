import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import ThemeToggle, {ThemeToggleProps} from './ThemeToggle'


const NavBar: React.FC<any> = ({darkMode, setDarkMode}: ThemeToggleProps) => {
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
          {['Home', 'Portfolio', 'Contact'].map((item) => (
            <Typography color='primary' sx={{marginRight: '2%'}}>
                {item}
            </Typography>
          ))}
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
