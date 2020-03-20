const state = {
  items: []
}

//store的计算属性
const getters = {
  cartTotalCount(state,getters) {
    //reduce的经典使用场景
    return getters.getShopCartProducts.reduce( (count,item) => {
      return count + item.count
    },0)
  },
  cartTotalPrice(state,getters) {
    return getters.getShopCartProducts.reduce( (total,item) => {
      return total + item.count * item.price
    },0)
  },
  getShopCartProducts(state,getters,rootState) {
    // rootState - 全局 state
    // 购物车 items 只有 name、count ，没有其他商品信息。要从这里获取。
    let items = state.items
    let goodList =  rootState.goodlist.goodList
    let finallyCartFoods = []
    let food
    for(let k = 0;k < items.length;k++) {
      let {name,count} = items[k]  //{name: "皮蛋瘦肉粥",count: 20} 第一次
      for(let i = 0; i < goodList.length; i++) {
        let foods = goodList[i].foods
        for(let j = 0;j < foods.length; j++) {
          if(name === foods[j].name) {
            food  = {
              name: foods[j].name,
              price: foods[j].price,
              count
            }
            if(finallyCartFoods.find(item => item.name === name)) {
              break
            } else {
              finallyCartFoods.push(food)
              break
            }
          }
        }
      }
    }
    return finallyCartFoods
  }
}

const mutations = {
  // 商品初次添加到购物车
  pushProductToCart(state, {name,price}) {
    state.items.push({
      name,
      count: 1
    })
  },
  incrementItemCount(state, {name}) {
    //找到购物车中的对应项将数量加一
    let cartItem = state.items.find((item) => {
      return item.name === name
    })
    cartItem.count++
  },
  decrementItemCount(state, {name}) {
    let cartItemIndex
    let cartItem = state.items.find((item, index) => {
      if (item.name === name) {
        cartItemIndex = index
        return true
      }
    })
    if (cartItem.count > 0) {
      cartItem.count--
      if(cartItem.count === 0) {
        //删除该商品
        state.items.splice(cartItemIndex, 1)
      }
    }
  },
  clearCart(state) {
    state.items = []
  }
}
//这里没有异步，为何要用 actions ？？？—— 因为要整合多个 mutation
//mutation 是原子，其中不可再进行 commit ！！！
const actions = {
  addToShopCart(context, selectFood) {
    let items = context.state.items
    //若能够找到，则返回需要找的那个元素
    const cartItem = items.find((item) => {
      return item.name === selectFood.name
    })
    if (!cartItem) {
      // 商品初次添加到购物车
      context.commit('pushProductToCart', selectFood)
    } else {
      context.commit('incrementItemCount', cartItem)
    }
  },
  deleteToShopCart(context, selectFood) {
    let items = context.state.items
    const cartItem = items.find((item) => {
      return item.name === selectFood.name
    })
    //商品存在，则减少数量
    if (cartItem) {
      context.commit('decrementItemCount', cartItem)
    } else {
      return
    }
  },
  emptyShopCart(context) {
    context.commit('clearCart')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}


