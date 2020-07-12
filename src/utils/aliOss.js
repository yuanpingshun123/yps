import {dateFormats} from "./util";
import EXIF from 'exif-js'
const OSS = require('ali-oss');

export default {


  /**
   * 创建随机字符串
   * @param num
   * @returns {string}
   */
  randomString(num) {
    let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let res = '';
    for (let i = 0; i < num; i++) {
      let id = Math.ceil(Math.random() * 35);
      res += chars[id]
    }
    return res
  },

  /**
   * 创建oss客户端对象
   * @returns {*}
   */
  createOssClient() {
    return new Promise((resolve, reject) => {
      let client = new OSS({
        region: 'oss-cn-beijing',
        accessKeyId: 'LTAI4Ffkg5B7dongfR5veoHQ',
        accessKeySecret: '95Z13bgeMfMwmATYXx6gPKl1E4CrTt',
        bucket: 'bangniyindiy'
        // endpoint: 'https://mrcodes.oss-cn-beijing.aliyuncs.com'
      });
      resolve(client)
    })
  },
  /**
   * 文件上传
   * @param option 参考csdn: https://blog.csdn.net/qq_27626333/article/details/81463139
   */
  ossUploadFile(option, flag) {
    let file = option.file;
    const self = this;
    return new Promise((resolve, reject) => {
      let dateTime = dateFormats(new Date(), 'yyyyMMddhhmmss'); // 当前时间
      let randomStr = self.randomString(4);//  4位随机字符串
      let extensionName = file.name.substr(file.name.indexOf('.')); // 文件扩展名
      let fileName = flag == 'img' ? file.name : `${dateTime}${randomStr}${extensionName}`;//`${dateTime}${randomStr}${extensionName}`; // 文件名字（相对于根目录的路径 + 文件名）
      // 执行上传
      self.createOssClient().then(client => {
        // 异步上传,返回数据
        resolve({
          fileName: file.name,
          fileUrl: fileName
        });
        // 上传处理
        client.put(fileName, file).then((val) => {
          if (val.res.statusCode === 200) {
            option.onSuccess(val);
            return val
          } else {
            option.onError('上传失败');
          }
        }, err => {
          option.onError('上传失败');
          reject(err)
        });
        // 分片上传文件
        // client.multipartUpload(fileName, file, {
        // 	progress: function (p) {
        // 		let e = {};
        // 		e.percent = Math.floor(p * 100);
        // 		option.onProgress(e)
        // 	}
        // }).then((val) => {
        // 	if (val.res.statusCode === 200) {
        // 		option.onSuccess(val);
        // 		return val
        // 	} else {
        // 		option.onError('上传失败');
        // 	}
        // }, err => {
        // 	option.onError('上传失败');
        // 	reject(err)
        // })
      })
    })
  },





  ossUploadImage(file, flag) {
    const self = this;
    return new Promise((resolve, reject) => {
      let dateTime = dateFormats(new Date(), 'yyyyMMddhhmmss'); // 当前时间
      let randomStr = self.randomString(4);//  4位随机字符串
      let extensionName = file.name.substr(file.name.indexOf('.')); // 文件扩展名
      let fileName = flag == 'music' ? file.name : `${flag}/${dateTime}/${randomStr}${extensionName}`; // 文件名字（相对于根目录的路径 + 文件名）
      // 执行上传
      self.createOssClient().then(client => {
        // 上传处理
        client.put(fileName, file).then((val) => {
          console.info("val="+JSON.stringify(val))
          if (val.res.statusCode === 200) {
           resolve(val)
          }
        }, err => {
          reject(err)
        });
      })
    })
  },

// 批量上传
  ossUploadFileMore(option, callback){
    option = {
      action: "https://jsonplaceholder.typicode.com/posts/",
      path: '/',    // 上传图片时指定的地址路径，类似form变淡的action属性
      onSuccess: function (res) {    // 上传成功后执行的方法，res是接收的ajax响应内容
        console.log(res);
      },
      onFailure: function (res) {    // 上传失败后执行的方法，res是接收的ajax响应内容
        console.log(res);
      },
      file: option
    }
    let file = option.file;
    const self = this;
    return new Promise((resolve, reject) => {
      let dateTime = dateFormats(new Date(), 'yyyyMMddhhmmss'); // 当前时间
      let randomStr = self.randomString(4);//  4位随机字符串
      let shopName = sessionStorage.getItem('shopName')
      let extensionName = file.name.substr(file.name.indexOf('.')); // 文件扩展名
      let fileName = 'material/'+ shopName + '/' + file.name
      // 执行上传
      self.createOssClient().then(client => {
        // 上传处理
        client.put(fileName, file).then((val) => {
          if (val.res.statusCode === 200) {
            resolve(val);
          } else {
            option.onError('上传失败');
          }
        }, err => {
          option.onError('上传失败');
          reject(err)
        });
      })
    })
  },
  async UploadImg(option, dpiNum) {
    function runAsync1() {
      let dpiTy = 200
      try {
        if (parseInt(dpiNum) && dpiNum < 200) {
          dpiTy = dpiNum
        } else {
          dpiTy = 200
        }
      } catch (e) {
        dpiTy = 200
      }
      let name = option.name
      var file = option
      let url = URL.createObjectURL(file)
      var p = new Promise(function (resolve, reject) {
        function buf2hex(buffer) { // buffer is an ArrayBuffer
          return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
        }
        var reader = new FileReader();　　　　//实例化
        reader.readAsArrayBuffer(file);
        reader.onload = function (e) {
          let _this = this
          var re = this.result;
          EXIF.getData(option, function () {
            try {
              let xdpi = EXIF.getAllTags(this).XResolution.numerator / EXIF.getAllTags(this).XResolution.denominator
              let ydpi = EXIF.getAllTags(this).YResolution.numerator / EXIF.getAllTags(this).XResolution.denominator
              let width = EXIF.getAllTags(this).PixelXDimension
              let height = EXIF.getAllTags(this).PixelYDimension
              if (width && height) {
                var reader = new FileReader();
                reader.readAsDataURL(option);
                reader.onloadend = function (s) {
                  let x = Math.round(width / xdpi * 25.4)
                  let y = Math.round(height / ydpi * 25.4)
                  console.log(height + 'x' + xdpi )
                  xdpi = parseInt(xdpi)
                  dpiTy = parseInt(dpiTy)
                  resolve({ name: name, width:width,height:height, file: option, url: url ,dpi:xdpi})
                }
              } else {
                var reader = new FileReader();
                reader.readAsDataURL(option);
                reader.onloadend = function (s) {
                  var img = new Image();
                  img.crossOrigin = 'anonymous'
                  img.src = s.target.result;
                  img.onload = function () {
                    var width = img.naturalWidth;
                    var height = img.naturalHeight;
                    let x = Math.round(width / xdpi * 25.4)
                    let y = Math.round(height / ydpi * 25.4)
                    xdpi = parseInt(xdpi)
                    dpiTy = parseInt(dpiTy)
                    resolve({ name: name, width:width,height:height, file: option, url: url ,dpi:xdpi})
                  }
                }
              }
            } catch (err) {
              let size = buf2hex(re.slice(4, 6));
              let data = buf2hex(re.slice(6, parseInt(size, 16) + 4));
              let xDensity = buf2hex(re.slice(14, parseInt(size, 16) + 4))
              let tenNum = data[0] + data[1] + data[2] + data[3] + data[4] + data[5] + data[6] + data[7] + data[8] + data[9]
              var reader = new FileReader();
              reader.readAsDataURL(option);
              reader.onloadend = function (s) {
                let dpss = data[16] + data[17] + data[18] + data[19]
                let dpi = parseInt(dpss, 16)
                var img = new Image();
                img.crossOrigin = 'anonymous'
                img.src = s.target.result;
                img.onload = function () {
                  var width = img.naturalWidth;
                  var height = img.naturalHeight;
                  let x = Math.round(width / dpi * 25.4)
                  let y = Math.round(height / dpi * 25.4)
                  reader = null
                  img = null
                  dpi = parseInt(dpi)
                  dpiTy = parseInt(dpiTy)
                  resolve({ name: name, width:width,height:height,file: option, url: url , dpi:dpi})
                }
              }
            }
          })
        }
      });
      return p;
    }
    return runAsync1().then(function (data) {
      return data
    })
  }
}

