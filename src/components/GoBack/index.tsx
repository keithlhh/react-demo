import React, { FC } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import cs from 'classnames';
import { useHistory } from 'react-router-dom';
import style from './index.module.scss';

interface GoBackProps {
	onBack?: () => void,
	className: string,
}

const GoBack: FC<GoBackProps> = (props) => {
	const history = useHistory();
	const goback = () => {
		if (props.onBack) {
			props.onBack();
			return;
		}
		history.goBack();
	};
	return (
		<div className={ cs(style.goBackContainer, props.className) } onClick={ goback }>
			<ArrowLeftOutlined />
			<span className={ cs('r-ml-5') }>返回</span>
		</div>
	);
};

export default GoBack;
