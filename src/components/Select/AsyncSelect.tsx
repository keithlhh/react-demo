/* eslint-disable react/require-default-props */
import { Divider, Empty, SelectProps, Tooltip } from "antd";
import Select, { RefSelectProps, SelectValue } from "antd/lib/select";
import React, { useEffect, useState, CSSProperties, useRef, useCallback } from "react";
import { ReloadOutlined, SyncOutlined } from "@ant-design/icons";
import axios, { AxiosResponse } from "axios";

interface Item {
	value: string | number;
	label: string;
}

interface Adaptor<T extends object = any> {
	(response: Array<T>): Item[];
}
interface Props<VT> extends SelectProps<VT> {
	dataSourceApi: string;
	responseAdaptor?: Adaptor;
	hideSyncBtn?: boolean;
	extraContext?: React.ReactNode;
	wrapperStyle?: CSSProperties;
}

const InternalAsyncDataSelect = <VT extends SelectValue = SelectValue>(
	{
		dataSourceApi,
		responseAdaptor,
		hideSyncBtn,
		extraContext,
		wrapperStyle,
		...props
	}: Props<VT>,
	ref: React.Ref<RefSelectProps>
) => {
	const popupContainerRef = useRef<HTMLDivElement>(null);
	const [dataSource, setDataSource] = useState<Item[]>([]);
	const [loading, setLoading] = useState(false);
	const handleResponse = useCallback((response: AxiosResponse) => {
		const { data, status } = response;
		if (status === 200) {
			return responseAdaptor ? responseAdaptor(response.data) : data;
		}
		return [];
	}, [responseAdaptor]);
	const loadData = useCallback(async() => {
		setLoading(true);
		try {
			const response = await axios.get(dataSourceApi);
			setDataSource(handleResponse(response));
		} finally {
			setLoading(false);
		}
	}, [dataSourceApi, handleResponse]);
	const reloadData = () => {
		loadData();
	};
	useEffect(() => {
		if (dataSourceApi) {
			loadData();
		} else {
			setDataSource([]);
		}
	}, [dataSourceApi, loadData]);
	return (
		<div style={ { display: "inline-block", width: "100%" } }>
			<div
				ref={ popupContainerRef }
				style={ {
					display: "flex",
					alignItems: "center",
					position: "relative",
					...wrapperStyle,
				} }
			>
				<Select
					ref={ ref }
					allowClear
					loading={ loading }
					placeholder="请选择"
					showSearch
					optionFilterProp="children"
					style={ { width: "100%" } }
					dropdownMatchSelectWidth={ false }
					notFoundContent={ (
						<Empty
							image={ Empty.PRESENTED_IMAGE_DEFAULT }
							description={ (
								// eslint-disable-next-line jsx-a11y/anchor-is-valid
								<a onClick={ reloadData }>
									<ReloadOutlined />
									&nbsp;重新加载
								</a>
							) }
						/>
					) }
					dropdownRender={ (menu) => {
						return (
							<div>
								{menu}
								{extraContext && (
									<div>
										<>
											<Divider
												style={ { margin: "4px 0" } }
											/>
											{extraContext}
										</>
									</div>
								)}
							</div>
						);
					} }
					getPopupContainer={ () => popupContainerRef.current as HTMLDivElement }
					{ ...props }
				>
					{dataSource.map((e) => (
						<Select.Option key={ e.value } value={ e.value }>
							{e.label}
						</Select.Option>
					))}
				</Select>
				{!hideSyncBtn && (
					<div
						style={ {
							height: "100%",
							width: 30,
							textAlign: "center",
						} }
					>
						<Tooltip title="同步数据源">
							<SyncOutlined
								spin={ loading }
								onClick={ reloadData }
								style={ { cursor: "pointer" } }
							/>
						</Tooltip>
					</div>
				)}
			</div>
		</div>
	);
};

const AsyncSelect = React.forwardRef(InternalAsyncDataSelect);

export default AsyncSelect;
