import Axios from 'axios'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-fromurlencodeed'
export const AXIOS = Axios.create({
  baseURL: 'http://111.230.63.192:8081/api'
})

export const CORS = 'http://111.230.63.192:3000/musicwebsite?base='
