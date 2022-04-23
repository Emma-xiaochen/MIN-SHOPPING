import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import '@/icons' // icon
import '@/styles/index.scss' // global css

Vue.use(ElementUI)
Vue.use(mavonEditor) // md编辑器

Vue.prototype.$message = ElementUI.Message


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
