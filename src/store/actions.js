const actions = {
  setKindName: ({ commit }, kindName) => {
    return commit('SET_KINDNAME', kindName)
  },
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)
  },
  setMenuVisible: ({ commit }, menuVisible) => {
    return commit('SET_MENU_VISIBLE', menuVisible)
  },
  setDefaultFontSize: ({ commit }, defaultFontSize) => {
    return commit('SET_DEFAULT_FONT_SIZE', defaultFontSize)
  },
  setSettingVisible: ({ commit }, settingVisible) => {
    return commit('SET_SETTING_VISIBLE', settingVisible)
  },
  setCurrentBook: ({ commit }, currentBook) => {
    return commit('SET_CURRENT_BOOK', currentBook)
  },
  setDefaultFontFamily: ({ commit }, defaultFontFamily) => {
    return commit('SET_DEFAULT_FONT_FAMILY', defaultFontFamily)
  },
  setFontFamilyVisible: ({ commit }, fontFamilyVisible) => {
    return commit('SET_FONT_FAMILY_VISIBLE', fontFamilyVisible)
  }
}

export default actions
