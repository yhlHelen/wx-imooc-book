<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
  import {ebookMixin} from '../../../../vue-imooc-ebook/src/utils/mixin'
  import Epub from 'epubjs'
  global.ePub = Epub
  export default {
    name: 'EbookReader',
    mixins: [ebookMixin],
    methods: {
      prevPage() {
        if (this.rendition) {
          this.rendition.prev()
        }
      },
      nextPage() {
        if (this.rendition) {
          this.rendition.next()
        }
      },
      initEpub() {
        const url = 'http://192.168.15.115:9001/epub/' + this.kindName + '/' + this.fileName + '.epub'
        this.book = new Epub(url)
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight,
          method: 'default'
        })
        this.rendition.display()
        this.rendition.on('touchstart', event => {
          this.touchStartX = event.changedTouches[0].clientX
          this.touchStartTime = event.timeStamp
        })
        this.rendition.on('touchend', event => {
          const offsetX = event.changedTouches[0].clientX - this.touchStartX
          const time = event.timeStamp - this.touchStartTime
          if (time < 500 && offsetX > 40) {
            this.prevPage()
          } else if (time < 500 && offsetX < -40) {
            this.nextPage()
          } else {
            console.log('124')
          }
          event.preventDefault()
          event.stopPropagation()
        })
      }
    },
    mounted() {
      this.setKindName(this.$route.params.kindName)
      this.setFileName(this.$route.params.fileName).then(() => {
        this.initEpub()
      })
    }
  }
</script>

<style scoped>

</style>
