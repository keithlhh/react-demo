import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import styles from "./index.scss";
import { menuData } from "./menu";
import MenuBean, { MenuType } from "./menuBean";

const { Sider } = Layout;
const { SubMenu } = Menu;
const { ItemGroup } = Menu;

const getNavMenuItems = (menusData: MenuBean[]) => {
	if (!menusData) {
		return [];
	}
	return menusData.map((item) => {
		let view = null;
		switch (item.type) {
			case MenuType.SubMenu:
				view = (
					<SubMenu title={ item.name } key={ item.path }>
						{getNavMenuItems(item.children)}
					</SubMenu>
				);
				break;
			case MenuType.ItemGroup:
				view = (
					<ItemGroup title={ item.name } key={ item.name }>
						{getNavMenuItems(item.children)}
					</ItemGroup>
				);
				break;
			case MenuType.Item:
				view = (
					<Menu.Item key={ item.path }>
						<Link to={ item.path }>{item.name}</Link>
					</Menu.Item>
				);
				break;
			case MenuType.Url:
				view = (
					<Menu.Item key={ item.path }>
						<a href={ item.path } target="_blank" rel="noreferrer">
							{item.name}
						</a>
					</Menu.Item>
				);
				break;
			default:
				view = (
					<Menu.Item key={ item.path }>
						<Link to={ item.path }>{item.name}</Link>
					</Menu.Item>
				);
				break;
		}
		return view;
	});
};

export interface SideMenuProps {}
interface SelectInfo {
	selectedKeys: string[];
	keyPath: string[]
}

const SiderMenu: React.FC<SideMenuProps> = (props) => {
	const location = useLocation();
	const [openKeys, updateOpenKeys] = useState<string[]>([]);
	const [selectedKeys, updateSelectedKeys] = useState<string[]>();

	const handleOpenChange = (openKeys: string[]) => {
		updateOpenKeys(openKeys);
	};

	const onSelect = (options: SelectInfo) => {
		const { selectedKeys, keyPath } = options;
		updateOpenKeys([keyPath[keyPath.length - 1]]);
		updateSelectedKeys(selectedKeys);
	};

	useEffect(() => {
		for (let i = 0; i < menuData.length; i++) {
			if (location.pathname == '/') {
				updateOpenKeys([]);
				updateSelectedKeys([menuData[0].path]);
				break;
			} else if (location.pathname.includes(menuData[i].path)) {
				console.log(menuData[i], 'menu');
				updateOpenKeys([]);
				updateSelectedKeys([menuData[i].path]);
				break;
			} else if (menuData[i].children) {
				const item = menuData[i].children.find(it => location.pathname.includes(it.path));
				if (item) {
					updateOpenKeys([menuData[i].path]);
					updateSelectedKeys([item.path]);
					break;
				}
			}
		}
	}, []);

	return (
		<Sider
			theme="dark"
			trigger={ null }
			collapsible={ false }
			width={ 256 }
			className={ styles.sider }
		>
			<Menu
				key="Menu"
				theme="dark"
				mode="inline"
				openKeys={ openKeys }
				selectedKeys={ selectedKeys }
				onSelect={ onSelect }
				onOpenChange={ handleOpenChange }
			>
				{getNavMenuItems(menuData)}
			</Menu>
		</Sider>
	);
};
export default SiderMenu;
