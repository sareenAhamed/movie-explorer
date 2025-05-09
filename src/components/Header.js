import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import ThemeToggleButton from './ThemeToggleButton';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h5" component="div" fontWeight="bold">
            Sareenflix
          </Typography>
        </Link>

        <Button component={Link} to="/favorites" color="inherit">Favorites</Button>

        <Box>
          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
