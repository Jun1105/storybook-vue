import Vue from 'vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(antd)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}