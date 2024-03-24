import nullImage from '../assets/null_image.png'

export const getImages = (path) => {
  return !path ? nullImage : `https://image.tmdb.org/t/p/original${path}`
}
