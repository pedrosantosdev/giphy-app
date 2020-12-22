module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/giphy-app/" : "/",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV !== "production"
};
