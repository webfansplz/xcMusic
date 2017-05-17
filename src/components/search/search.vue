<template>
  <div id="search">
    <i class="iconfont icon-micro"></i>
    <div class="search-box">
      <label class="iconfont icon-glass" for="searchBox">
          <span>搜索音乐,歌词,电台</span>
      </label>
      <input type="text" id="searchBox">
    </div>
    <i class="iconfont icon-music"></i>
  </div>
</template>
<script>
  export default {
    name: 'search',

  }

</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #search {
    position: relative;
    .mx_whlh(100%, 48px, 48px);
    .backgroundRed;
    text-align: center;
    .icon-micro {
      .mx_fc(22px, #fff);
      .mx_postl(0, 5%);
    }
    .icon-music {
      .mx_fc(22px, #fff);
      .mx_postl(3px, 90%);
    }
    .search-box {
      position: relative;
      display: inline-block;
      width: 70%;
      label {
        color: #dedede;
        .mx_hlh(32px, 34px);
        .mx_fc(14px, #dedede);
        .mx_postl(8px, 22%);
        span {
          font-size: 13px;
        }
      }
      label:before {
        margin-right: 5px;
      }
      input {
        .mx_whlh(100%, 32px, 24px);
        .mx_bdrs(20px);
        text-indent: 5%;
      }
    }
  }

</style>
