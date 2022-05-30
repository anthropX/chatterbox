import MutationTypes from './MutationTypes'

export const state = () => ({
  name: '',
  // socket: null,
  messages: [],
})

export const getters = {
  name(state) {
    return state.name
  },
  socket(state) {
    return state.name
  },
}

export const mutations = {
  [MutationTypes.SET_NAME](state, name) {
    state.name = name
  },
  // [MutationTypes.SET_SOCKET](state, socket) {
  //   state.socket = socket
  // },
  [MutationTypes.PUSH_MESSAGE](state, message) {
    state.messages.push(message)
  },
}

export const actions = {
  setName({ commit }, name) {
    commit(MutationTypes.SET_NAME, name)
  },
  // setSocket({ commit }, socket) {
  //   commit(MutationTypes.SET_SOCKET, socket)
  // },
  pushMessage({ commit }, message) {
    commit(MutationTypes.PUSH_MESSAGE, message)
  },
}
