import { PaginatedFormatReturn } from "ahooks/lib/useAntdTable";
import { defaultResponseProps } from "./interface";

export const defaultResponseAdapter = <T extends object>(res: defaultResponseProps<T>) => {
	return {
		list: res.list,
		total: res.totalCount
	} as PaginatedFormatReturn<T>;
};