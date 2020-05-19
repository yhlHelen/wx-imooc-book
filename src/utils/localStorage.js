import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function setLocalStorage(key, val) {
  return localStorage.set(key, val)
}

export function getLocalStorage(key) {
  return localStorage.get(key)
}

export function removeLocalStorage(key) {
  return localStorage.delete(key)
}

export function clearLocalStorage(key) {
  return localStorage.clear()
}

export function getLocale() {
  return getLocalStorage('locale')
}

export function saveLocale(locale) {
  return setLocalStorage('locale', locale)
}

export function setBookObject(kindName, fileName, key, value) {
  let book = getLocalStorage(`${kindName}/${fileName}-info`)
  if (!book) {
    book = {}
  }
  book[key] = value
  setLocalStorage(`${kindName}/${fileName}-info`, book)
}

export function getBookObject(kindName, fileName, key) {
  const book = getLocalStorage(`${kindName}/${fileName}-info`)
  if (book) {
    return book[key]
  } else {
    return null
  }
}

export function getFontFamily(kindName, fileName) {
  return getBookObject(kindName, fileName, 'fontFamily')
}

export function saveFontFamily(kindName, fileName, font) {
  return setBookObject(kindName, fileName, 'fontFamily', font)
}

export function getFontSize(kindName, fileName) {
  return getBookObject(kindName, kindName, 'fontSize')
}

export function saveFontSize(kindName, fileName, font) {
  return setBookObject(kindName, fileName, 'fontSize', font)
}

//主题
export function getTheme(kindName, fileName) {
  return getBookObject(kindName, kindName, 'theme')
}

export function saveTheme(kindName, fileName, theme) {
  return setBookObject(kindName, kindName, 'theme', theme)
}
