<template>
    <section class="msite">
      <!--首页头部-->
      <HeaderTop :title="address.name || '正在定位中...'">
        <router-link class="header_search" slot="left" to="/search">
            <i class="iconfont icon-sousuo "></i>
          </router-link>
        <router-link class="header_login" slot="right" to="/person">
            <span class="header_login_text">
              <i class="iconfont icon-dengluyonghu"></i>
            </span>
          </router-link>

      </HeaderTop>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categorys,index) in categorysArr1" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                <div class="food_container">
                  <img :src="baseImages+category.image_url">
                </div>
                <span>{{category.title}}</span>
              </a>

            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--首页附近商家-->
      <ShopList/>
    </section>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  //import chunk from 'lodash/chunk' //模块工具引入
  import {mapState} from 'vuex'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'


  export default {
    data() {
      return {
        baseImages: 'https://fuss10.elemecdn.com'
      }
    },
    mounted(){
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys',() => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      })


    },
    computed:{
      ...mapState(['address','categorys']),
       //原生写法
      categorysArr1(){
        //1 得到当前数据
        let {categorys} =this
        //2 创建一个大数组
        const Arr = []
        //3 创建一个小数组
        let arr = []
        //4 遍历
        categorys.forEach((category) => {
          //5 当小数组满后，新增一个小数组
          if(arr.length ===8){
             arr = []
          }
          //6 当小数组为0时 添加到大数组中
          if(arr.length ===0){
            Arr.push(arr)
          }
          //7 把当前数据添加到小数组中
          arr.push(category)
        })
        return Arr
      },
      //用模块工具 使用一维数组生成二维数组
      // categorysArr2(){
      //   return chunk(this.categorys,8)
      // }
    },
    components:{
      HeaderTop,
      ShopList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.msite  //首页
  width 100%
  overflow-x hidden
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774

</style>
