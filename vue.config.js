module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' && !process.env.DOCKER
      ? '/giphy-app/'
      : '/',
  assetsDir:
    process.env.NODE_ENV === 'production' && !process.env.DOCKER
      ? 'static'
      : '',
  lintOnSave: process.env.NODE_ENV !== 'production',
  pwa: {
    name: 'Giphy Search App',
    themeColor: '#176b6b',
    msTileColor: '#222222',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Giphy Search App';
      return args;
    });
  }
};
