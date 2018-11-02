const Home = () => import('@/pages/Home')
const Type = () => import('@/pages/Type')
const Cart = () => import('@/pages/Cart')
const Mine = () => import('@/pages/Mine')
const Detail = () => import('@/pages/Detail')
const Search = () => import('@/pages/Search')
const Login = () => import('@/pages/Login')
const List = () => import('@/pages/List')
export default [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  text: '首页',
  icon: 'home',
  isTabbar: true,
  component: Home
}, {
  path: '/type',
  name: 'type',
  text: '分类',
  icon: 'type',
  isTabbar: true,
  component: Type
}, {
  path: '/cart',
  name: 'cart',
  text: '购物车',
  icon: 'cart',
  isTabbar: true,
  component: Cart
}, {
  path: '/mine',
  name: 'mine',
  text: '我的',
  icon: 'mine',
  isTabbar: true,
  component: Mine,
  meta: {
    authRequired: true
  }
}, {
  path: '/detail/:id',
  name: 'detail',
  component: Detail
}, {
  path: '/search',
  name: 'search',
  component: Search
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/list',
  name: 'list',
  component: List
}]
