import { mapGetters, mapActions } from 'vuex'

const ebookMixin = {
  computed: {
    ...mapGetters([
      'kindName',
      'fileName',
      'menuVisible'
    ])
  },
  methods: {
    ...mapActions([
      'setKindName',
      'setFileName',
      'setMenuVisible'
    ]),
  }
}

export default ebookMixin
