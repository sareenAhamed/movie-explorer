import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ height: '100%', cursor: 'pointer' }}>
        <CardMedia
          component="img"
          height="350"
          image={posterUrl}
          alt={movie.title}
        />
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
