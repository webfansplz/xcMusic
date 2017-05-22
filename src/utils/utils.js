//格式化播放数
export default {
  formatPlayCount(val) {
    let num = parseInt(val / 10000);
    if (num >= 10) {
      return num + '万';
    } else {
      return parseInt(val);
    }
  }
}
