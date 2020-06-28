<template>
<div id="id">
  <router-view/>
  <Footer v-show="$route.meta.showFooter"/>
</div>
</template>

<script>

  import Footer from './components/Footer/Footer'
  export default {
    mounted(){
      this.$store.dispatch('getAddress'),
        this.$store.dispatch('autoLogin')


    },

    components:{
      Footer
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
