import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';

export interface ThemeToggleProps {
    darkMode: boolean,
    setDarkMode: (isDark: boolean) => void
}

const ThemeToggle: React.FC<any> = ({darkMode, setDarkMode}: ThemeToggleProps) => {

    const handleToggle = () => {
        setDarkMode(!darkMode)
    }
  return (
    <IconButton onClick={handleToggle}>
        {darkMode ? (<LightModeIcon />) : (<DarkModeIcon />)}
    </IconButton>

  );
};

export default ThemeToggle;
