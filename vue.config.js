const {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  title,
  devPort,
} = require("./src/config/settings");
const time = require("dayjs")().format("YYYY-M-D HH:mm:ss");

process.env.VUE_APP_TITLE = title || 华普;
process.env.VUE_APP_AUTHOR = "JIAOXIAOYUAN";
process.env.VUE_APP_UPDATE_TIME = time;
process.env.VUE_APP_VERSION = "1.0.0";

module.exports = {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,

  devServer: {
    port: devPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // after: mockServer(),

    // 配置多个代理
    proxy: {
      "/api": {
        target: "https://vuets-api.herokuapp.com",
        ws: true, // 是否启用websockets
        changeOrigin: true, // 开启代理
        cookiePathRewrite: {
          "^/api": "",
        },
      },
    },
  },

  runtimeCompiler: true,

  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
   *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: false,

  // 警告 webpack 的性能提示
  configureWebpack() {
    // 在webpack的name字段中提供应用程序的标题，以便
    // 可以在index.html中访问它来插入正确的标题。
  },

  // webpack配置
  chainWebpack() {},

  // css相关配置
  css: {
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    requireModuleExtension: true,

    // 是否开启 CSS source map？
    sourceMap: true,

    // 为预处理器的 loader 传递自定义选项。
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/variables.scss";',
      },
    },
  },
};
