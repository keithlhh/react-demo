import { RouteType } from '@/types/schemas/index';
import AfterSalePage from '@/pages/AfterSale';

const afterSaleRoutes: RouteType[] = [
	{
		path: "/aftersale",
		exact: true,
		component: AfterSalePage,
	}
];

export default afterSaleRoutes;