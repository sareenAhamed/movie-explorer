import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies, searchMovies } from '../services/TMDb';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { Grid, Typography, Container } from '@mui/material';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      const trending = await fetchTrendingMovies();
      setMovies(trending);
    };
    getMovies();
  }, []);

  const handleSearch = async (query) => {
    setSearching(true);
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {searching ? 'Search Results' : 'Trending Movies'}
      </Typography>

      <SearchBar onSearch={handleSearch} />

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
