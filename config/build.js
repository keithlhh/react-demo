process.env.NODE_ENV = 'production'

const ora = require('ora');
const rm = require('rimraf');
const chalk = require('chalk');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config.prod');
const { appBuild } = require('./paths.js');
const spinner = ora('building for production...')
spinner.start()

rm(path.join(appBuild, 'static'), err => {
	if (err) throw err;
	webpack(webpackConfig, async (err, stats) => {
		spinner.stop();
		if (err) throw err;
		process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: true, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
		}) + '\n\n')

		if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
		}
		console.log(chalk.cyan('  项目构建完成.\n'))
	});
});

