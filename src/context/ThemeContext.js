import React, { createContext, useMemo, useState, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeToggleContext = createContext();

// Custom hook to access theme toggle functionality
export const useThemeToggle = () => useContext(ThemeToggleContext);

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Create theme based on current mode
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Apply base styles for selected theme */}
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
