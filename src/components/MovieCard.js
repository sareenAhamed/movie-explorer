import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useFavorites } from '../context/FavoritesContext';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ height: '100%', cursor: 'pointer', position: 'relative' }}>
        <CardMedia
          component="img"
          height="350"
          image={posterUrl}
          alt={movie.title}
        />

        <IconButton
          onClick={(e) => {
            e.preventDefault(); 
            toggleFavorite(movie);
          }}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: 'rgba(255,255,255,0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,1)',
            },
          }}
        >
          {isFavorite(movie.id) ? (
            <Favorite color="error" />
          ) : (
            <FavoriteBorder />
          )}
        </IconButton>

        <CardContent>
          <Typography variant="h6" color="text.primary">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: ⭐ {movie.vote_average.toFixed(1)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release: {movie.release_date}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
