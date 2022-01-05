import axios from 'axios'
import store from '../store'

export default {
  install: (app) => {
    const axiosConfig = axios.create({
      baseURL: process.env.VUE_APP_API_URL + '/api/',
    })

    app.config.globalProperties.$axios = axiosConfig
    store.$axios = axiosConfig
  },
}
