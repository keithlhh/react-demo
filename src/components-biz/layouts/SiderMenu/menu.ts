import MenuBean, { MenuType } from "./menuBean";

export const menuData: MenuBean[] = [
	{
		name: '首页',
		path: '/',
		type: MenuType.Item
	},
	{
		name: '交易',
		path: '/trade',
		type: MenuType.Item
	},
	{
		name: '仓储',
		path: '/warehouse',
		type: MenuType.Item
	},
	{
		name: '报表',
		path: '/report',
		type: MenuType.Item
	},
	{
		name: '售后',
		path: '售后',
		type: MenuType.SubMenu,
		children: [
			{
				name: '售后',
				path: '/aftersale',
				type: MenuType.Item
			}
		]
	}
];
