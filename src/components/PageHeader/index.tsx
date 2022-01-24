import React from 'react';
import GoBack from '../GoBack';

interface PageHeaderProps {
	showBack?: boolean,
	title?: string,
	titleStyle?: React.CSSProperties
	onBack?: () => void
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	return (
		<div className="r-flex r-jc-sb r-ai-c r-pd-tb-20">
			<div className="r-flex r-ai-c">
				{props.showBack && <GoBack onBack={ props.onBack } />}
				{props.title && <div className="r-fs-18 r-bold r-c-333 " style={ { ...props.titleStyle } } >{props.title}</div>}
			</div>
			{ props.children}
		</div>
	);
};

export default PageHeader;
