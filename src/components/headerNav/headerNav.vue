<template>
  <div id="headerNav">
    <span>个性推荐</span>
    <span>歌单</span>
    <span>主播电台</span>
    <span>排行榜</span>
  </div>
</template>
<script>
  export default {
    name: 'headerNav',
  }
</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #headerNav{
      .mx_flex;
      .mx_hlh(40px,40px);
      .mx_fc(14px,#666);
      span{
          .mx_flex_item(1);
          text-align: center;
      }
  }
</style>
