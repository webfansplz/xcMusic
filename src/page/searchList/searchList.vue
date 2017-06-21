<template>
  <div id="searchList" @touchstart="getOrigin" @touchend="compDistance">
    <div class="search">
      <i class="iconfont icon-micro"></i>
      <div class="search-box">
        <label class="iconfont icon-glass" for="searchBoxs" v-if="SearchLabel == true">
          <span>搜索音乐,歌词,电台</span>
          </label>
        <input type="text" @blur="goSearch" v-model="searchVal" id="searchBoxs">
      </div>
      <router-link class="cancelSearch" :to="{path:'/recommend'}">取消</router-link>
    </div>
    <tab :line-width="2" bar-active-color="#f33" active-color='#f33' class="searchList-type">
      <tab-item @on-item-click="switchSearchType" :selected="searchType ==1">单曲</tab-item>
      <tab-item @on-item-click="switchSearchType" :selected="searchType ==100">歌手</tab-item>
      <tab-item @on-item-click="switchSearchType" :selected="searchType ==10">专辑</tab-item>
      <tab-item @on-item-click="switchSearchType" :selected="searchType ==1000">歌单</tab-item>
      <tab-item @on-item-click="switchSearchType" :selected="searchType ==1002">用户</tab-item>
    </tab>
    <div class="searchList-hot" v-if="SearchLabel == true&&searchList.length==0">
      <h1 class="hot-title">热门搜索</h1>
      <ul class="hot-contxt">
        <li v-for="(item,i) in hotSearchKeywords" :key="i" @click="chooseHotSearch(item)">{{item}}</li>
      </ul>
    </div>
    <!--单曲-->
    <div class="singleSong" v-if="searchType == 1&&searchList!=''">
      <ul>
        <router-link v-for="(item,i) in searchList.songs" class="halfBorder" tag="li" :key="i" :to="{name:'songDetails',params:{id:item.id}}">
          <p>{{item.name}}</p>
          <span>{{item.artists[0].name}} - {{item.album.name}}</span>
        </router-link>
      </ul>
    </div>
    <!--歌手-->
    <div class="singer" v-if="searchType == 100&&searchList!=''">
      <ul>
        <router-link v-for="(item,i) in searchList.artists" :key="i" tag="li" :to="{name:'singer',params:{id:item.id}}">
          <div><img v-lazy="item.picUrl"></div>
          <span class="halfBorder">{{item.name}}</span>
        </router-link>
      </ul>
    </div>
    <!--专辑-->
    <div class="albums" v-if="searchType == 10&&searchList!=''">
      <ul>
        <router-link v-for="(item,i) in searchList.albums" :key="i" tag="li" :to="{name:'albumsListDetails',params:{id:item.id}}">
          <div><img v-lazy="item.picUrl"></div>
          <span class="halfBorder">
            <p>{{item.name}}</p>
            <span>{{item.artists[0].name}}</span>
          </span>
        </router-link>
      </ul>
    </div>
    <!--歌单-->
    <div class="playlists" v-if="searchType == 1000&&searchList!=''">
      <ul>
        <router-link v-for="(item,i) in searchList.playlists" :to="{name:'songListDetails',params:{id:item.id}}" tag="li" :key="i">
          <div><img v-lazy="item.coverImgUrl"></div>
          <span class="halfBorder">
            <p>{{item.name}}</p>
            <span>{{item.trackCount}}首音乐 by {{item.creator.nickname}}, 播放{{format.formatPlayCount(item.playCount)}}次</span>
          </span>
        </router-link>
      </ul>
    </div>
    <!--用户-->
    <div class="userprofiles" v-if="searchType == 1002&&searchList!=''">
      <ul>
        <li v-for="(item,i) in searchList.userprofiles" :key="i">
          <div><img v-lazy="item.backgroundUrl"></div>
          <span class="halfBorder">
            <p>{{item.nickname}}</p>
            <span>{{item.signature}}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import headerNav from '../../components/headerNav/headerNav';
  import {
    Tab,
    TabItem
  } from 'vux';
  export default {
    name: 'searchList',
    components: {
      headerNav,
      Tab,
      TabItem
    },
    created() {
      this.searchVal = '';
      this.$store.commit('set_searchList', []);
    },
    data() {
      return {
        //搜索label显示状态
        SearchLabel: true,
        //搜索值
        searchVal: '',
        //搜索类型(默认单曲)
        searchType: 1,
        //热门搜索关键词
        hotSearchKeywords: ['My Lover', '童话镇', '谁明浪子心', '陈奕迅', '不浪漫罪名', '小幸运', '讲不出再见', '相依为命'],
        //触摸起点
        originNum: 0
      }
    },
    computed: {
      //搜索列表
      searchList() {
        return this.$store.state.searchList;
      }
    },
    methods: {
      //选择热门搜索关键字
      chooseHotSearch(val) {
        this.searchVal = val;
        this.goSearch();
      },
      // 搜索框获取焦点
      goSearch() {
        if (this.searchVal != '') {
          let paramObj = {
            keywords: this.searchVal,
            type: this.searchType
          }
          this.$store.dispatch('get_SearchList', paramObj)
        } else if (this.searchVal == '' || this.searchVal == ' ') {
          this.$store.commit('set_searchList', []);
        }
      },
      //切换搜索类型
      switchSearchType(index) {
        if (index == 0) {
          this.searchType = 1;
        } else if (index == 1) {
          this.searchType = 100;
        } else if (index == 2) {
          this.searchType = 10;
        } else if (index == 3) {
          this.searchType = 1000;
        } else {
          this.searchType = 1002;
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
        let TypeBox = [1, 100, 10, 1000, 1002];
        if (offsetNum > 80) {
          if (this.searchType != 1002) {
            this.searchType = TypeBox[TypeBox.indexOf(this.searchType) + 1];
          }
        } else if (offsetNum < -80) {
          if (this.searchType != 1) {
            this.searchType = TypeBox[TypeBox.indexOf(this.searchType) - 1];
          }
        }
      }
    },
    watch: {
      //监听搜索内容值
      searchVal(val) {
        if (val != '') {
          this.SearchLabel = false;
        } else {
          this.SearchLabel = true;
        }
        this.goSearch();
      },
      //监听搜索类型
      searchType() {
        this.goSearch();
      }
    }
  }

</script>
<style lang="less">
  @import './searchList';

</style>
