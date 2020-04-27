const book = {
  state: {
    kindName: '',
    fileName: '',
    menuVisible: false,
    defaultFontSize: 16,
    settingVisible: -1,
    currentBook: null,
    defaultFontFamily: 'Default',
    fontFamilyVisible: false
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
    },
    'SET_DEFAULT_FONT_SIZE': (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    },
    'SET_SETTING_VISIBLE': (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    'SET_CURRENT_BOOK': (state, currentBook) => {
      state.currentBook = currentBook
    },
    'SET_DEFAULT_FONT_FAMILY': (state, defaultFontFamily) => {
      state.defaultFontFamily = defaultFontFamily
    },
    'SET_FONT_FAMILY_VISIBLE': (state, fontFamilyVisible) => {
      state.fontFamilyVisible = fontFamilyVisible
    }
  }
}

export default book
