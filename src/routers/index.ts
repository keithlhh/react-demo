import { RouteType } from '@/types/schemas/index';
import HomePage from '@/pages/Index/index';
import LifeCyclePage from '@/pages/Index/lifeCycle';
import ContextPage from '@/pages/Index/contextPage';

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
	},
	{
		path: "/context",
		exact: true,
		component: ContextPage,
	}
];

export default indexRoutes;