import OSS from 'ali-oss';

// const client = new OSS({
//   region: 'oss-cn-beijing',
//   accessKeyId: this.accessKeyId,
//   accessKeySecret: this.accessKeySecret,
//   bucket: this.backetName
// })
/*富文本编辑图片上传配置*/
const uploadConfig = {
  action:  'http://mrcode.yinai268.com/upload/uploadMultiImageTemp',  // 必填参数 图片上传地址
  methods: 'POST',  // 必填参数 图片上传方式
  token: '',  // 可选参数 如果需要token验证，假设你的token有存放在sessionStorage
  name: 'uploadFile',  // 必填参数 文件的参数名
  size: 5000000,  // 可选参数   图片大小，单位为Kb, 1M = 1024Kb
  accept: 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon'  // 可选 可上传的图片格式
};

// toolbar工具栏的工具选项（默认展示全部）
const toolOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{'header': 1}, {'header': 2}],
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],
  [{'indent': '-1'}, {'indent': '+1'}],
  [{'direction': 'rtl'}],
  [{'size': ['small', false, 'large', 'huge']}],
  [{'header': [1, 2, 3, 4, 5, 6, false]}],
  [{'color': []}, {'background': []}],
  [{'font': []}],
  [{'align': []}],
  ['clean'],
  ['link', 'image', 'video']
];
const handlers = {
  image: function image() {
    var self = this;

    var fileInput = this.container.querySelector('input.ql-image[type=file]');
    let editFileList = [];
    if (fileInput === null) {
      fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute("multiple","multiple")
      // 设置图片参数名
      if (uploadConfig.name) {
        fileInput.setAttribute('name', uploadConfig.name);
      }
      // 可设置上传图片的格式
      fileInput.setAttribute('accept', uploadConfig.accept);
      fileInput.classList.add('ql-image');
      // 监听选择文件
      fileInput.addEventListener('change', () => {
        let fileList = [];
        for (let i = 0; i < fileInput.files.length; i++) {
          fileList.push(fileInput.files[i]);
        }
        fileList.forEach((singleFile) => {
          // 创建formData
          let formData = new FormData();
          formData.append(uploadConfig.name, singleFile);
          formData.append('object','product');
          // 如果需要token且存在token
          if (uploadConfig.token) {
            formData.append('token', uploadConfig.token)
          }
          // 图片上传
          let xhr = new XMLHttpRequest();
          xhr.open(uploadConfig.methods, uploadConfig.action, true);
          // 上传数据成功，会触发
          xhr.onload = function (e) {
            if (xhr.status === 200) {
              editFileList.push(xhr.responseText)
              // console.log('111', editFileList.length, fileList.length)
              if (editFileList.length === fileList.length) {
                // 图片排序
                editFileList.sort((f1, f2) => {
                  let num1 = parseInt(f1.substring(f1.lastIndexOf('\/') + 1, f1.lastIndexOf('\.')).replace(/[^0-9]/ig,""));
                  let num2 = parseInt(f2.substring(f2.lastIndexOf('\/') + 1, f2.lastIndexOf('\.')).replace(/[^0-9]/ig,""));
                  return num1 - num2;
                });
                // 将图片插入编辑器中
                for (let i = 0; i < editFileList.length; i++) {
                  let length = self.quill.getSelection(true).index;                   // 获取光标所在位置
                  self.quill.insertEmbed(length, 'image', editFileList[i])        // 插入图片  res.info为服务器返回的图片地址
                  self.quill.setSelection(length + 1)                             // 调整光标到最后
                }
              }
            }
            fileInput.value = ''
          };
          // 开始上传数据
          xhr.upload.onloadstart = function (e) {
            fileInput.value = ''
          };
          // 当发生网络异常的时候会触发，如果上传数据的过程还未结束
          xhr.upload.onerror = function (e) {
          };
          // 上传数据完成（成功或者失败）时会触发
          xhr.upload.onloadend = function (e) {
            // console.log('上传结束')
          };
          xhr.send(formData)
        });
      });
      this.container.appendChild(fileInput);
    }
    fileInput.click();
  }
};

export default {
  placeholder: '',
  theme: 'snow',  // 主题
  modules: {
    toolbar: {
      container: toolOptions,  // 工具栏选项
      handlers: handlers  // 事件重写
    }
  }
};
