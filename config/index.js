// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var api = require("../src/api/apiList");
var apiList = {};
var host = "http://localhost:3000/";
for (var i in api) {
	apiList[api[i]] = {};
	apiList[api[i]].target = host;
	apiList[api[i]].changeOrigin = true;
}
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'statics',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8099,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
