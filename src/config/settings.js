module.exports = {
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  // 例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
  // baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

  // 生产环境构建文件的目录名
  outputDir: "./dist",

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",

  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,

  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,

  // 进行编译的依赖
  transpileDependencies: ["vue-echarts", "resize-detector"],

  // 标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
  title: "药友制药",

  // 简写
  abbreviation: "vab",

  // 开发环境端口号
  devPort: "8080",

  // 版本号
  version: process.env.VUE_APP_VERSION,

  // 烦请保留package.json作者信息 如需去除请联系群主QQ 1204505056 需支付299元 恶意修改发生纠纷及出现任何问题 由修改人自行承担
  copyright: process.env.VUE_APP_AUTHOR,

  // 不经过token校验的路由
  routesWhiteList: ["/login", "/404", "/401"],

  // 加载时显示文字
  loadingText: "正在加载中...",

  // token名称
  tokenName: "accessToken",

  // token表名
  tokenTableName: "VUE-TABLE",

  // token存储位置localStorage sessionStorage cookie
  storage: "localStorage",

  // 是否显示logo
  logo: true,

  // 是否国定头部 固定fixed 不固定noFixed
  header: "fixed",

  // 横纵布局 horizontal vertical
  layout: "vertical",

  // 是否开启主题配置按钮
  themeBar: true,

  // 是否显示多标签页
  tagsBar: true,

  // 是否显示骨架屏
  skeleton: false,

  // 配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: "application/json;charset=UTF-8",

  // 消息框消失时间
  messageDuration: 3000,

  // 最长请求时间
  requestTimeout: 5000,

  // 操作正常code
  successCode: 200,

  // 登录失效code
  invalidCode: 402,

  // 无权限code
  noPermissionCode: 401,

  // 是否显示在页面高亮错误
  errorLog: ["development", "test", "production"],

  // 设置生产环境是否屏蔽f12等开发组工具快捷键
  shieldF12: false,

  // 是否开启登录拦截
  loginInterception: true,

  // 是否开启登录RSA加密
  loginRSA: false,

  // 是否依据mock数据生成webstorm HTTP Request请求文件
  httpRequestFile: false,

  // intelligence和all两种方式，前者后端权限只控制permissions不控制view文件的import（前后端配合，减轻后端工作量），all方式完全交给后端前端只负责加载
  authentication: "intelligence",

  // vertical布局时是否只保持一个子菜单的展开
  uniqueOpened: true,

  // vertical布局时默认展开的菜单path，使用逗号隔开建议只展开一个
  defaultOopeneds: ["/byui"],

  // 需要加loading层的请求，防止重复提交
  debounce: ["doEdit"],
};
