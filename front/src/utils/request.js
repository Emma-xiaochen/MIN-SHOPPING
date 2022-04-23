import axios from 'axios';

const http = axios.create({
  baseURL: 'http://127.0.0.1:8888'
})

http.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default http