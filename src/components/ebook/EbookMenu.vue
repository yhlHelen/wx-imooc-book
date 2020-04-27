<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper" :class="{'hide-box-shadow': !menuVisible || settingVisible > -1}" v-show="menuVisible">
        <div class="icon-wrapper">
          <span class="icon-menu icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright icon"></span>
        </div>
        <div class="icon-wrapper" @click="showSetting(0)">
          <span class="icon-a icon">A</span>
        </div>
      </div>
    </transition>
    <ebook-setting-font></ebook-setting-font>
    <ebook-setting-font-popup></ebook-setting-font-popup>
  </div>
</template>

<script>
  import { ebookMixin } from '../../../../vue-imooc-ebook/src/utils/mixin'
  import EbookSettingFont from './EbookSettingFont'
  import EbookSettingFontPopup from './EbookSettingFontPopup'

  export default {
    name: 'EbookMenu',
    mixins: [ebookMixin],
    methods: {
      showSetting(index) {
        this.setSettingVisible(index)
      }
    },
    components: {
      EbookSettingFont,
      EbookSettingFontPopup
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/styles/global';
  .menu-bar {
    .menu-wrapper {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: px2rem(48);
      z-index: 100;
      background-color: white;
      display: flex;
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,0.15);
      &.hide-box-shadow{
        box-shadow: none;
      }
      .icon-wrapper {
        flex: 1;
        @include center;
      }
    }
  }
</style>
