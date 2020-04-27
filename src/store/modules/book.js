const book = {
  state: {
    kindName: '',
    fileName: '',
    menuVisible: false
  },
  mutations: {
    'SET_KINDNAME': (state, kindName) => {
      state.kindName = kindName
    },
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_MENU_VISIBLE': (state, menuVisible) => {
      state.menuVisible = menuVisible
    }
  }
}

export default book
