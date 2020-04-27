const getters = {
  kindName: state => state.book.kindName,
  fileName: state => state.book.fileName,
  menuVisible: state => state.book.menuVisible,
  defaultFontSize: state => state.book.defaultFontSize,
  settingVisible: state => state.book.settingVisible,
  currentBook: state => state.book.currentBook,
  defaultFontFamily: state => state.book.defaultFontFamily,
  fontFamilyVisible: state => state.book.fontFamilyVisible
}

export default getters
