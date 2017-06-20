export default {
  //格式化播放数
  formatPlayCount(val) {
    let num = parseInt(val / 10000);
    if (num >= 10) {
      return num + '万';
    } else {
      return parseInt(val);
    }
  },
  //格式化歌词数据
  formatLyric(val) {
    //将歌词用换行符转成数组
    let ary = val.split('\n');
    if (ary.length > 0) {
      for (let i = 0; i < ary.length; i++) {
        ary[i] = ary[i].split(']');
      }
      if (ary.length > 0 && ary[0][1] == '获取歌词失败!') {
        let noLyBox = [
          ['[00:00.00', '获取歌词失败!']
        ];
        noLyBox[0][0] = this.formatLyricTime(noLyBox[0][0]);
        return noLyBox;
      }
      for (let i = 0; i < ary.length; i++) {
        for (let j = 0; j < ary[i].length; j++) {
          if (ary[i][j].indexOf('[') >= 0) {
            ary[i][j] = this.formatLyricTime(ary[i][j]);
          }
        }
      }
      let arys = [];
      for (let i = 0; i < ary.length; i++) {
        if (ary[i].length == 2) {
          arys.push(ary[i]);
        } else if (ary[i].length >= 3) {
          for (let j = 0; j < ary[i].length - 1; j++) {
            let itemBox = [];
            itemBox[0] = ary[i][j];
            itemBox[1] = ary[i][ary[i].length - 1];
            arys.push(itemBox);
          }
        }
      }
      arys.sort((a, b) => {
        return a[0] - b[0];
      })
      for (let i = 0; i < arys.length; i++) {
        if (arys[i][0] == '' || arys[i][1] == '') {
          arys.splice(i, 1);
          i = i - 1;
        }
      }
      return arys;
    }
  },
  //格式化歌词时间
  formatLyricTime(val) {
    let min = val.substr(1, 2);
    let second = val.substr(4, 2);
    let msec = val.substr(7, 2);
    min < 10 ? min = min.substr(1, 1) : min;
    min = min * 60;
    return min + parseInt(second) + (msec / 100);
  },
  //格式化歌词高亮
  formatLyrichighBright(val, box, index) {
    if (index != box.length - 1) {
      if (val >= box[index][0] && val <= box[index + 1][0]) {
        return true;
      } else {
        return false;
      }
    } else {
      if (val >= box[index][0]) {
        return true;
      }
    }
  },
  //计算歌词动画位置
  compLyricPos(val, box) {
    if (box[0][1]) {
      if (box[0][1] == "获取歌词失败!" || box[0][1] == "歌词加载中!") {
        return .6 + 'rem';
      }
    }
    if (box.length > 1) {
      for (let i = 0; i < box.length; i++) {
        if (val >= box[i][0] && val <= box[i + 1][0]) {
          return .6 - .3 * i + 'rem';
        } else if (val >= box[box.length - 1][0]) {
          return .6 - .3 * (box.length - 1) + 'rem';
        }
      }
    }
  }
}
