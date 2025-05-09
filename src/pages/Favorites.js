import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import MovieCard from '../components/MovieCard';
import { Typography, Grid, Container } from '@mui/material';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Favorite Movies
      </Typography>
      {favorites.length === 0 ? (
        <Typography>No favorites yet!</Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Favorites;
