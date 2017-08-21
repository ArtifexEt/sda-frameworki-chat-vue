// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './components/Login.vue'
import Chat from './components/Chat.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.component('login', Login)
Vue.component('chat', Chat)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
