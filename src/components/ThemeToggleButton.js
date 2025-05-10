import React from 'react';
import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useThemeToggle } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { toggleTheme, mode } = useThemeToggle();

  return (
    // Toggle between light and dark mode
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default ThemeToggleButton;
