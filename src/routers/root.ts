import afterSaleRoute from './aftersale';
import indexRoute from './index';
import reportRoute from './report';
import tradeRoute from './trade';
import warehouseRoute from './warehouse';
import { RouteType } from '@/types/schemas/index';

const routes: RouteType[] = [
	...indexRoute,
	...afterSaleRoute,
	...reportRoute,
	...tradeRoute,
	...warehouseRoute
];

export default routes;
