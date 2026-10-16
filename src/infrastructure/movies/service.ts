import { httpClient } from "../api/http"

export const getMovies = () => httpClient.get('/movie/popular');

export const getMovieById = (id: string) => httpClient.get(`/movie/${id}`)