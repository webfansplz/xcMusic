import api from './apiList';
import axios from 'axios';
import querystring from 'querystring';

//处理req data
const opera_req = (data) => {
  return querystring.stringify(data)
}

//处理res data
const opera_res = (data) => {
  return data
}


//通过axios发送请求
export default async(pathName, queryData) => {
  let reqdata = opera_req(queryData)
  // let str = api[pathName].concat('?', reqdata);

  let str= "https://bird.ioliu.cn/v1?url=http://47.94.16.170:3000" +api[pathName];
  let result = await axios(str);
  let resdata = opera_res(result);
  return new Promise((resolve, reject) => {
    resolve(resdata)
  })
}
