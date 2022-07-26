import MyButton from "./Button.vue";
import ButtonDoc from "./MyButton.mdx"

export default {
  title: "designsystem/Components/Button",
  component: MyButton,
  parameters: {
    docs: {
      page: ButtonDoc,
    },
  },
  // argTypes: {
  //   label: {
  //     description: 'overwritten description',
  //     table: {
  //       type: {
  //         summary: 'something short',
  //         detail: 'something really really long',
  //       },
  //       defaultValue: { summary: 'Hello' },
  //     },
  //     control: {
  //       type: null,
  //     },
  //   },
  // },
  // parameters: {
  //   docs: {
  //     description: {
  //       component: 'Some component _markdown_',
  //     },
  //   },
  // },
};

//这是vue 2.x的写法
const Template = (args, { argTypes }) => ({
  components: { MyButton },
  // props: Object.keys(argTypes),
  template: '<MyButton v-bind="$props" v-on="$props" />',
});
//通过Template.bind({})实现模板的复用以减少代码量
export const Primary = Template.bind({});   //export 导出的组件，展示在页面上，上述Template没有导出故没有显示
Primary.args = {   //将args中的参数作为默认参数传回到vue组件中
  primary: true,
  label: "PrimaryButton",
  size: "small",
  Name: ''
};
Primary.argTypes = {
  label: {
    description: 'overwritten description',
    table: {
      type: {
        summary: 'something short',
        detail: 'something really really long',
      },
      defaultValue: { summary: 'Hello' },
    },
    control: {
      type: null,
    },
  },
  Name: {
    table: {
      type: {
        summary: 'something',
        detail: 'something really really long',
      },
      defaultValue: { summary: 'Hello!' },
    },
    control: {
      type: null,
    },
  }
}


export const Secondary = Template.bind({});   //参数的个数任意
Secondary.args = {
  label: "SecondaryButton",
};
//不显示
Primary.parameters = {
  docs: {
    description: {
      story: 'Some story **markdown**',
    },
  },
};
// 显示
Secondary.parameters = {
  docs: {
    description: {
      story: 'Some story **markdown**',
    },
    //自定义代码块
    // source: {
    //   code: 'Your code snippet goes here.',
    //   language: "yml",
    //   type: "auto",
    // },
  },
};