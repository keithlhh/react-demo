


const { resolve } = require("path");
const fs = require("fs-extra");

// 声明文件目录
const DeclareFileDir = resolve(__dirname,"../src/types" );

// 声明文件
const DeclareFileName = "APP-ENV.d.ts";

// 创建环境变量的声明文件;
function setEnvDeclare(content){
	// 读取
	let files = fs.readdirSync(DeclareFileDir);

	// 完整路径
	let fullpath = `${DeclareFileDir}/${DeclareFileName}`;
	// 判断文件是否存在
	if (files.includes(DeclareFileName)) {
		// 删除声明文件
		fs.unlinkSync(fullpath);
	}
	fs.outputFileSync(fullpath, getDeclareFileData(content));
}

// 获取要写入声明文件的内容
function getDeclareFileData(content) {
	let data = Object.keys(content).reduce((str, key )=> {
		return str + `declare const ${key}: string;\n\n`;
	}, '');
	return data;
}

/**
 *  获取自定义的环境变量
 * */

const START_APP = /^APP_/;

function getClientEnvironment() {
	const stringified = Object.keys(process.env)
		.filter((key) => START_APP.test(key))
		.reduce((env, key) => {
			env[key] = JSON.stringify(process.env[key]);
			return env;
		}, {});
	// 创建环境变量的声明文件
	setEnvDeclare(stringified);

	return {
		'process.env': stringified
	};
}

module.exports = getClientEnvironment;
