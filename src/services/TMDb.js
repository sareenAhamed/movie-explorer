import axios from 'axios';

const API_KEY = '2ee3bf845e87c6ddeb65e7a88f523aa7';
const BASE_URL = 'https://api.themoviedb.org/3';
const DISCOVER_MOVIE_URL = `${BASE_URL}/discover/movie`;

// Trending Movies
export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${DISCOVER_MOVIE_URL}?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`);
    console.log((response));

    return response.data.results;

  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

// Search Movies
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

// Movie Details
export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return {};
  }
};


