module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/giphy-app/" : "/",
  lintOnSave: process.env.NODE_ENV !== "production"
};
