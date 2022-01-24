/* eslint-disable react/require-default-props */
import React, { CSSProperties, useImperativeHandle, useMemo } from "react";
import { Button, Card, Form, FormInstance } from "antd";
import { useAntdTable } from "ahooks";
import { TablePaginationConfig, TableProps } from "antd/es/table";
import { FormItemProps } from "antd/es/form";
import { RowProps } from "antd/es/row";
import { ColProps } from "antd/es/col";
import { PaginatedParams } from "ahooks/lib/useAntdTable";
import BaseTable, { BaseTableProps } from "./BaseTable";
import FormWidthRow, { RowFormProps } from "./FormWidthRow";
import { defaultResponseProps } from "./interface";
import { defaultResponseAdapter } from "./utils";

interface Result<T> {
	total: number;
	list: T[];
}

export interface ChangeDataProps<T> {
	total: number
	dataSource: T[]
	pageNo: number
	pageSize: number
}
interface SearchTableProps<T, R, P> {
	form: FormInstance;
	baseTableConfig: BaseTableProps<T>;
	fetchData: (p: P) => Promise<R>;
	rowFormConfig?: RowFormProps;
	responseAdapter?: (res: R) => Result<T>;
	searchBtnText?: string;
	resetBtnText?: string;
	showSearch?: boolean
	showCard?: boolean
	onChange?: (data: ChangeDataProps<T>) => void
}

export interface SearchTableRefProps {
	submit: () => void
	reset: () => void
}

type SearchTableContextProps = {
	submit:() => void,
	reset: () => void,
}

export const SearchTableContext = React.createContext<SearchTableContextProps>({
	
} as SearchTableContextProps);

function InternalSearchTable<
	T extends object = any,
	R extends object = any,
	P extends object = any
>(props: SearchTableProps<T, R, P>, ref: React.Ref<SearchTableRefProps>) {
	const {
		form,
		baseTableConfig,
		rowFormConfig,
		fetchData,
		responseAdapter,
		searchBtnText = "查询",
		resetBtnText = "重置",
		showSearch = true,
		showCard = false
	} = props;
	const defaultPagination = useMemo<TablePaginationConfig>(
		() => ({
			total: 0,
			defaultPageSize: 10,
			defaultCurrent: 10,
			showQuickJumper: true,
			showSizeChanger: true,
			showTotal: total => `共${total}条`
		}),
		[]
	);
	const defaultLayout = useMemo<{
		rowProps: RowProps;
		colProps: ColProps;
	}>(
		() => ({
			rowProps: {
				gutter: 24,
			},
			colProps: {
				xs: 24,
				sm: 12,
				md: 8,
				lg: 6,
				xl: 6,
				xxl: 6,
			},
		}),
		[]
	);
	const initialPagination = {
		...defaultPagination,
		...baseTableConfig.pagination,
	};
	const initialFormLayout = {
		rowProps: rowFormConfig?.rowProps || defaultLayout.rowProps,
		colProps: rowFormConfig?.colProps || defaultLayout.colProps,
	};

	const getTableData = async(
		{ current, pageSize }: PaginatedParams[0],
		formData: P
	) => {
		const res = await fetchData({
			pageNo: current,
			pageSize,
			...formData,
		});
		
		const adapterResponse = responseAdapter ? responseAdapter(res) : defaultResponseAdapter(res as defaultResponseProps<T>);
		return Promise.resolve(adapterResponse);
	};
	const { tableProps, loading, search, pagination } = useAntdTable<any, T>(
		getTableData,
		{
			defaultPageSize: initialPagination.defaultPageSize,
			form,
			onSuccess: (data, params) => {
				console.log(data, params);
				props.onChange?.({
					pageNo: params?.[0]?.current,
					pageSize: params?.[0]?.pageSize,
					total: data.total,
					dataSource: data.list
				});
			}
		}
	);
	const { submit, reset } = search;
	useImperativeHandle(ref, () => {
		return {
			submit,
			reset
		};
	}, [submit, reset]);
	const renderFormRow = () => {
		if (!rowFormConfig) {
			return; 
		}
		return (
			<FormWidthRow
				{ ...rowFormConfig }
				{ ...initialFormLayout }
				{ ...(showSearch
					? {
						fixedRightCol: (
							<Form.Item
								style={ {
									display: "flex",
									justifyContent: "flex-end",
								} }
								wrapperCol={ { span: 24 } }
							>
								<Button loading={ loading } type="primary" onClick={ submit }>
									{searchBtnText}
								</Button>
								<Button
									onClick={ reset }
									style={ { marginLeft: 16 } }
								>
									{resetBtnText}
								</Button>
							</Form.Item>
						),
					}
					: {}) }
			/>
		);
	};
	return (
		<SearchTableContext.Provider value={ { submit, reset } }>
			<Form
				form={ form }
				wrapperCol={ { span: 16 } }
				labelCol={ { span: 8 } }
				labelAlign="right"
			>  	
				{ showCard ? <Card style={ { marginBottom: 20 } } bodyStyle={ { paddingBottom: 0 } }>{renderFormRow()}</Card> : renderFormRow() }
				<BaseTable<T>
					{ ...baseTableConfig }
					dataSource={ tableProps.dataSource }
					loading={ tableProps.loading }
					pagination={ {
						...initialPagination,
						...pagination,
					} }
				/>
			</Form>
		</SearchTableContext.Provider>
	);
}

const SearchTable = React.forwardRef(InternalSearchTable) as <
	T extends object = any,
	R extends object = any,
	P extends object = any
>(
	props: SearchTableProps<T, R, P>& { ref?: React.Ref<SearchTableRefProps> },
) => React.ReactElement;

export default SearchTable;
