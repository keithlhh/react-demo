module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: "airbnb",
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react", "react-hooks", "jsx-a11y"],
	rules: {
		"no-use-before-define": 0,
		"react/prop-types": 0,
		"react/jsx-indent-props": [2, "tab"],
		"react/require-default-props": 0,
		// 检查 Hook 的规则
		"react-hooks/rules-of-hooks": "error",
		// 检查 effect 的依赖
		"react-hooks/exhaustive-deps": "warn",
		// 禁止在setstate中使用setstate
		"react/no-access-state-in-setstate": 0,
		// 防止多行JSX周围缺少括号
		"react/jsx-wrap-multilines": 1,
		// 非点击元素也可以使用点击事件
		"jsx-a11y/no-noninteractive-element-interactions": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"jsx-a11y/label-has-associated-control": 0,
		// 验证JSX左括号和右括号中和周围的空格
		"react/jsx-tag-spacing": [
			1,
			{
				closingSlash: "never",
				beforeSelfClosing: "always",
				afterOpening: "never",
			}
		],
		"react/jsx-props-no-spreading": 0,
		"react/jsx-props-no-multi-spaces": 1, // 在内联JSX道具之间禁止使用多个空格
		"react/jsx-equals-spacing": [1, "never"], // 强制或禁止JSX属性中等号周围的空格
		"react/jsx-curly-spacing": ["warn", "always"],
		"react/no-array-index-key": "warn",
		// 换行的限制
		"react/jsx-one-expression-per-line": 0,
		// 解构分配
		"react/destructuring-assignment": 0,
		"react/no-unused-prop-types": 0,
		// 格式
		"react/jsx-indent": [2, "tab"],

		// 允许jsx的文件名
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".ts", ".tsx", ".js", ".jsx"],
			}
		],

		// 禁止使用多个空格
		"no-multi-spaces": ["error"],
		// js中缩进 提示类型 warn，缩进类型 tab 缩进
		indent: [
			"warn",
			"tab",
			{
				SwitchCase: 1,
			}
		],
		// 关键字周围强制使用空格
		"keyword-spacing": [
			"error",
			{
				before: true,
				after: true,
			}
		],
		// 大括号中强制使用空格
		"object-curly-spacing": ["warn", "always"],
		// 单行代码块前后要加空格
		"block-spacing": ["warn", "always"],
		// 逗号后面加空格
		"comma-spacing": [
			"warn",
			{
				before: false,
				after: true,
			}
		],
		// 分号后面加空格
		"semi-spacing": [
			"warn",
			{
				before: false,
				after: true,
			}
		],
		// 在注释前有空白
		"spaced-comment": ["warn", "always"],
		// 箭头函数前后要有空格
		"arrow-spacing": [
			"warn",
			{
				before: true,
				after: true,
			}
		],
		// 对象字面量的属性中键和值之间使用一致的间距 （冒号后）
		"key-spacing": [
			"warn",
			{
				beforeColon: false,
				afterColon: true,
			}
		],
		// 要求操作符周围有空格
		"space-infix-ops": [
			"warn",
			{
				int32Hint: false,
			}
		],
		// 要求或禁止末尾逗号
		"comma-dangle": [
			"warn",
			{
				arrays: "never",
				objects: "ignore",
				imports: "never",
				exports: "never",
				functions: "ignore",
			}
		],
		// 不强制使用骆驼拼写法命名约定
		camelcase: 0,
		// 不强制尽可能地使用点号
		"dot-notation": 0,
		// 要求调用无参构造函数时带括号(new- parens)
		"new-parens": ["warn"],
		"space-in-parens": ["error", "never"],
		"space-before-blocks": ["error", "always"],
		// 禁止空格和 tab 的混合缩进
		"no-mixed-spaces-and-tabs": [
			"warn",
			"smart-tabs" // 允许空格用来对齐
		],
		// { a, b, c } 允许不换行
		"object-curly-newline": 0,
		// 不规定箭头函数体的样式
		"arrow-body-style": 0,
		// a => 1 同上
		"arrow-parens": 0,
		// "a-1": 2 不要求对象字面量属性名称用引号括起来
		"quote-props": 0,
		// xx.hasOwnProperty(key)  不要求for循环中有if语句；
		"guard-for-in": 0,
		// 不禁用特定的语法
		"no-restricted-syntax": 0,
		// 不要求 require() 出现在顶层模块作用域中
		"global-require": 0,
		// 不要求使用 === 和 !==;
		eqeqeq: 0,
		// 不禁用一元操作符 ++ 和 --
		"no-plusplus": 0,
		// 不禁止出现未使用过的表达式
		"no-unused-expressions": 0,
		// 不禁用未声明的变量，除非它们在 /*global */ 注释中被提到
		"no-undef": 0,
		// 不禁止出现未使用过的变量
		"no-unused-vars": 0,
		// eslint-plugin-import 插件相关 https://github.com/benmosher/eslint-plugin-import
		"import/no-extraneous-dependencies": 0,
		"import/prefer-default-export": 0,
		"import/newline-after-import": ["warn"],
		"import/first": 1,
		"import/no-unresolved": 0,
		"import/extensions": 0,
		// 不禁止出现多行空行
		"no-multiple-empty-lines": 0,
		// 不禁用特定的全局变量
		"no-restricted-globals": 0,
		// 不禁止对 function 的参数进行重新赋值
		"no-param-reassign": 0,
		// 不要求 return 语句要么总是指定返回的值，要么不指定
		"consistent-return": 0,
		// 不禁止多余的 return 语句
		"no-useless-return": 0,
		// 不要求使用 const 声明那些声明后不再被修改的变量
		"prefer-const": 0,
		// 不禁止 if 语句中 return 语句之后有 else 块
		"no-else-return": 0,
		// 设置样式块中的末尾不出现分号  style-lint
		// "declaration-block-trailing-semicolon": true,
		// 要求或禁止使用命名的 function 表达式
		"func-names": 0,
		// 不要求回调函数使用箭头函数
		"prefer-arrow-callback": 0,
		// 不禁用按位运算符
		"no-bitwise": 0,
		// 不要求或禁止块内填充
		"padded-blocks": 0,
		// {} 允许空行
		"no-return-assign": 0,
		// 强制一行的最大长度
		"max-len": [
			"warn",
			{
				code: 200,
				ignoreComments: true, // 忽略所有拖尾注释和行内注释
			}
		],
		// 不设置优先使用数组和对象解构
		"prefer-destructuring": 0,
		// 函数名称或function关键字与开始参数之间允许有空格
		"space-before-function-paren": ["error", "never"],
		// 不要求使用模板字面量而非字符串连接
		"prefer-template": 0,
		// 不禁用嵌套的三元表达式
		"no-nested-ternary": 0,
		// 不要求使用剩余参数而不是 arguments
		"prefer-rest-params": 0,
		// 不强制类方法使用 this
		"class-methods-use-this": 0,
		// 不禁用tab
		"no-tabs": 0,
		// 不强制使用一致的反勾号、双引号或单引号
		quotes: 0,
		// 不禁用 console
		"no-console": 0,
		// 禁用 debugger
		"no-debugger": 1,
		// 要求使用 let 或 const 而不是 var
		"no-var": 1,
		"import/named": 0,
		// 要求使用分号代替 ASI(浏览器js引擎的 自动分号插入机制)，也就是要求补全分号；
		semi: [1, "always"],
		// 不禁用行尾空格
		"no-trailing-spaces": 0,
		// 不要求或禁止文件末尾存在空行
		"eol-last": 0,
		// 不禁止标识符中有悬空下划线
		"no-underscore-dangle": 0,
		// 不禁用 alert、confirm 和 prompt
		"no-alert": 0,
		// 不禁用不必要的嵌套块
		"no-lone-blocks": 0,
		"no-shadow": "off"
	},
};
