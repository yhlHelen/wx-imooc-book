<template>
  <transition name="slide-up">
    <div class="ebook-popup-list" v-show="fontFamilyVisible">
      <div class="ebook-popup-title">
        <div class="ebook-popup-title-icon" @click="hide">
          <span class="icon-down2 icon"></span>
        </div>
        <div class="ebook-popup-title-text">选择字体</div>
      </div>
      <div class="ebook-popup-list-wrapper">
        <div class="ebook-popup-item" @click="setFontFamily(item.font)" v-for="(item, index) in fontFamily" :key="index">
          <div class="ebook-popup-item-text" :class="{'selected': isSelected(item.font)}">{{item.font}}</div>
          <div class="ebook-popup-item-check" v-show="isSelected(item.font)">
            <span class="icon-check icon"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {ebookMixin} from '../../../../vue-imooc-ebook/src/utils/mixin'
  import { FONT_FAMILY } from '../../utils/book'

  export default {
    name: 'EbookSettingFontPopup',
    mixins: [ebookMixin],
    data() {
      return {
        fontFamily: FONT_FAMILY
      }
    },
    methods: {
      setFontFamily(font) {
        this.setDefaultFontFamily(font)
        if (this.defaultFontFamily === 'Default') {
          this.currentBook.rendition.themes.font('Times New Roman')
        } else {
          this.currentBook.rendition.themes.font(font)
        }
      },
      isSelected(font) {
        return this.defaultFontFamily === font
      },
      hide() {
        this.setFontFamilyVisible(false)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/styles/global';
  .ebook-popup-list {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 300;
    width: 100%;
    background: white;
    box-shadow: 0 px2rem(-4) px2rem(6) rgba(0,0,0,0.1);
    .ebook-popup-title{
      padding: px2rem(15);
      box-sizing: border-box;
      text-align: center;
      @include center;
      position: relative;
      border-bottom: px2rem(1) solid #b8b9bb;
      .ebook-popup-title-icon{
        position: absolute;
        left: px2rem(15);
        top: 0;
        height: 100%;
        @include center;
        font-size: px2rem(16);
        font-weight: bold;
        .icon-down2{

        }
      }
      .ebook-popup-title-text{
        font-size: px2rem(14);
        font-weight: bold;
      }
    }
    .ebook-popup-list-wrapper{
      .ebook-popup-item{
        display: flex;
        padding: px2rem(15);
        .ebook-popup-item-text{
          flex: 1;
          font-size: px2rem(14);
          text-align: left;
          &.selected{
            color: #346cb9;
            font-weight: bold;
          }
        }
        .ebook-popup-item-check{
          flex: 1;
          font-size: px2rem(14);
          text-align: right;
          font-weight: bold;
          color: #346cb9;
        }
      }
    }
  }
</style>
