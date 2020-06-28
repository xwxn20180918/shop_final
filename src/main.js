import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Button } from 'mint-ui';
import VueLazyload from 'vue-lazyload'

import loading from './common/images/vue-lazyload.gif'


Vue.component(Button.name, Button)
Vue.use(VueLazyload, {

  loading
})

//import './api' 测试接口
import './filters'
import './mock/mock-Server'




Vue.config.productionTip = false//去掉输出提示
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
})
