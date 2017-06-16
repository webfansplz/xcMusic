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
        if (ary[i].length < 3) {
          if (ary[i][0] == '' || ary[i][1] == '') {
            ary.splice(i, 1);
            i = i - 1;
          }
        }
      }
      console.log(ary)
      if (ary.length > 0 && ary[0].length < 3) {
        for (let j = 0; j < ary.length; j++) {
          ary[j][0] = this.formatLyricTime(ary[j][0]);
        }
      }
      return ary;
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
    for (let i = 0; i < box.length; i++) {
      if (val >= box[i][0] && val <= box[i + 1][0]) {
        return 1.8 - .3 * i + 'rem';
      } else if (val >= box[box.length - 1][0]) {
        return 1.8 - .3 * (box.length - 1) + 'rem';
      }
    }
  }
}
