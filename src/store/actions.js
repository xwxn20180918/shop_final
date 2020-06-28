import {
    reqAddress,
    reqCategorys,
    reqShops,

    reqAutoLogin,

    reqGoods,
    reqInfo,
    reqRatings
} from '../api'

import {
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RECEIVE_ADDRESS,

    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_TOKEN,
    RESET_TOKEN,

    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,

    INCREASE_FOOD,
    DECREASE_FOOD,

    CLEAR_SHOP
} from './mutations-type'
export  default {
 //获取地址
 async getAddress({commit,state}){
    //调用接口请求函数
    const {longitude,latitude} =state
    const result = await reqAddress(longitude,latitude)
    //提交mutations
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //获取食品列表
  async getCategorys({commit},callback){
    //调用接口请求函数
    const result = await reqCategorys()
    //提交mutations
    if(result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})

        callback && callback()
    }
  },
  //获取商家列表
  async getShops({commit,state}){
    //调用接口请求函数
    const {longitude,latitude} =state
    const result = await reqShops({longitude,latitude})
    //提交mutations
    if(result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },

  //用户登录信息
   getUserInfo({commit},userinfo){
    const token = userinfo.token
    // 将token保存到local
    localStorage.setItem('token_key', token)

    // 将token保存到state
    commit(RECEIVE_TOKEN, {token})

    // 删除user中的token
    delete userinfo.token
    
    commit(RECEIVE_USER_INFO, {userinfo})


  },

  //登出
   getLogOut({commit}){
    commit(RESET_USER_INFO)
    commit(RESET_TOKEN)
    localStorage.removeItem('token_key')
  },
  /*
  自动登陆的异步action
  */
  async autoLogin ({commit, state}) {
    const {token} = state
    if (token) {
      const result = await reqAutoLogin()
      if (result.code===0) {
        const userinfo = result.data
        commit(RECEIVE_USER_INFO, {userinfo})
      }
    }
  },

    async getGoods({commit},callback) {
        const result = await reqGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, {goods})
            callback && callback()
        }
    },
    async getRatings({commit},callback) {
        const result = await reqRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS, {ratings})
            callback && callback()
        }
    },
    async getInfo({commit},callback) {
        const result = await reqInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO, {info})
            callback && callback()
        }
    },

    getComputedCount({commit}, {isAdd,food}) {
        if (isAdd) {
            commit(INCREASE_FOOD, {food})
        } else {
            commit(DECREASE_FOOD, {food})
        }
    },

    clearShop({commit}){
      commit(CLEAR_SHOP)
    }
}
