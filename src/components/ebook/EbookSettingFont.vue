<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 0">
      <div class="setting-font-size">
        <div class="preview" :style="{fontSize: fontSize[0].fontSize + 'px'}">A</div>
        <div class="select">
          <div class="select-wrapper" @click="setFontSize(item.fontSize)" v-for="(item, index) in fontSize" :key="index">
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point" v-show=" defaultFontSize === item.fontSize ">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="preview" :style="{fontSize: fontSize[fontSize.length - 1].fontSize + 'px'}">A</div>
      </div>
      <div class="setting-font-family" @click="showFontFamily">
        <div class="setting-font-family-text-wrapper">
          <div class="setting-font-family-text">{{defaultFontFamily}}</div>
        </div>

        <div class="setting-font-family-icon-wrapper">
          <span class="icon-forward icon"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { FONT_SIZE_LIST } from '../../utils/book'
  import { ebookMixin } from '../../../../vue-imooc-ebook/src/utils/mixin'
  import { saveFontSize } from '../../utils/localStorage'

  export default {
    name: 'EbookSettingFont',
    data() {
      return {
        fontSize: FONT_SIZE_LIST
      }
    },
    mixins: [ebookMixin],
    methods: {
      setFontSize(fontSize) {
        this.setDefaultFontSize(fontSize)
        saveFontSize(this.kindName, this.fileName, fontSize)
        this.currentBook.rendition.themes.fontSize(fontSize)
      },
      showFontFamily() {
        this.setFontFamilyVisible(true)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/styles/global';
  .setting-wrapper {
    position: absolute;
    bottom: px2rem(48);
    left: 0;
    width: 100%;
    height: px2rem(90);
    z-index: 99;
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    .setting-font-size{
      flex: 2;
      height: 100%;
      display: flex;
      .preview {
        flex: 0 0 px2rem(40);
        @include center;
      }
      .select {
        flex: 1;
        display: flex;
        .select-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          &:first-child {
            .line {
              &:first-child {
                border-top: none;
              }
            }
          }
          &:last-child {
            .line {
              &:last-child {
                border-top: none;
              }
            }
          }
          .line {
            flex: 1;
            height: 0;
            border-top: px2rem(1) solid #ccc;
          }
          .point-wrapper {
            flex: 0 0 0;
            width: 0;
            position: relative;
            height: px2rem(7);
            border-left: px2rem(1) solid #ccc;
            .point {
              position: absolute;
              top: px2rem(-8);
              left: px2rem(-10);
              width: px2rem(20);
              height: px2rem(20);
              border-radius: 50%;
              background: white;
              border: px2rem(1) solid #ccc;
              box-shadow: 0 px2rem(4) px2rem(4) rgba(0,0,0,0.15);
              @include center;
              .small-point {
                width: px2rem(5);
                height: px2rem(5);
                background: black;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
    .setting-font-family {
      flex: 1;
      font-size: px2rem(14);
      @include center;
      .setting-font-family-text-wrapper {
        @include center;
        .setting-font-family-text {

        }
      }
      .setting-font-family-icon-wrapper {
        @include center;
        .icon-forward {
          font-size: px2rem(14);
        }
      }
    }
  }
</style>
