import { RouteType } from '@/types/schemas/index';
import WarehousePage from '@/pages/Warehouse';

const warehouseRoutes: RouteType[] = [
	{
		path: "/warehouse",
		exact: true,
		component: WarehousePage,
	}
];

export default warehouseRoutes;