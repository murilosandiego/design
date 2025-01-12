const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const webpackFinal = async (config) => {
  config.resolve.plugins.push(new TsconfigPathsPlugin({}));
  return config;
};

module.exports = {
  addons: [
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    {
      name: "@storybook/addon-a11y"
    },
    {
      name: "@storybook/addon-backgrounds"
    },
    {
      name: "@storybook/addon-viewport"
    }
  ],
  stories: [
    "../src/**/*.stories.@(mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  webpackFinal
};
