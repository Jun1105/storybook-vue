import Vue from 'vue'
//  引入组件库
import Antd from 'ant-design-vue'
import App from './App.vue'
//  引入样式表
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Antd);

new Vue({
  render: h => h(App),
}).$mount('#app')
