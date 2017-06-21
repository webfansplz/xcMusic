<template>
  <div id="songList" @touchstart="getOrigin" @touchend="compDistance">
    <headerNav tabIndex="1"></headerNav>
    <div class="titleWrapper">
      <div class="songListTitle">
        <span :class="{beHighLight:tabIndex ==0}" @click="switchSongList('new',0)">最新</span>
        <span :class="{beHighLight:tabIndex ==1}" @click="switchSongList('hot',1)">最热</span>
        <span :class="{beHighLight:tabIndex ==2}" @click="switchSongList('Boutique',2)">精品</span>
      </div>
    </div>
    <div class="songListContxt">
      <ul>
        <router-link v-for="(item,i) in songList" :key="i" tag="li" :to="{name:'songListDetails',params:{id:item.id}}">
          <i class="iconfont icon-headset">{{format.formatPlayCount(item.playCount)}}</i>
          <img v-lazy="item.coverImgUrl">
          <p>{{item.name}} - {{item.creator.nickname}}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import headerNav from '../../components/headerNav/headerNav';
  export default {
    name: 'songList',
    components: {
      headerNav
    },
    data() {
      return {
        tabIndex: 0,
        originNum: 0
      }
    },
    created() {
      this.$store.dispatch('get_playList', 'new');
    },
    computed: {
      songList() {
        return this.$store.state.playList;
      }
    },
    methods: {
      //切换歌单
      switchSongList(type, index) {
        this.tabIndex = index;
        this.$store.dispatch('get_playList', type);
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
        if (offsetNum > 80) {
          this.$router.push({
            name: 'topList'
          })
        } else if (offsetNum < -80) {
          this.$router.push({
            name: 'recommend'
          })
        }
      }
    }
  }

</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #songList {
    .mx_wh(100%, auto);
    .titleWrapper {
      // .mx_flex;
      // .mx_flex_mid;
      .mx_wh(100%, .5rem);
    }
    .songListTitle {
      .mx_wh(80%, .3rem);
      padding: .1rem 0;
      position: fixed;
      z-index: 999;
      .mx_flex;
      left: 50%;
      transform: translatex(-50%);
      span {
        background-color: #fff;
        .mx_flex_item(1);
        .mx_fc(.14rem, #f33);
        .mx_flex_mid;
        .mx_bd(1px, #f33);
        &:nth-child(1) {
          border-right: 0;
          border-radius: .5rem 0 0 .5rem;
        }
        &:nth-child(2) {
          border-right: 0;
        }
        &:nth-child(3) {
          border-radius: 0 .5rem .5rem 0;
        }
      }
      .beHighLight {
        background-color: #f33;
        color: #fff;
      }
    }
    .songListContxt {
      .mx_wh(100%, auto);
      ul {
        .mx_flex;
        .mx_flex_content;
        li {
          .mx_flex_item(0 0 49%);
          position: relative;
          padding-bottom: .1rem;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
          }
          p {
            .mx_more_ellipsis;
            .mx_hlh(.3rem, .16rem);
            padding: .05rem .06rem 0;
            .mx_fc(.12rem, #666);
          }
          i {
            .mx_postr(.03rem, .05rem);
            .mx_fc(.12rem, #fff);
          }
        }
      }
    }
  }

</style>
