const actions = {
  setKindName: ({ commit }, kindName) => {
    return commit('SET_KINDNAME', kindName)
  },
    setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)
  }
}

export default actions
