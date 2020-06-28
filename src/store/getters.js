export default{
   //计算food的数量
    totalCount(state) {
        return state.cartShop.reduce((proToal, food) => proToal + food.count, 0)
    },

    totalPrice(state) {
        return state.cartShop.reduce((proToal, food) => proToal + food.count * food.price, 0)
    },
    positiveSize(state){
        return state.ratings.reduce((proToal,rating) => proToal +(rating.rateType ===0 ? 1: 0),0)
    }
}