import React, { Children } from 'react';
import styles from './index.module.scss';

interface Props {
	extra?: React.ReactNode
	style?: React.CSSProperties
}
const Footer: React.FC<Props> = ({ extra, style, children }) => {
	return (
		<div className={ styles.footer } style={ style }>
			<div className={ styles.left } >
				{extra}
			</div>
			<div className={ styles.right }>
				{children}
			</div>
		</div>
	);
};
export default Footer;
