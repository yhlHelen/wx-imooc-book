<template>
  <div>
    <transition name="slide-down">
      <div class="title-wrapper" v-show="menuVisible">
        <div class="left">
          <span class="icon-back icon"></span>
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <span class="icon-shelf icon"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-cart icon"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-more icon"></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { ebookMixin } from '../../../../vue-imooc-ebook/src/utils/mixin'

  export default {
    name: 'EbookTitle',
    mixins: [ebookMixin]
  }
</script>

<style scoped lang="scss">
  @import '../../assets/styles/global';
  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    height: px2rem(48);
    background: white;
    z-index: 100;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0,0,0,0.15);
    .left {
      flex: 0 0 px2rem(60);
      @include center;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(40);
        @include center;
      }
    }
  }
</style>
