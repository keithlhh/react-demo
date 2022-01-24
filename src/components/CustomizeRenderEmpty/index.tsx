import React from 'react';
import s from './style.module.scss';

function CustomizeRenderEmpty() {
	return (
		<div className={ s.emptyBlock }>
			<img src="https://img.alicdn.com/imgextra/i3/69942425/O1CN01XalmOh1Tmh4RNp7Gp_!!69942425.png" alt="" />
			<p className="r-mb-40 r-mt-14">暂无数据</p>
		</div>
	);
}

export default CustomizeRenderEmpty;
