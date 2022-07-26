import Vue from "vue";
import ant, { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { action, actions } from '@storybook/addon-actions'
import antButtonDocumentation from './antButton.mdx'
Vue.use(ant)


export default {
  title: 'Ant/antButton',
  component: Button,
  argTypes: { click: { action: 'clicked' } },
  parameters: {
    docs: {
      page: antButtonDocumentation,
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),//用SB 6.0写法，接收到的Args参数
  template: '<Button :type="type" @click="click" >{{text}}</Button>',
});

export const Primary = Template.bind({});   //export 导出的组件，展示在页面上，上述Template没有导出故没有显示
Primary.args = {
  type: 'primary',
  text: "aaa",
  click: () => { alert('ok') }
  // click:action('click handler')
};