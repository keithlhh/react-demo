import { RouteType } from '@/types/schemas/index';
import HomePage from '@/pages/Index/index';
import LifeCyclePage from '@/pages/Index/lifeCycle';

const indexRoutes: RouteType[] = [
	{
		path: "/",
		exact: true,
		component: HomePage,
	},
	{
		path: "/lifeCycle",
		exact: true,
		component: LifeCyclePage,
	}
];

export default indexRoutes;