import { postLogin } from '@/services'
import types from '../mutationsTypes'
export default {
  login (store) {
    postLogin()
      .then(resp => {
        window.localStorage.setItem('qwy-token', resp.token)
        store.commit(types.LOGIN, resp.token)
      })
  }
}