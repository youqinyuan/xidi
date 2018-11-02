export default {
  totalCount (state) {
    return state.cart.reduce((result, item) => {
      result += item.count
      return result
    }, 0)
  }
}