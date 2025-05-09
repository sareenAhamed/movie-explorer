import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useThemeToggle } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { toggleTheme, mode } = useThemeToggle();
  const theme = useTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default ThemeToggleButton;
