import Vue from "vue";
import ant, { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(ant)


export default{
    title:'Ant/antButton',
    component: Button
}

const Template = (args, { argTypes }) => ({
    components: { Button },
    props: Object.keys(argTypes),
    template: '<a-button :type="type" @click="click" >{{text}}</a-button>',
  });

  export const Primary = Template.bind({});   //export 导出的组件，展示在页面上，上述Template没有导出故没有显示
  Primary.args = {
    type:'primary',
    text: "aaa",
    click:()=>{alert('save!')}
  };