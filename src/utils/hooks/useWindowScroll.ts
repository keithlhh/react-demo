import React, { useEffect, useState, useRef, DependencyList } from 'react';

const defaultBottomHeight = 400;
const useWindowScroll: <T extends {} = any, K extends { pageNo?: number } = any>(fetchFun: (params: K) => Promise<{ content?: T[], total?: number }>, extra: K, effect: DependencyList) => {
    dataSource: T[];
	loading: boolean
} = (fetchFun, extra, effect) => {
	const [dataSource, setDataSource] = useState([]);
	const [loading, setLoading] = useState<boolean>(false);
	const dataRef = useRef<{ current: number, oldScrollHeight: number, data: any[], total: number }>({ current: 1, oldScrollHeight: 0, data: [], total: 1 });

	const fetchDataSource = () => {
		const { current, data } = dataRef.current;
		setLoading(true);
		fetchFun({
			pageNo: current,
			...extra
		}).then((res) => {
			const _dataSource = [...data, ...res.content];
			dataRef.current.total = res.total;
			dataRef.current.data = _dataSource;
			setDataSource(_dataSource);
		}).finally(() => {
			setLoading(false);
		});
	};

	const handleScroll: EventListenerOrEventListenerObject = () => {
		const documentElement = document.getElementById('main');
		// 滚动高
		const scrollTop = documentElement.scrollTop || document.body.scrollTop;
		// 可视高
		const clientHeight = documentElement.clientHeight;
		// 总高
		const scrollHeight = documentElement.scrollHeight;
		// 底部
		const isArriveBottom = scrollTop + clientHeight + defaultBottomHeight >= scrollHeight;
		// 已拿数据
		const isFetchData = scrollHeight > dataRef.current.oldScrollHeight;
		// 更多
		const isHasMore = dataRef.current.total > dataRef.current.data.length;
		if (isArriveBottom && isFetchData && isHasMore) {
			dataRef.current.current += 1;
			dataRef.current.oldScrollHeight = scrollHeight;
			fetchDataSource();
		}
	};
	useEffect(() => {
		dataRef.current.current = 1;
		dataRef.current.data = [];
		dataRef.current.oldScrollHeight = 0;
		dataRef.current.total = 1;
		fetchDataSource();
	}, effect); // eslint-disable-line

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, true);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []); // eslint-disable-line

	return { dataSource, loading };
};

export default useWindowScroll;
