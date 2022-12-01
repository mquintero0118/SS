import { createStore } from 'vuex'

export default createStore({
  state: {
    username: null,
    password: null,
    id: 0,

  },
  getters: {
    userloged(state) {
      return state
    }
  },
  mutations: {
    setUser(state, user) {
      console.log(state, user)
      state.username = user.username
      state.password = user.password
      state.id = user.id

    },
    logOut(state) {
      state.username = null
      state.password = null
      state.id = 0
    }
  },
  actions: {
    setUser({usr}, user) {
      console.log(usr, user)
    }
  },
  modules: {
  }
})
