import React from 'react';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface UploadButtonProps {
  className?: string,
	[k: string]: any;
}

const UploadButton: React.FC<UploadButtonProps> = ({ className, ...extra }) => {

	return (
		<Upload { ...extra }>
			<div className={ classNames('r-flex r-ai-c r-jc-c', styles.uploadWraper, className,) }>
				<PlusOutlined style={ { fontSize: '24px', color: "#999" } } />
			</div>
		</Upload>
	);
};

export default UploadButton;
