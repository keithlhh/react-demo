
# 项目目录说明

	--config webpack配置相关
		--paths 可配置项目中使用的别名 appPublicUrl

	--docs 项目规范等说明文档

	--examples  模板文件示例（可删除）

	--public 公共静态文件

	--src 项目代码

		--assets 静态资源
			--font 字体图标 --可选
			--style 公共样式库 --可选
			--images  静态图片（图片以英文驼峰命名）--可选
			--media 媒体文件 --可选

		--components  公共非业务组件

		--constants
			--index.ts  常量定义文件

		// 业务组件？？？？

		--pages  所有页面级代码
			--Home -- 板块/页面
				--components --板块/页面(公共)组件
				-- index.module.scss
				-- index.tsx

		--stores   store的定义

		--types  typescript声明

		--utils  工具方法库（统一在index.ts中导出）
			--index.ts

		--index.scss  全局公共样式文件（外部样式库统一在此文件中导入）

		--index.tsx  入口文件


# 【强制】样式命名规范。尽量多使用全局样式。

	* 公用组件：`c-(功能)-（结构）`;`c-modal`,内部：`(模块)`;`title`
	* 全局样式：以 `r-` 开头，参考【@rayclound/sass】README.md
	* 公共样式：以 `g-` 开头

# 字体图标

	* 统一先采用@ant-design/icons的字体图标


# 【强制】目录及文件命名

	*页面级目录
		>组件文件夹： 大驼峰命名
			主文件： index.tsx
			scss文件：index.scss
			ts文件： index.ts
		>子组件：
			当前目录下新建components文件夹，再包含子组件，命名同页面级目录

	*静态图片命名：全英文+ 驼峰
		logo.png
		homeLogo.png
		...

# 【强制】常量的命名

	统一大写，以单下划线_连接

	```
		export const 'BASE_URL': 'https://***.com';
	```

# 注释：

	方法名前要增加注释说明该方法的用途



# 开发规范

	参考文章： https://juejin.im/post/6844903842392309768

	ts语法

	commit and change.log编写规范：
	http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html



# 环境变量配置

	*在config/env目录下增加自己的环境变量（也是全局常量）
	*除指定文件名称之外的，统一以 `APP_` 开头
	*设置完成之后需重启项目生效
	*使用时如遇 ts报错，请检查该常量是否有声明 -- types/**

# 【强制】api名字以Api结尾
例如：getUserInfo -> getUserInfoApi
