import { constructQueryWithParams, get } from 'app/api/api';

export const API_KEY = '328c283cd27bd1877d9080ccb1604c91';
export const API_URL = 'https://api.themoviedb.org/3';
export const BASE_URL_IMAGES_LOW = 'https://image.tmdb.org/t/p/w185';
export const BASE_URL_IMAGES_HIGH = 'https://image.tmdb.org/t/p/w500';

export const fetchMovieListAPI = async (page: number) => {
  const url = `${API_URL}/discover/movie?${constructQueryWithParams({
    page,
    api_key: API_KEY,
    sort_by: 'release_date.desc',
    primary_release_date: '2018-10-10',
  })}`;
  return get(url);
};

export const fetchMovieDetailAPI = async (movieId: number) => {
  const url = `${API_URL}/movie/${movieId}?${constructQueryWithParams({
    api_key: API_KEY,
  })}`;
  return get(url);
};
