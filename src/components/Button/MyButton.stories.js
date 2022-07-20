import MyButton from "./Button.vue";

export default {
  title: "design system/Components/Button",
  component: MyButton,
};

//这是vue 2.x的写法
const Template = (args, { argTypes }) => ({
  components: { MyButton },
  props: Object.keys(argTypes),
  template: '<my-button v-bind="$props" v-on="$props" />',
});
//通过Template.bind({})实现模板的复用以减少代码量
export const Primary = Template.bind({});   //export 导出的组件，展示在页面上，上述Template没有导出故没有显示
Primary.args = {   //将args中的参数作为默认参数传回到vue组件中
  primary: true,
  text: "aaa",
  label: "PrimaryButton",
  size: "small",
};

export const Secondary = Template.bind({});   //参数的个数任意
Secondary.args = {
  label: "SecondaryButton",
};