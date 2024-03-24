import axios from 'axios'

const api = (page) => {
  return axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '14b326ae076d5535211329ed0f53c50d',
      language: 'pt-BR',
      page: page || 1,
    },
  })
}

export default api
