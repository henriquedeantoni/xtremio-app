import api from './api'
import apiSearch from './apiSearch'

export async function getMovies() {
  const {
    data: { results },
  } = await api(1).get('/movie/popular')

  return results[9]
}

export async function getTopMovies() {
  const {
    data: { results },
  } = await api(18).get('/movie/top_rated')

  return results
}

export async function getTopSeries() {
  const {
    data: { results },
  } = await api(1).get('/tv/top_rated')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results },
  } = await api(1).get('/tv/popular')

  return results
}

export async function getTopPeople() {
  const {
    data: { results },
  } = await api(1).get('/person/popular')

  return results
}

export async function getMovieVideos(movieId) {
  const {
    data: { results },
  } = await api(1).get(`/movie/${movieId}/videos`)

  return results
}

export async function getMovieCredits(movieId) {
  const {
    data: { cast },
  } = await api(1).get(`/movie/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results },
  } = await api(1).get(`/movie/${movieId}/similar`)

  return results
}

export async function getMovieById(movieId) {
  const { data } = await api(1).get(`/movie/${movieId}`)

  return data
}

export async function getSearchByKeyowrd(page, keyword) {
  const {
    data: { results },
  } = await api(page).get(`/search/multi?query=${keyword}&include_adult=true`)

  return results
} //    `/search/multi?query=${keyword}&include_adult=true&language=pt-BR&page=${page}`,

export async function getMovieGenres() {
  const {
    data: { genres },
  } = await api(1).get(`/genre/movie/list?language=pt-BR`)

  return genres
}

export async function getSeriesGenres() {
  const {
    data: { genres },
  } = await api(1).get(`/genre/tv/list?language=pt-BR`)

  return genres
}

export async function getMovieByGenre(page, genreId) {
  const {
    data: { results },
  } = await apiSearch().get(
    `/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`,
  )

  return results
}

export async function getMostWatched(page) {
  const {
    data: { results },
  } = await apiSearch().get(`/movie/top_rated?language=pt-BR&=${page}`)

  return results
}

export async function getUpComing(page) {
  const {
    data: { results },
  } = await apiSearch().get(`/movie/upcoming?language=pt-BR&=${page}`)

  return results
}

export async function getMostPopular(page) {
  const {
    data: { results },
  } = await apiSearch().get(`/movie/popular?language=pt-BR&=${page}`)

  return results
}

export async function getNowPlaying(page) {
  const {
    data: { results },
  } = await apiSearch().get(`/movie/now_playing?language=pt-BR&=${page}`)

  return results
}

export async function getMovieSearch(page, searchWord) {
  const {
    data: { results },
  } = await apiSearch().get(
    `/search/movie?query=${searchWord}&include_adult=false&language=en-US&page=${page}`,
  )

  return results
}

export async function getSerieByGenre(page, genreId) {
  const {
    data: { results },
  } = await apiSearch().get(
    `/discover/tv?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`,
  )

  return results
}

export async function getSeriesAirToday(page) {
  const {
    data: { results },
  } = await apiSearch().get(`tv/airing_today?language=pt-BR&page=${page}`)

  return results
}

export async function getSeriesOnTheAir(page) {
  const {
    data: { results },
  } = await apiSearch().get(`tv/on_the_air?language=pt-BR&page=${page}`)

  return results
}

export async function getSeriesMostPopular(page) {
  const {
    data: { results },
  } = await apiSearch().get(`tv/popular?language=pt-BR&page=${page}`)

  return results
}

export async function getSeriesTopRated(page) {
  const {
    data: { results },
  } = await apiSearch().get(`top_rated?language=pt-BR&page=${page}`)

  return results
}

export async function getSerieSearch(page, searchWord) {
  const {
    data: { results },
  } = await apiSearch().get(
    `/search/tv?query=${searchWord}&include_adult=false&language=en-US&page=${page}`,
  )

  return results
}
