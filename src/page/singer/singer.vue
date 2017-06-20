<template>
  <div id="singer">
    <div class="singer-header" :style="{backgroundImage:getSingerImg(singerSong.artist.picUrl)}">
      <h1>{{singerSong.artist.name}}
        <i class="iconfont icon-left" @click="goBack"></i>
      </h1>
    </div>
    <tab :line-width="2" bar-active-color="#f33" active-color='#f33' class="searchList-type">
      <tab-item selected @on-item-click="switchType">热门</tab-item>
      <tab-item @on-item-click="switchType">专辑</tab-item>
    </tab>
    <div class="songList" v-if="tabIndex ==0">
      <ul>
        <router-link v-for="(item,i) in singerSong.hotSongs" :key="i" tag="li" :to="{name:'songDetails',params:{id:item.id}}">
          <i>{{i+1}}</i>
          <span class="halfBorder">
            <p>{{item.name}}</p>
            <s>{{item.ar[0].name}}</s>
          </span>
        </router-link>
      </ul>
    </div>
    <div class="hotAlbums" v-else>
      <ul>
        <router-link v-for="(item,i) in singerAlbums.hotAlbums" :key="i" tag="li" :to="{name:'albumsListDetails',params:{id:item.id}}">
          <div><img v-lazy="item.picUrl"></div>
          <span class="halfBorder">
            <p>{{item.name}}</p>
            <span>{{item.artists[0].name}} {{item.size}}首</span>
          </span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import {
    Tab,
    TabItem
  } from 'vux';
  export default {
    name: 'singer',
    components: {
      Tab,
      TabItem
    },
    data() {
      return {
        tabIndex: 0
      }
    },
    created() {
      this.$store.dispatch('get_singerSong', this.$route.params.id);
    },
    computed: {
      //歌手单曲
      singerSong() {
        return this.$store.state.singerSong;
      },
      //歌手专辑
      singerAlbums() {
        return this.$store.state.Singeralbums;
      }
    },
    methods: {
      //获取歌手头像
      getSingerImg(val) {
        if (val != '') {
          return "url(" + val + ")";
        }
      },
      //切换热门//专辑
      switchType(index) {
        this.tabIndex = index;
        if (index == 0) {
          this.$store.dispatch('get_singerSong', this.$route.params.id);
        } else {
          this.$store.dispatch('get_singerAlbums', this.$route.params.id);
        }
      },
      goBack() {
        this.$router.go(-1);
      }
    }
  }

</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #singer {
    .singer-header {
      .mx_wh(100%, 2.2rem);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      h1 {
        .mx_whlh(100%, .45rem, .45rem);
        .mx_fc(.16rem, #fff);
        text-align: center;
        font-weight: normal;
        position: relative;
        i {
          .mx_postl(0, 5%);
          .mx_fc(.22rem, #fff);
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
    .hotAlbums {
      .mx_wh(100%, auto);
      li {
        .mx_whlh(100%, .5rem, .5rem);
        .mx_flex;
        div {
          .mx_flex_item(1 0 15%);
          .mx_brbox;
          padding: .02rem .04rem;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        span {
          padding: .02rem 0;
          .mx_flex_item(1 0 85%);
          .mx_fc(.14rem, #333);
        }
      }
      span.halfBorder {
        p,
        span {
          .mx_whlh(100%, 50%, .25rem);
          .mx_single_ellipsis;
        }
        p {
          .mx_fc(.14rem, #333);
        }
        span {
          display: block;
          .mx_fc(.12rem, #666);
        }
      }
    }
  }

</style>
