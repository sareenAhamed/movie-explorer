import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/TMDb';
import {
  Container,
  Typography,
  Chip,
  Box,
  CircularProgress
} from '@mui/material';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
      setLoading(false);
    };
    getDetails();
  }, [id]);

  if (loading) return <CircularProgress sx={{ display: 'block', m: 'auto' }} />;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{movie.title}</Typography>
      <Box component="img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        sx={{ width: '100%', maxWidth: 400, borderRadius: 2, mb: 2 }}
      />
      <Typography variant="body1" paragraph>{movie.overview}</Typography>
      <Typography variant="subtitle1"><strong>Rating:</strong> {movie.vote_average}</Typography>
      <Typography variant="subtitle1"><strong>Release Date:</strong> {movie.release_date}</Typography>
      <Box mt={2}>
        {movie.genres.map((genre) => (
          <Chip key={genre.id} label={genre.name} sx={{ mr: 1, mb: 1 }} />
        ))}
      </Box>
    </Container>
  );
};

export default MovieDetails;
