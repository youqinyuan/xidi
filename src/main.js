// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import store from './store'
import 'mint-ui/lib/style.css'
import './libs/scss/reset.scss'
import * as ajax from './services'
Vue.prototype.$ajax = ajax
router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    if (!store.state.isLogin) {
      next({
        name: 'login',
        params: { to }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
Vue.use(MintUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
