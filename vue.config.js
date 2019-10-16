const path = require("path")
/**
 * 本地代理服务器配置
 * @devApiUrl 服务器地址
 * @devApiPort 服务器端口
 */
const devApiUrl = "ts-www.luckyins.com"
/**
 * VUE-CONFIG
 * 包括vue项目本身配置，以及webpack基本及扩展配置
 */
module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  publicPath: './',
  // build 生产环境文件放置目录
  outputDir: '../www',
  // 以下路径配置皆相对于outputDir
  // build 生产环境静态资源目录
  assetsDir: 'assets',
  // build 生成的index.html 输出路径
  indexPath: 'index.html',
  // 以上路径配置皆相对于outputDir
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html"
    }
  },
  //可以在正式环境下关闭错误报告 console.log...
  configureWebpack: config => { 
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  css: {
    loaderOptions: {
      /**
       * 配置vue组件内style标签样式的px->rem
       */
      postcss: {
        plugins: [
          // require('postcss-pxtorem')({ // 把px单位换算成rem单位
          //   rootValue: 75, // 换算的基数(设计图750的根字体为75)
          //   // selectorBlackList: ['md'], // 忽略转换正则匹配项
          //   propList: ['*']
          // })
        ]
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          enforce: "pre",
          exclude: /node_modules/,
          use: {
            loader: "eslint-loader",
            options: {
              formatter: require("eslint-friendly-formatter")
            }
          }
        },
        {
          test: /\.styl(us)?$/,
          use: [
            {
              loader: "stylus-loader",
              options: {
                data: ""
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.common.js",
        public: path.join(__dirname, "public"),
        static: path.join(__dirname, "public/static"),
        "@": path.join(__dirname, "src/views/"),
        assets: path.join(__dirname, "src/assets"),
        coms: path.join(__dirname, "src/components")
      },
      extensions: [".js", ".vue", ".json", ".css", ".node", ".styl"]
    }
  },
  // 代理服务
  devServer: {
    port: 8080,
    // host: '127.0.0.1',
    proxy: {
      "/api": {
        target: "https://" + devApiUrl + "",
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
}
