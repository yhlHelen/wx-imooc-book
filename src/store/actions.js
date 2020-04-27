const actions = {
  setKindName: ({ commit }, kindName) => {
    return commit('SET_KINDNAME', kindName)
  },
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)
  },
  setMenuVisible: ({ commit }, menuVisible) => {
    return commit('SET_MENU_VISIBLE', menuVisible)
  }
}

export default actions
