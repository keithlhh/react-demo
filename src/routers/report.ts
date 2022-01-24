import { RouteType } from '@/types/schemas/index';
import ReportPage from '@/pages/Report';

const reportRoutes: RouteType[] = [
	{
		path: "/report",
		exact: true,
		component: ReportPage,
	}
];

export default reportRoutes;