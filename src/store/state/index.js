export default {
  cart: JSON.parse(window.localStorage.getItem('xd-cart')) || [],
  isLogin: Boolean(window.localStorage.getItem('qwy-token')),
  hotList: JSON.parse(window.localStorage.getItem('xd-search')) || []
}