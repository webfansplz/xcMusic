<template>
  <div id="albumsListDetails">
    <div class="header">
      <div class="header-title">
        <i class="iconfont icon-left" @click="goBack"></i> 专辑
        <i class="iconfont icon-music"></i>
      </div>
      <div class="header-contxt">
        <div class="header-contxt-l">
          <img v-lazy="albums.album.picUrl">
          <i class="iconfont icon-mxclt"></i>
        </div>
        <div class="header-contxt-r">
          <p>{{albums.album.name}}</p>
          <div>
            <span>歌手 : <i>{{albums.album.artist.name}}</i></span>
            <i class="iconfont icon-right"></i>
          </div>
        </div>
      </div>
      <div class="header-footer">
        <span>
            <i class="icon-noCollect iconfont"></i>
            <p>{{albums.album.info.likedCount}}</p>
        </span>
        <span>
            <i class="iconfont icon-comments"></i>
            <p>{{albums.album.info.commentCount}}</p>
        </span>
        <span>
            <i class="iconfont icon-forwarding"></i>
            <p>{{albums.album.info.shareCount}}</p>
        </span>
      </div>
    </div>
    <div class="songList">
      <ul>
        <router-link v-for="(item,i) in albums.songs" :key="i" tag="li" :to="{name:'songDetails',params:{id:item.id}}">
          <i>{{i+1}}</i>
          <span class="halfBorder">
            <p>{{item.name}}</p>
            <s>{{item.ar[0].name}}</s>
          </span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'songListDetails',
    components: {},
    created() {
      this.$store.dispatch('get_albums', this.$route.params.id);
    },
    computed: {
      albums() {
        return this.$store.state.albums;
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }

</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #albumsListDetails {
    .header {
      .mx_wh(100%, auto);
      background: linear-gradient(left, #dcdcdc, #666);
    }
    .header-title {
      position: relative;
      .mx_whlh(100%, .45rem, .45rem);
      .mx_fc(.16rem, #fff);
      text-align: center;
      .icon-left {
        .mx_fc(.22rem, #fff);
        .mx_postl(0, 5%);
      }
      .icon-music {
        .mx_fc(.22rem, #fff);
        .mx_postr(0, 5%);
      }
    }
    .header-contxt {
      padding: .1rem 5% 0;
      width: 90%;
      font-size: 0;
    }
    .header-contxt-l {
      position: relative;
      display: inline-block;
      vertical-align: top;
      width: 40%;
      img {
        display: block;
        width: 90%;
      }
      .icon-headset {
        .mx_postr(.05rem, 13%);
        .mx_fc(.12rem, #fff);
      }
      .icon-mxclt {
        .mx_posbr(.05rem, 13%);
        .mx_fc(.16rem, #fff);
      }
    }
    .header-contxt-r {
      display: inline-block;
      vertical-align: top;
      width: 60%;
      div {
        .mx_whlh(100%, auto, 1);
        .mx_fc(.12rem, #fff);
        align-items: center;
        display: flex;
        margin-top: .1rem;
      }
      p {
        .mx_fc(.16rem, #fff);
        padding: 5% 0;
      }
      img {
        .mx_bdrs(50%);
        width: 15%;
      }
      span {
        // padding: 0 .05rem;
        .mx_fc(.12rem, #ccc);
        i {
          .mx_fc(.12rem, #fff);
        }
      }
      .icon-right {
        .mx_fc(.14rem, #ccc);
      }
    }
    .header-footer {
      font-size: 0;
      text-align: center;
      padding: .1rem 5% .05rem;
      .mx_flex;
      span {
        .mx_flex_item(1);
        i {
          .mx_fc(.2rem, #fff);
        }
        p {
          padding-top: .07rem;
          .mx_fc(.12rem, #fff);
        }
      }
    }
    .songList {
      ul {
        li {
          .mx_whlh(100%, .4rem, .4rem);
          padding: .05rem 0;
          font-size: 0;
          i {
            display: inline-block;
            vertical-align: top;
            .mx_fc(.12rem, #666);
            .mx_whlh(15%, .4rem, .4rem);
            text-align: center;
          }
          span {
            display: inline-block;
            vertical-align: top;
            .mx_whlh(85%, .4rem, .4rem);
            text-align: left;
          }
          p {
            .mx_fc(.14rem, #333);
            .mx_whlh(85%, .2rem, .2rem);
            .mx_single_ellipsis;
          }
          s {
            display: block;
            text-decoration: none;
            .mx_fc(.12rem, #ccc);
            .mx_whlh(85%, .2rem, .2rem);
          }
        }
      }
    }
  }

</style>
