import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import ThemeToggleButton from './ThemeToggleButton';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      {/* Layout for header content */}
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Logo with link to home */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h5" component="div" fontWeight="bold">
            Sareenflix
          </Typography>
        </Link>

        {/* Link to favorites page */}
        <Button component={Link} to="/favorites" color="inherit">
          Favorites
        </Button>

        {/* Theme toggle button */}
        <Box>
          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
