import React from 'react';
import { PageHeader, Breadcrumb } from 'antd';
import { PageHeaderProps } from 'antd/es/page-header';
import classNames from 'classnames';
import styles from './index.module.scss';

interface Props extends Pick<PageHeaderProps, 'title' | 'className'| 'style'> {
    routes: {
        path: string,
        breadcrumbName: string
    }[];
	subTitle: React.ReactNode;
    children: React.ReactNode
}

const PageContainer: React.FC<Partial<Props>> = ({
	routes,
	className,
	children,
	subTitle,
	...rest
}) => {
	const renderSubTitle = React.useMemo(() => {
		return (
			<div className={ styles.subTitleContainer }>
				<Breadcrumb>
					{
						routes.map(({ path, breadcrumbName }) => (
							<Breadcrumb.Item key={ path } href={ path }>{breadcrumbName}</Breadcrumb.Item>
						))
					}
				</Breadcrumb>
				{subTitle}
			</div>
		);
	}, [routes, subTitle]);
	return (
		<PageHeader
			subTitle={ renderSubTitle }
			className={ classNames(styles.container, className) }
			{ ...rest }
		>
			{children}
		</PageHeader>
	);
};
export default PageContainer;
