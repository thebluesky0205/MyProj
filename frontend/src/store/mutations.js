import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO,
  SET_MY_NAME,
  MV_PAGE,
  INIT,
  GET_STORAGE_DATA,
  READ_STORAGE_DATA
} from './mutation-types'

import axios from 'axios'
import cookies from 'vue-cookies'

export default {
  [READ_STORAGE_DATA] (state, data) {
    state.readData = data
  },
  [GET_STORAGE_DATA] (state, data) {
    state.storageData = data
  },
  [INIT] (state) {
    state.drama = ''
    state.movie = ''
    state.book = ''
  },
  [MV_PAGE] (state, page) {
    if (page) {
      state.pageState = page
    }
  },
  [SET_ACCESS_TOKEN] (state, accessToken) {
    if (accessToken) {
      state.accessToken = accessToken

      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      console.log('axios Auth: ' + axios.defaults.headers.common.Authorization)

      cookies.set('accessToken', accessToken, '1h')
    }
  },
  [SET_MY_INFO] (state, myinfo) {
    if (myinfo) {
      state.myinfo = myinfo
    }
  },
  [SET_MY_NAME] (state, myname) {
    if (myname) {
      state.myname = myname
    }
  },
  [DESTROY_ACCESS_TOKEN] (state) {
    state.accessToken = ''
    delete axios.defaults.headers.common.Authorization
    cookies.remove('accessToken')
  },
  [DESTROY_MY_INFO] (state) {
    state.myinfo = null
    state.pageState = 'first'
  }
}
