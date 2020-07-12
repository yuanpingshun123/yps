const handleDate = (date) => {
  let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
  return `${date.getFullYear()}-${month}-${day}`
}

// 时间处理
const handleTime = (date) => {
  let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
  return `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
const commonVal = {
  isPhone: /^[1][3-9]\d{9}$/, // tel // /^([1]\d{10}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/
  isPrice: /^(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)$/, //money
  isEmail: /^([a-zA-Z0-9]+[|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/
}

/**  水印添加方法  */
let setWatermark = (str1, str2, str3) => {
  let id = '1.23452384164.123412415'
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
  let can = document.createElement('canvas')
  // 设置canvas画布大小
  can.width = 150
  can.height = 80

  let cans = can.getContext('2d')
  cans.rotate(-20 * Math.PI / 180) // 水印旋转角度
  // cans.rotate(20 * Math.PI / 180) // 水印旋转角度
  cans.font = '15px Vedana'
  cans.fillStyle = '#666666'
  cans.textAlign = 'center'
  cans.textBaseline = 'Middle'
  cans.fillText(str1, can.width / 2, can.height) // 水印在画布的位置x，y轴
  cans.fillText(str2, can.width / 2, can.height + 22)
  let div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '0px'
  div.style.left = '0px'
  div.style.opacity = '0.75'
  //div.style.position = 'fixed'
  div.style.position = 'absolute'
  div.style.zIndex = '100000'
  div.style.width = '120px' //document.documentElement.clientWidth + 'px'
  div.style.height = '120px' //document.documentElement.clientHeight  + 'px'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  // document.body.appendChild(div)
  console.log(div,'div---')
  str3 =  div
  // return id
  return id
}

// 添加水印方法
const setWaterMark = (str1, str2, str3) => {
  let id = setWatermark(str1, str2, str3)
  console.log(id,'idppppppppppppppp')
  if (document.getElementById(id) === null) {
    id = setWatermark(str1, str2, str3)
  }
}

// 移除水印方法
const removeWatermark = () => {
  let id = '1.23452384164.123412415'
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
}

export {
  handleDate,
  handleTime,
  commonVal,
  setWaterMark,
  removeWatermark
}
