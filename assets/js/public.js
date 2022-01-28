// 导入form
let form = layui.form
// 导入layer
let layer = layui.layer

// 配置全局路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3007'

// 设置请求拦截器 每次请求都需要这是请求头
axios.interceptors.request.use(function (config) {
  // console.log(config)
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, function (error) {
  return Promise.reject(error)
})