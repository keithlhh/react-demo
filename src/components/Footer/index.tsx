import React from 'react';
import styles from './index.module.scss';

export interface FooterProps {
	position?: 'fixed' | 'absolute',
	align?: 'right' | "left" | 'center',
	style?: React.CSSProperties
}
const Footer: React.FC<FooterProps> = ({ children, style, align, position }) => {

	const jcValue = {
		'right': 'flex-end',
		'left': 'flex-start',
		'center': 'center',
	};

	return (
		<div className={ styles.fixfooter } style={ { position: position || 'fixed', justifyContent: jcValue[align || 'center'], ...style } }>
			<div className={ styles.right }>{children}</div>
		</div>
	);
};
export default Footer;
