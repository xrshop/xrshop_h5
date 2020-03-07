/* eslint-disable no-param-reassign */
module.exports = {
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => {
        options.limit = 127;
        return options;
      });
  },
};
