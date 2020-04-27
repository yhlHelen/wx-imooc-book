import { mapGetters, mapActions } from 'vuex'

const ebookMixin = {
  computed: {
    ...mapGetters([
      'kindName',
      'fileName',
      'menuVisible',
      'defaultFontSize',
      'settingVisible',
      'currentBook',
      'defaultFontFamily',
      'fontFamilyVisible'
    ])
  },
  methods: {
    ...mapActions([
      'setKindName',
      'setFileName',
      'setMenuVisible',
      'setDefaultFontSize',
      'setSettingVisible',
      'setCurrentBook',
      'setDefaultFontFamily',
      'setFontFamilyVisible'
    ]),
  }
}

export default ebookMixin
