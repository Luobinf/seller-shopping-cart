import axios from 'axios'

const ERRNO = 0

const state = {
  goodList: []
}

const mutations = {
  getGoodList(state,data) {
    state.goodList = data
  }
}

const actions = {
  //这里可以进行异步操作
  getAllGoodList(context) {
    axios.get('/api/goods').then((response) => {
      let { data,errno } = response.data
      if(errno === ERRNO) {
        context.commit('getGoodList',data)
      } else {
        throw new Error('发生错误')
      }
    }).catch((error) => {
      alert(error)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


