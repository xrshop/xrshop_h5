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
  // devServer: {
  //   disableHostCheck: true,
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.18.123:6601/', // 目标接口域名
  //       changeOrigin: true, // 是否跨域
  //     },
  //   },
  // },
};
