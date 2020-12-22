module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/giphy-app/" : "/",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV !== "production",
  pwa: {
    name: "Giphy Search App",
    themeColor: "#176b6b",
    msTileColor: "#222222",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black"
  }
};
