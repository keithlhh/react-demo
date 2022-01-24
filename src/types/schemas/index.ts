export interface Base{
    [propName: string]: any
}

export interface RouteType {
	path: string;
	exact?: boolean;
	layout?: any;
	component: any;
}