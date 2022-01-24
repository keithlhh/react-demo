import { RouteType } from '@/types/schemas/index';
import TradePage from '@/pages/Trade';

const tradeRoutes: RouteType[] = [
	{
		path: "/trade",
		exact: true,
		component: TradePage,
	}
];

export default tradeRoutes;