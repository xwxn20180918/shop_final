<template>
    <div class="cartcontrol">
        <transition name="fade">
            <div class="iconfont icon-jian-tianchong" v-if="food.count" @click.stop="computedCount(false)"></div>
        </transition>

        <div class="cart-count" v-if="food.count">{{food.count}}</div>
        <div class="iconfont icon-jia" @click.stop="computedCount(true)"></div>
    </div>

</template>

<script>
    export default {
        props:{
            food:Object
        },
        methods:{
            computedCount(isAdd){
                this.$store.dispatch('getComputedCount',{isAdd,food:this.food})
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixins.styl'
    .cartcontrol
        font-size: 0
        .cart-decrease
            display: inline-block
            padding: 6px
            line-height: 24px
            font-size: 24px
            color: rgb(0, 160, 220)

        .icon-jian-tianchong
            display: inline-block
            padding 6px
            line-height 24px
            font-size 24px
            color deeppink
            &.fade-enter-active,&.fade-leave-active
              transition all 0.5s
            &.fade-enter,&.fade-leave-to
               opacity 0
               transform translateX(15px) rotate(180deg)

        .cart-count
            display: inline-block
            vertical-align: top
            width: 12px
            padding-top: 6px
            line-height: 24px
            text-align: center
            font-size: 10px
            color: rgb(147, 153, 159)
        .icon-jia
            display: inline-block
            padding: 6px
            line-height: 24px
            font-size: 24px
            color deeppink
</style>

