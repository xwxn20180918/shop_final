import Vue from 'vue'
import
{
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,

  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RESET_TOKEN,
  RECEIVE_TOKEN,

  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,

  DECREASE_FOOD,
  INCREASE_FOOD,

  CLEAR_SHOP
}
from './mutations-type'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },


  [RECEIVE_USER_INFO](state,{userinfo}){
    state.userinfo = userinfo
  },
  [RESET_USER_INFO](state){
    state.userinfo = {}
  },
  [RECEIVE_TOKEN](state, {token}) {
    state.token = token
  },
  [RESET_TOKEN](state) {
    state.token = ''
  },

  [RECEIVE_GOODS](state,{goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state,{info}){
    state.info = info
  },

  [INCREASE_FOOD](state,{food}){
    if(!food.count){//第一次增加
      //对象 属性名 属性值
    Vue.set(food,'count',1)
      //将food添加到cartshop中
      state.cartShop.push(food)
    }else{
      food.count++
    }
  },

  [DECREASE_FOOD](state,{food}){
       food.count--
        //如果food数量为0 则清空购物车中的数量
        if(food.count === 0){
          state.cartShop.splice(state.cartShop.indexOf(food),1)
        }


  },
  [CLEAR_SHOP](state){
    //清空food中的count
    state.cartShop.forEach((food) => {food.count = 0})
    //清空购物车

    state.cartShop = []
  }

}
