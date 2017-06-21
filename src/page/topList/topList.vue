<template>
  <div id="topList" @touchstart="getOrigin" @touchend="compDistance">
    <headerNav tabIndex="3"></headerNav>
    <div class="cloudMusicTopList">
      <h1 class="list-item-title">
        <b></b> 云音乐官方榜
      </h1>
      <div class="list-item">
        <img v-lazy="cloudMusicNewTopList.coverImgUrl">
        <router-link class="halfBorder" tag="ul" :to="{name:'songListDetails',params:{id:cloudMusicNewTopList.id}}">
          <li v-for="(items,index) in dealTopList(cloudMusicNewTopList.tracks)">
            {{index+1}}.{{items.name}} - {{items.artists[0].name}}
          </li>
        </router-link>
      </div>
      <div class="list-item">
        <img v-lazy="cloudMusicHotTopList.coverImgUrl">
        <router-link class="halfBorder" tag="ul" :to="{name:'songListDetails',params:{id:cloudMusicHotTopList.id}}">
          <li v-for="(items,index) in dealTopList(cloudMusicHotTopList.tracks)">
            {{index+1}}.{{items.name}} - {{items.artists[0].name}}
          </li>
        </router-link>
      </div>
      <div class="list-item">
        <img v-lazy="cloudMusicUpTopList.coverImgUrl">
        <router-link class="halfBorder" tag="ul" :to="{name:'songListDetails',params:{id:cloudMusicUpTopList.id}}">
          <li v-for="(items,index) in dealTopList(cloudMusicUpTopList.tracks)">
            {{index+1}}.{{items.name}} - {{items.artists[0].name}}
          </li>
        </router-link>
      </div>
      <div class="list-item">
        <img v-lazy="cloudMusicEleTopList.coverImgUrl">
        <router-link class="halfBorder" tag="ul" :to="{name:'songListDetails',params:{id:cloudMusicEleTopList.id}}">
          <li v-for="(items,index) in dealTopList(cloudMusicEleTopList.tracks)">
            {{index+1}}.{{items.name}} - {{items.artists[0].name}}
          </li>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import headerNav from '../../components/headerNav/headerNav';
  import {
    mapState
  } from 'vuex';
  export default {
    name: 'topList',
    components: {
      headerNav
    },
    data() {
      return {
        originNum: 0
      }
    },
    created() {
      this.$store.dispatch('get_cloudMusicTopList');
    },
    computed: {
      ...mapState({
        //云音乐新歌榜
        cloudMusicNewTopList: state => state.cloudMusicNewTopList,
        //云音乐热歌榜
        cloudMusicHotTopList: state => state.cloudMusicHotTopList,
        //云音乐飙升榜
        cloudMusicUpTopList: state => state.cloudMusicUpTopList,
        //云音乐电音榜
        cloudMusicEleTopList: state => state.cloudMusicEleTopList,
      })
    },
    methods: {
      //获取排行榜前三名
      dealTopList(list) {
        if (list == undefined) {
          return;
        }
        if (list.length > 0) {
          return list.slice(0, 3);
        }
      },
      //获取触摸起点
      getOrigin(event) {
        let ev = event || window.event;
        this.originNum = ev.touches[0].pageX;
      },
      //计算距离,判断左/右滑动
      compDistance(event) {
        let ev = event || window.event;
        let endNum = ev.changedTouches[0].pageX;
        let offsetNum = endNum - this.originNum;
        if (offsetNum < -80) {
          this.$router.push({
            name: 'songList'
          })
        }
      }
    }
  }

</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #topList {
    .cloudMusicTopList {
      .mx_wh(100%, auto);
      .list-item-title {
        position: relative;
        .mx_fc(.15rem, #333);
        .mx_whlh(100%, .45rem, .45rem);
        font-weight: normal;
        b {
          .mx_hlh(.15rem, .45rem);
          .mx_bd(.01rem, #f33);
          margin-right: .05rem;
        }
      }
      .list-item {
        .mx_flex;
        .mx_wh(100%, 1.2rem);
        padding-top: .05rem;
        img {
          .mx_flex_item(1.5);
        }
        ul {
          .mx_flex_item(3);
          height: 100%;
          li {
            .mx_fc(.12rem, #666);
            .mx_single_ellipsis;
            padding: 0 .05rem;
            .mx_brbox;
            .mx_flex;
            align-items: center;
            height: 33%;
          }
        }
      }
    }
  }

</style>
