import axios from 'axios'
import { Indicator } from 'mint-ui'
const isDev = process.env.NODE_ENV === 'development'
const ajax = axios.create({
  baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/115631' : '真实的地址'
})
ajax.interceptors.request.use((config) => {
  const newConfig = config
  Indicator.open('正在加载...')
  newConfig.headers['qwy-token'] = window.localStorage.getItem('qwy-token')
  return newConfig
})

ajax.interceptors.response.use(resp => new Promise((resolve) => {
  switch (resp.data.code) {
    case 200:
      resolve(resp.data.data)
      break
    default:
      resolve(resp)
      break
  }
  Indicator.close()
})
)
export const getProductList = () => ajax.get('/api/vi/list')
export const getProductDetail = id => ajax.get(`api/v1/detail/:${id}`)
export const postLogin = params => ajax.post('api/v1/login', params)
export const getSearch = () => ajax.get('/api/v1/search')