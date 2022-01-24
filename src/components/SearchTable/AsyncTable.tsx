import React, { useMemo } from 'react';
import _ from 'lodash';
import { PaginatedFormatReturn, PaginatedParams } from 'ahooks/lib/useAntdTable';
import { TablePaginationConfig, TableProps } from 'antd';
import { useRequest } from 'ahooks';
import BaseTable from './BaseTable';
import { defaultResponseAdapter } from './utils';
import { defaultResponseProps } from './interface';

export interface AsyncTableProps<T, P, R = defaultResponseProps<T>> extends TableProps<T> {
    fetchData: (p: P) => Promise<R>;
    responseAdapter?: (res: R) => PaginatedFormatReturn<T>;
}

function AsyncTable<
    T extends object = any,
    P extends object = any,
    R extends object = defaultResponseProps<T>
>(props: AsyncTableProps<T, P, R>) {
	const { fetchData, responseAdapter, ...tableProps } = props;
	const defaultPagination = useMemo<TablePaginationConfig>(
		() => ({
			total: 0,
			defaultPageSize: 10,
			defaultCurrent: 10,
			showQuickJumper: true,
			showSizeChanger: true,
		}),
		[],
	);
	const initialPagination = _.mergeWith(
		defaultPagination,
		tableProps.pagination,
	);
	const service = async(
		{ current, pageSize }: PaginatedParams[0],
		other: P,
	) => {
		const res = await fetchData({
			...other,
			pageNo: current,
			pageSize,
		});
		const adapterResponse = responseAdapter ? responseAdapter(res) : defaultResponseAdapter(res as defaultResponseProps<T>);
		return Promise.resolve(adapterResponse);
	};
	const { tableProps: serviceTableProps, pagination } = useRequest(service, {
		paginated: true,
		defaultPageSize: initialPagination.defaultPageSize,
	});
	return (
		<BaseTable<T>
			{ ...tableProps }
			dataSource={ serviceTableProps.dataSource }
			loading={ serviceTableProps.loading }
			pagination={ {
				...initialPagination,
				...pagination
			} }
		/>
	);
}

export default AsyncTable;
