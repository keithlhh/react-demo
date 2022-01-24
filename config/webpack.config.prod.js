const webpackConfig = require('./webpack.config.js');
const { merge } = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const speedPlugin = require('speed-measure-webpack-plugin')
// const smp = new speedPlugin();

module.exports = merge(webpackConfig, {
	mode: "production",
	devtool: false,
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].[hash].css",
			chunkFilename: "css/[id].[hash].css",
		}),
	],
	optimization: {
		minimizer: [
			// 压缩js
			new TerserPlugin({
				terserOptions: {
					parse: {
						ecma: 8,
					},
					compress: {
						ecma: 5,
						warnings: false,
						comparisons: false,
						inline: 2,
					},
					mangle: {
						safari10: true,
					},
					keep_classnames: true,
					keep_fnames: true,
					output: {
						ecma: 5,
						comments: false,
						ascii_only: true,
					},
				},
				parallel: true,
				sourceMap: false,
			}),

			// 压缩css
			new OptimizeCssAssetsPlugin({}),
		],
	},
	// 警告 webpack 的性能提示
	performance: {
		hints: "warning",
		// 入口起点的最大体积
		maxEntrypointSize: 50000000,
		// 生成文件的最大体积
		maxAssetSize: 30000000,
		// 只给出 js 文件的性能提示
		assetFilter: function (assetFilename) {
			return assetFilename.endsWith(".js");
		},
	},
});
