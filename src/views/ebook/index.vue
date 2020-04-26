<template>
  <div class="ebook">
<!--    <ebook-title></ebook-title>-->
    <ebook-reader></ebook-reader>
  </div>
</template>

<script>
  // import EbookTitle from '../../components/ebook/EbookTitle'
  import EbookReader from '../../components/ebook/EbookReader'
  export default {
    name: 'index',
    components: {
      // EbookTitle,
      EbookReader
    }
  }
</script>

<style scoped>

</style>
