export default interface MenuBean {
    name: string;
    path?: string;
    key?: string;
    type?: MenuType;
    hideInMenu?: boolean;
    children?: MenuBean[];
}
export enum MenuType {
    SubMenu = 'SubMenu',
    ItemGroup = 'ItemGroup',
    Item = 'Item',
    Url = 'url',
}