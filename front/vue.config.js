module.exports = {
  publicPath: '/',
  assetsDir: './',
  outputDir: '../Server/static',
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      entry: "src/main.js",
      title: "炎上チェッカー"
    }
  }
}

