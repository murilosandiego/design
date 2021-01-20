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
    }
  ],
  stories: [
    "../src/**/*.stories.@(mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
};
