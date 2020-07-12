const webpack = require('webpack');
const path = require('path');
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css'];

module.exports = {
	publicPath:'./',
	runtimeCompiler: true,
	productionSourceMap: false, //打包后是否生成map文件
	devServer: {
		port:8080,
		host:'localhost',
		open: true, //配置自动启动浏览器
	},
	//gzip配置
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			config.plugins.push(new CompressionWebpackPlugin({
				algorithm: 'gzip',
				test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
				threshold: 10240,
				minRatio: 0.8
			}))

			//去除控制台的打印信息
			//config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true

		}
	},
}
