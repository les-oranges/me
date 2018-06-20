import { Toast } from 'mint-ui'

export default {
  // "yyyy-MM-dd"
  // "yyyy-MM-dd HH:mm:ss"
  formatDate: (date, fmt) => {
    if (date instanceof Date) {
      var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'H+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
      }
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
      return fmt
    }
    return date
  },
  // 验证手机号码格式
  verifyTel: (tel) => {
    let reg = /^1(3|4|5|7|8)\d{9}$/
    if (!tel) {
      Toast({
        message: '请输入手机号',
        duration: 2000
      })
      return false
    }
    if (!reg.test(tel)) {
      Toast({
        message: '手机号格式不正确',
        duration: 2000
      })
      return false
    }
    return true
  },
  showMsg: (msg) => {
    Toast({
      message: msg,
      duration: 2000
    })
  },
  /* ================ 深拷贝对象 ================ */
  deepClone (initalObj) {
    let obj
    try {
      obj = JSON.parse(JSON.stringify(initalObj))
    } catch (e) {
      return null
    }
    return obj
  },
  isNull (value) {
    if (value === null || value === undefined) {
      return true
    }
    return false
  },
  isEmpty (value) {
    if (value === '') {
      return true
    } else if (this.isNull(value)) {
      return true
    }
    return false
  },
  parseNumber (value) {
    value = parseFloat(value)
    if (isNaN(value)) {
      return 0
    }
    return value
  },
  // 排序 倒叙
  sortListDesc (list, key) {
    if (!Array.isArray(list)) {
      console.warn('排序对象不是一个数组')
      return
    }
    list.sort(function (a, b) {
      if (typeof a === 'object' && typeof b === 'object') return b[key] - a[key]
      return b - a
    })
  },
  // 排序 正序
  sortList (list, key) {
    if (!Array.isArray(list)) {
      console.warn('排序对象不是一个数组')
      return
    }
    list.sort(function (a, b) {
      if (typeof a === 'object' && typeof b === 'object') return a[key] - b[key]
      return a - b
    })
  }
}
