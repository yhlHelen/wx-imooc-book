const book = {
  state: {
    kindName: '',
    fileName: ''
  },
  mutations: {
    'SET_KINDNAME': (state, kindName) => {
      state.kindName = kindName
    },
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    }
  }
}

export default book
