
import axios from 'axios';
import Vue from '../main.js';
require("babel-polyfill");
import { url } from './url';
import md5 from 'js-md5';
import router from '../router';
// import store from '@/store';

var request = axios.create({
  timeout: 120000,
});

function sortObj(params) {
  let sortedStr = '';
  let keys = Object.keys(params).sort();
  for (let key of keys) {
    if (Array.isArray(params[key])) {
      if (Object.prototype.toString.call(params[key][0]) === '[object Object]') {
        for (let obj of params[key]) {
          sortedStr += (key + "=" + sortObj(obj));
        }
      } else {
        sortedStr += (key + "=" + JSON.stringify(params[key]));
      }
    } else {
      sortedStr += (key + "=" + params[key]);
    }
  }
  return sortedStr;
}

function ajax(opt,method){
  var token= sessionStorage.getItem('logintoken')
  var timestamp=new Date().getTime();
  var params;
  if(opt.params){
    //对传入的参数进行深拷贝，防止传入的参数对象被页面上其他逻辑改变，导致签名错误
    params=JSON.parse(JSON.stringify(opt.params));
  }else{
    params={1:1}
  }
  //axios会自动过滤值为undefined和null的参数，因此手动去掉这些参数，不让其参与签名，避免出现签名错误
  for (let key in params){
    if(params[key]==null){
      delete params[key]
    }
  }
  const sign = md5(sortObj(params) + '02093cbdb78d447db7b15b2fc3ac218b');
  var config={
    url: url + opt.url,
    method: method,
    headers:{
      token:token,
      timestamp:timestamp,
      sign:sign
    }
  }
  method==="GET"&&(config.params=params);
  method==="POST"&&(config.data=params);
  return new Promise((resolve,reject)=>{
    request(config).then(res=>{
      if(res.data.code==2){
        sessionStorage.clear();
        localStorage.clear();
        router.replace("/login");
        reject(res.data)
      }else{
        resolve(res.data)
      }
    }).catch(res=>{
      // Vue.$message.error("请求失败");
      reject(res)
    })
  })
}


export function ajaxGet (opt) {
  return ajax(opt,"GET")
}

export function ajaxPost (opt) {
  return ajax(opt,"POST")
}

export function reqExpost (method, url, params) {
  const timestamp = new Date().getTime().toString();
  params.token = sessionStorage.getItem('logintoken')
  const keys = Object.keys(params).sort(); let i; const length = keys.length; let key; let sortedString = '';
  for (i = 0; i < length; i++) {
    key = keys[i];
    sortedString += (key + '=' + params[key]);
  }
  const sign = md5(sortedString + '02093cbdb78d447db7b15b2fc3ac218b');
  console.info(sign);
  return axios({
    method: method,
    url:  baseUrl + url,
    headers: {
      'Content-Type': 'application/json',
      timestamp: timestamp,
      sign: sign,
      token:sessionStorage.getItem('logintoken')
    },
    data: params,
    responseType: 'blob' // 表明返回服务器返回的数据类型
  }).then(res => res.data);
};
