import React, { ReactNode, useState, useCallback, useEffect } from 'react';
import cs from 'classnames';
import { observer } from 'mobx-react';
import dayjs from 'dayjs';
import { Modal } from 'antd';
import { useStores } from '@/stores/tool';
import { UserStore } from '@/stores/User';
import s from './style.module.scss';

interface SecurityLayoutProps {
	children: ReactNode,
	location?: any
}

const SecurityLayout:React.FC = observer((props: SecurityLayoutProps) => {
	const store = useStores('AppStore');
	const userInfoStore: typeof UserStore = useStores('UserInfoStore');
	const onResize = useCallback(() => {
		store.setClientWidth(document.documentElement.clientWidth);
		store.setClientWidth(document.documentElement.clientHeight);
	},
	[store]);
	const { userInfo } = userInfoStore;
	const [visible, setVisible] = useState(false);
	const { children } = props;
	useEffect(() => {
		onResize();
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, [onResize]);

	/**
	 * 用户信息初始化
	 */
	// TODO:暂时屏蔽
	// useEffect(() => {
	// 	userInfoStore.userInfoInitAction();
	// }, [userInfoStore]);

	return (

		<div className={ cs(s.securityLayout, 'r-flex r-fd-c') }>

			{children}
		</div>
	);
});

export default SecurityLayout;
