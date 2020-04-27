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
        this.setMenuVisible(false)
        this.setSettingVisible(-1)
        this.setFontFamilyVisible(false)
      },
      nextPage() {
        if (this.rendition) {
          this.rendition.next()
        }
        this.setMenuVisible(false)
        this.setSettingVisible(-1)
        this.setFontFamilyVisible(false)
      },
      initEpub() {
        const url = 'http://192.168.15.115:9001/epub/' + this.kindName + '/' + this.fileName + '.epub'
        this.book = new Epub(url)
        this.setCurrentBook(this.book)
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
            this.toggleTitleAndMenu()
          }
          event.preventDefault()
          event.stopPropagation()
        })

        this.rendition.hooks.content.register(contents => {
          Promise.all([
            contents.addStylesheet('http://192.168.15.115:9001/fonts/daysOne.css'),
            contents.addStylesheet('http://192.168.15.115:9001/fonts/cabin.css'),
            contents.addStylesheet('http://192.168.15.115:9001/fonts/montserrat.css'),
            contents.addStylesheet('http://192.168.15.115:9001/fonts/tangerine.css')
          ]).then(() => {})
        })
      },
      toggleTitleAndMenu() {
        this.setMenuVisible(!this.menuVisible)
        this.setSettingVisible(-1)
        this.setFontFamilyVisible(false)
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
