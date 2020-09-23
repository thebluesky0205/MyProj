import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  /* eslint-disable no-unused-vars */
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO,
  SET_MY_NAME,
  MV_PAGE
} from './mutation-types'

import axios from 'axios'

export default {
  modifyReview ({ commit }, payload) {
    axios.post('http://localhost:7777/modify', payload)
      .then(({ data }) => {
        alert('메모가 수정되었습니다.')
        console.log('res: ' + data)
        commit('READ_STORAGE_DATA', data)
      })
  },
  deleteReview ({ commit }, payload) {
    const { storageSeq, userNo } = payload
    axios.post('http://localhost:7777/delete', { storageSeq: storageSeq, userNo: userNo })
      .then(({ data }) => {
        console.log('deleteReview(): ' + data)
        alert('메모가 삭제되었습니다.')
        commit('GET_STORAGE_DATA', data)
      })
  },
  searchReview ({ commit }, payload) {
    const { userNo, searchMessage } = payload
    console.log('searchReview(): ' + userNo + searchMessage)
    axios.post('http://localhost:7777/storage/search', { userNo: userNo, searchMessage: searchMessage })
      .then(({ data }) => {
        console.log('searchReview(): ' + data)
        commit('GET_STORAGE_DATA', data)
      })
  },
  readStorageData ({ commit }, storageSeq) {
    console.log('startReadStorageData(): ' + storageSeq)
    axios.get('http://localhost:7777/storage/' + `${storageSeq}`)
      .then(({ data }) => {
        commit('READ_STORAGE_DATA', data)
      })
  },
  getStorageData ({ commit }, userNo) {
    axios.get('http://localhost:7777/storageUserNo/' + `${userNo}`)
      .then(({ data }) => {
        console.log('getStorageData(): ' + data)
        commit('GET_STORAGE_DATA', data)
      })
  },
  storageRegister ({ commit }, payload) {
    console.log('payload: ' + payload.title + ' ' + payload.contents + ' ' + payload.type + ' ' + payload.review + ' ' + payload.userNo)
    const { title, contents, type, image, review, userNo } = payload
    axios.post('http://localhost:7777/storage', { title, contents, type, image, review, userNo })
      .then(commit('INIT'))
  },
  init ({ commit }) {
    commit('INIT')
  },
  mvPage ({ commit }, payload) {
    console.log('mvPage()' + payload)
    commit(MV_PAGE, payload)
  },
  login ({ commit }, payload) {
    console.log('Actions login()')
    return axios.post('http://localhost:7777/api/authenticate?' +
    `username=${payload.userid}&password=${payload.password}`, {
      username: payload.userid,
      password: payload.password
    }).then(res => {
      console.log('Actions after post')
      const { authorization } = res.headers
      const accessToken = authorization.substring(7)

      commit(SET_ACCESS_TOKEN, accessToken)

      return axios.get('http://localhost:7777/users/myinfo')
    }).then(res => {
      console.log('After Get Auth Info')
      commit(SET_MY_INFO, res.data)

      return axios.get('http://localhost:7777/users/getname')
    }).then(res => {
      console.log('After Get Name Info')
      commit(SET_MY_NAME, res.data)
    })
  },
  loginByToken ({ commit }, token) {
    commit(SET_ACCESS_TOKEN, token)
    return axios.get('http://localhost:7777/users/myinfo')
      .then(res => {
        commit(SET_MY_INFO, res.data)

        return axios.get('http://localhost:7777/users/getname')
      }).then(res => {
        console.log('After Get Name Info')
        commit(SET_MY_NAME, res.data)
      })
  },
  logout ({ commit }) {
    commit(DESTROY_MY_INFO)
    commit(DESTROY_ACCESS_TOKEN)
  }
}
