<template>
  <div class="setting-wrapper">
    <div class="setting-font-size">
      <div class="preview">A</div>
      <div class="select">
        <div class="select-wrapper">
          <div class="line"></div>
          <div class="point-wrapper">
            <div class="point">
              <div class="small-point"></div>
            </div>
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div class="preview">A</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EbookSettingFont'
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
    background: yellow;
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
  }
</style>
