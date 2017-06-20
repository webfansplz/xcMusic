# 仿网易云音乐(webapp)

## 项目地址 (project address)


[api来源](https://binaryify.github.io/NeteaseCloudMusicApi/#/)   感谢binaryify让我们能用自己喜欢的东西做一个自己喜欢的东西!  

[源码地址](https://github.com/webfansplz/xcMusic)     不要脸的求star 哈哈哈!!!

[项目预览](http://1mhere.cn)       1mhere.cn  


## 技术栈 (technology)

```
vue2.0 + vuex + vue-router2.0 + es6 + axios + vux
```

## 文件结构 (File structure)


```
├── build                       构建服务和webpack配置
├── config                      项目不同环境的配置
├── dist                        项目build目录
├── index.html                  项目入口文件
├── package.json                项目配置文件
├── static       	            静态资源
├── src                         生产目录
    |—— api                     api列表和数据处理
    |——|—— apiList.js           api列表
    |——|—— getData.js           数据处理(封装一个axios请求)    
    |—— assets                  静态资源(img,less)
    |——|—— img                  静态图片
    |——|—— style                样式文件  
    |—— components              公用组件
    |——|—— bottomSongList       播放器播放列表组件  
    |——|—— headerNav            头部导航组件
    |——|—— music                音乐组件
    |—— page                    页面组件
    |——|—— albumsListDetails    专辑内容组件 
    |——|—— recommend            个性推荐组件
    |——|—— searchList           搜索列表组件
    |——|—— singer               歌手组件
    |——|—— songDetails          歌曲详情组件
    |——|——|—— player            播放器组件
    |——|—— songList             歌单组件
    |——|—— songListDetails      歌单详情组件
    |——|—— topList              排行榜组件
    |—— router                  路由组件
    |—— store                   数据状态管理组件
    |—— util                    公用方法
```

## 项目功能 (Project Function)

### 完成功能(finish function)
-   个性推荐,歌单,排行榜页面   
-   播放功能(快进,快退,上一曲,下一曲,歌词同步等)
-   搜索功能(热门搜索,单曲,歌手,专辑,歌单,用户) 
-   歌单功能(最新,最热,精品歌单及详情展示)
-   歌手专辑功能(介绍及详情展示) 
-   排行榜功能(云音乐官方版)

### 效果图 (effect picture)
![菜单](https://github.com/webfansplz/xcMusic/blob/master/static/index.gif)   

![搜索](https://github.com/webfansplz/xcMusic/blob/master/static/search.gif)   

![播放](https://github.com/webfansplz/xcMusic/blob/master/static/player.gif)   

![歌单](https://github.com/webfansplz/xcMusic/blob/master/static/list.gif)  
