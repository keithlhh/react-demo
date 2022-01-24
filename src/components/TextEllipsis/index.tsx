import React from 'react';
import { Tooltip } from 'antd';
import { TooltipPropsWithOverlay } from 'antd/es/tooltip';
import styles from './index.module.scss';

interface Props<T extends {} = number> extends Omit<TooltipPropsWithOverlay, 'overlay'> {
    width?: T;
}
const TextEllipsis:React.FC<Props> = ({
	width = 350,
	title,
	...rest
}) => {
	return (
		<Tooltip title={ title } { ...rest }>
			<span style={ { maxWidth: width } } className={ styles.content }>{title}</span>
		</Tooltip>
	);
};
export default TextEllipsis;