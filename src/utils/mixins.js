import { mapGetters, mapActions } from 'vuex'

const ebookMixin = {
  computed: {
    ...mapGetters([
      'kindName',
      'fileName',
      'menuVisible',
      'defaultFontSize',
      'settingVisible',
      'currentBook'
    ])
  },
  methods: {
    ...mapActions([
      'setKindName',
      'setFileName',
      'setMenuVisible',
      'setDefaultFontSize',
      'setSettingVisible',
      'setCurrentBook'
    ]),
  }
}

export default ebookMixin
