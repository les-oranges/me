import axios from 'axios'
import {MessageBox} from 'mint-ui'
let baseURL = ''

// 添加请求拦截器
// 这里的config包含每次请求的内容
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  if (localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token')
  }
  return config
}, err => {
  // 对请求错误做些什么
  return Promise.reject(err)
})

// get 获取
export const getRequest = (url, params) => {
  return axios.get(`${baseURL}${url}`, { params }).then(res => {
    if (res.data.code === 200) {
      return res.data.data
    }
    if (res.data.code === 201) {
      return res.data.data
    } else {
      if (res.data.code === 204 && res.data.data === 'relogin') {
        window.localStorage.removeItem('token')
        return false
      } else if (res.code === 204 && res.data === 'relogin') {
        window.localStorage.removeItem('token')
        return false
      } else {
        MessageBox('提示', res.data.message)
        return res
      }
    }
  }).catch(error => {
    MessageBox('提示', error)
    return false
  })
}

// post 提交
export const postRequest = (url, params) => {
  return axios.post(`${baseURL}${url}`, { params }).then(res => {
    console.log(res)
    if (res.data.code === 200) {

    } else if (res.data.code === 201) {

    } else {
      if (res.data.code === 204 && res.data.data === 'relogin') {
        window.localStorage.removeItem('token')
        return false
      } else {
        MessageBox('提示', res.data.message)
      }
    }
    return res.data
  }).catch(error => {
    MessageBox('提示', error)
    return false
  })
}

// 数据接口
// export const getTelCode = params => { return getRequest('/api/verify/sendMsg', params) }
// export const getTelCodes = params => { return postRequest('/api/verify/sendMsg', params) }

// 根据手机号码登录账号
export const login = params => { return postRequest('sdgsdgsdg', params) }
