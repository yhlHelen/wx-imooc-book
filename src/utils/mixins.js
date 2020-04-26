import { mapGetters, mapActions } from 'vuex'

const ebookMixin = {
  computed: {
    ...mapGetters([
      'kindName',
      'fileName'
    ])
  },
  methods: {
    ...mapActions([
      'setKindName',
      'setFileName'
    ]),
  }
}

export default ebookMixin
