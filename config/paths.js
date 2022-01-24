
'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
	appRoot: resolveApp("."),
	appSrc: resolveApp("src"),
	appBuild: resolveApp("dist"),
	appPublic: resolveApp("public"),
	appHtml: resolveApp("public/index.html"),
	appPackageJson: resolveApp("package.json"),
	appNodeModules: resolveApp("node_modules"),
	appAssets: resolveApp("src/assets"),

	// 自定义别名
	appPublicUrl: {
		"@": resolveApp("src"),
		"@raycloud/sass": resolveApp('node_modules/@raycloud/sass/index.min.css')
	},
};
