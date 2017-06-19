<template>
  <div id="topList">
    <headerNav tabIndex="3"></headerNav>
    <div class="cloudMusicTopList">
      <h1 class="list-item-title">
        <b></b> 云音乐官方榜
      </h1>
      <div class="list-item" v-for="(item,i) in cloudMusicTopList" :key="i">
        <img :src="item.coverImgUrl">
        <router-link  class="halfBorder" tag="ul" :to="{name:'songListDetails',params:{id:item.id}}">
          <li v-for="(items,index) in dealTopList(item.tracks)">
            {{index+1}}.{{items.name}} - {{items.artists[0].name}}
          </li>
        </router-link >
      </div>
    </div>
  </div>
</template>
<script>
  import headerNav from '../../components/headerNav/headerNav';
  export default {
    name: 'topList',
    components: {
      headerNav
    },
    created() {
      this.$store.dispatch('get_cloudMusicTopList');
    },
    computed: {
      cloudMusicTopList() {
        console.log(this.$store.state.cloudMusicTopList)
        return this.$store.state.cloudMusicTopList;
      }
    },
    methods: {
      dealTopList(list) {
        if (list.length > 0) {
          return list.slice(0, 3);
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
