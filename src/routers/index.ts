import { RouteType } from '@/types/schemas/index';
import HomePage from '@/pages/Index/index';

const indexRoutes: RouteType[] = [
	{
		path: "/",
		exact: true,
		component: HomePage,
	}
];

export default indexRoutes;