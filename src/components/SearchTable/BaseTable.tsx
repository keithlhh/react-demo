import React, { CSSProperties, useCallback, useMemo } from "react";
import { Table, TablePaginationConfig } from "antd";
import { ColumnsType, ColumnType, TableProps } from "antd/es/table";

export type BaseColumnsType<T> = ColumnType<T> | {
	(dataSource: readonly T[]): ColumnType<T> | ColumnType<T>[]
}

export type BaseColumnsTypes<T> = BaseColumnsType<T>[]
export interface BaseTableProps<T> extends Omit<TableProps<T>, 'columns'> {
	expandContext?: React.ReactNode;
	expandContextStyle?: CSSProperties;
	columns: BaseColumnsTypes<T>
}

const defaultPagination: TablePaginationConfig = {
	total: 0,
	defaultPageSize: 10,
	defaultCurrent: 10,
	showQuickJumper: true,
	showSizeChanger: true,
	showTotal: total => `共${total}条`
};

function BaseTable<T extends object = any>(props: BaseTableProps<T>) {
	const { columns, expandContext, expandContextStyle, pagination, ...reset } = props;
	const defaultContextStyle = useMemo<CSSProperties>(
		() => ({
			display: "flex",
			justifyContent: "flex-start",
			marginBottom: "10px",
		}),
		[]
	);
	const getColumns = useCallback(() => {
		return (
			columns?.reduce((prev, item) => {
				if (typeof item === 'function') {
					const _c = item(reset.dataSource);
					if (_c instanceof Array) {
						return prev.concat(..._c);
					}
					return prev.concat(_c);
				}
				return prev.concat({
					align: 'left',
					...item
				});
			}, [])
		);
	}, [columns, reset.dataSource]);
	return (
		<>
			{
				!!expandContext && (
					<div style={ { ...defaultContextStyle, ...expandContextStyle } }>
						{expandContext}
					</div>
				)
			}
			<Table<T> size="small" bordered columns={ getColumns() } pagination={ typeof pagination === "boolean" ? pagination : { ...defaultPagination, ...pagination } } { ...reset } />
		</>
	);
}
export default BaseTable;
