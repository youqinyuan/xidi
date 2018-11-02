import types from '../mutationsTypes'
export default{
  [types.INCREMENT] (state, id) {
    state.cart = state.cart.map(item => {
      const newItem = item
      if (item.id === id) {
        newItem.count += 1
      }
      return newItem
    })
    window.localStorage.setItem('xd-cart', JSON.stringify(state.cart))
    return state.cart
},
  [types.DECREMENT] (state, id) {
    state.cart = state.cart.reduce((result, item) => {
      const newItem = item
      if (item.id === id) {
        if (item.count <= 1) {
          alert('宝贝不能再少了')
        } else {
          newItem.count -= 1
        }
      }
      if (item.count > 0) {
        result.push(newItem)
      }
      return result
    }, [])
    window.localStorage.setItem('xd-cart', JSON.stringify(state.cart))
    return state.cart
  },
  [types.ON_ITEM_DELETE] (state, id) {
    state.cart = state.cart.filter(item => item.id !== id)
    window.localStorage.setItem('xd-cart', JSON.stringify(state.cart))
    return state.cart
  },
  [types.LOGIN] (state) {
    state.isLogin = true
  },
  [types.IS_SHOW] (state) {
    state.showBottomNav = false
  },
  [types.ADD_TO_CART] (state, cartItem) {
    const isInCart = state.cart.some(item => item.id === cartItem.id)
    if (isInCart) {
      state.cart = state.cart.map(item => {
        if (item.id === cartItem.id) {
          item.count += cartItem.count
        }
        return item
      })
    } else {
      state.cart = state.cart.concat({
        ...cartItem,
        count: cartItem.count
      })
    }
    window.localStorage.setItem('xd-cart', JSON.stringify(state.cart))
    return state.cart
  },
  [types.ADD_TO_SEARCH] (state, searchItem) {
    state.hotList.unshift(searchItem)
    state.hotList = Array.from(new Set(state.hotList))
    window.localStorage.setItem('xd-search', JSON.stringify(state.hotList))
    return state.hotList
  },
  [types.HANDLEDELETE] (state) {
    state.hotList.splice(0, state.hotList.length)
    window.localStorage.setItem('xd-search', JSON.stringify(state.hotList))
    return state.hotList
  },
  [types.QUIT_LOGIN] (state) {
    state.isLogin = false
    if (!state.isLogin) {
      window.localStorage.removeItem('qwy-token')
      window.location.href = '/login'
    }
  }
}
