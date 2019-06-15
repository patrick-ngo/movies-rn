export interface Genre {
  id?: number;
  name?: string;
}

export interface MovieList {
  page?: number;
  userId?: number;
  results?: Movie[];
  total_results?: number;
  total_pages?: number;
}

export interface Movie {
  vote_count?: number;
  id?: number;
  vote_average?: number;
  title?: string;
  popularity?: number;
  poster_path?: string;
  original_language?: string;
  original_title?: string;
  genres?: Genre[];
  genre_ids?: number[];
  backdrop_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  runtime?: number;
}
