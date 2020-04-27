<template>
  <div class="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
  import EbookTitle from '../../components/ebook/EbookTitle'
  import EbookReader from '../../components/ebook/EbookReader'
  import EbookMenu from '../../components/ebook/EbookMenu'
  export default {
    name: 'index',
    components: {
      EbookTitle,
      EbookReader,
      EbookMenu
    }
  }
</script>

<style scoped>

</style>
