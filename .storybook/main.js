const custom = require('../node_modules/@vue/cli-service/webpack.config.js');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
    // "../src/**/**/*.mdx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-docs'
  ],
  "framework": "@storybook/vue",
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    // Return the altered config
    return config;
  },
}