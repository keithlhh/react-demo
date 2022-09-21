

const { appRoot, appPublicUrl, appPublic, appSrc, appAssets, appBuild, appNodeModules } = require('./paths.js');
const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getClientEnvironment = require('./env');

module.exports = {
	entry: path.resolve(appRoot, "src/index.tsx"),
	output: {
		path: appBuild,
		filename: "js/[name].[hash:8].js", // 导出的文件名
		chunkFilename: "js/[name].[hash:8].js", // 异步加载模块打包的文件名
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				include: appSrc,
				exclude: appNodeModules,
				use: [
					"cache-loader",
					{
						loader: "babel-loader",
						options: {
							cacheDirectory: true,
							presets: [
								"@babel/preset-env",
								"@babel/preset-react",
								"@babel/preset-typescript",
							],
							plugins: [
								"@babel/plugin-proposal-export-namespace-from",
								"@babel/plugin-syntax-dynamic-import",
								...(process.env.NODE_ENV === 'development' ? ['react-hot-loader/babel'] : []),
								["import", {
									"libraryName": "antd",
									"libraryDirectory": "lib",  // libraryDirectory 默认为 lib
									"style": false ,
								}]
							]
						},
					},
				],
			},
			{
				test: /\.scss$/,
				include: appSrc,
				exclude: appNodeModules,
				oneOf: [
					{
						resourceQuery: /modules/,
						use:  [
							process.env.NODE_ENV === 'development'
								? "style-loader"
								: MiniCssExtractPlugin.loader,
							{
								loader: "css-loader",
								options: {
									modules: {
										localIdentName: '[local]--[hash:base64:5]',
									},
								},
							},
							{
								loader: "postcss-loader",
								options: {
									ident: "postcss",
									// 兼容不同浏览器
									plugins: () => [
										require("postcss-flexbugs-fixes"),
										require("postcss-preset-env")({
											autoprefixer: {
												// 加前缀
												flexbox: "no-2009",
											},
											stage: 3,
										})
									],
								},
							},
							"sass-loader",
						]
					},
					{
						use: [
							process.env.NODE_ENV === 'development'
								? "style-loader"
								: MiniCssExtractPlugin.loader,
							"css-loader",
							{
								loader: "postcss-loader",
								options: {
									ident: "postcss",
									// 兼容不同浏览器
									plugins: () => [
										require("postcss-flexbugs-fixes"),
										require("postcss-preset-env")({
											autoprefixer: {
												// 加前缀
												flexbox: "no-2009",
											},
											stage: 3,
										})
									],
								},
							},
							"sass-loader",
							{
								loader: path.resolve('./config/loaders/demo.js'),
								options: {}
							},
							{
								loader: path.resolve('./config/loaders/demo.js'),
								options: {
									aaa: '1334'
								}
							},
						]
					}
				],
			},
			{
				test: /\.css$/,
				include: appSrc,
				exclude: appNodeModules,
				use: [
					process.env.NODE_ENV === 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader"
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i, // 图片文件
				include: appSrc,
				exclude: appNodeModules,
				use: [
					'cache-loader',
					{
						loader: "url-loader",
						options: {
							limit: 10240, // 小于该值大小的图片将转为base64使用
							outputPath: "assets",
							fallback: {
								loader: "file-loader",
								options: {
									name: "[name].[hash:8].[ext]",
								},
							},
						},
					},
				],
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, // 媒体文件
				include: appAssets,
				exclude: appNodeModules,
				use: [
					'cache-loader',
					{
						loader: "url-loader",
						options: {
							limit: 10240,
							fallback: {
								loader: "file-loader",
								options: {
									name: "media/[name].[hash:8].[ext]",
								},
							},
						},
					},
				],
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
				include: appAssets,
				exclude: appNodeModules,
				use: [
					'cache-loader',
					{
						loader: "url-loader",
						options: {
							limit: 10240,
							fallback: {
								loader: "file-loader",
								options: {
									name: "fonts/[name].[hash:8].[ext]",
								},
							},
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts",".js"],
		alias: appPublicUrl,
	},
	plugins: [
		new WebpackBar(),
		new HtmlWebpackPlugin({
			template: path.resolve(appPublic, "index.html"),
			favicon: path.resolve(appPublic, "favicon.png"), // 设置ico
		}),
		new CleanWebpackPlugin(),
		// 设置全局环境变量
		new webpack.DefinePlugin(getClientEnvironment()),
	],
};
