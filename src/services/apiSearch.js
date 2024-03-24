import axios from 'axios'

const apiSearch = () => {
  return axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '14b326ae076d5535211329ed0f53c50d',
    },
  })
}

export default apiSearch
