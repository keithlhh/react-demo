import React, { useCallback, useEffect, useState } from 'react';
import cs from 'classnames';
import styles from './index.module.scss';

interface MainImageSelectProps {
	value?: string[],
	width?: number,
	data?: string[],
	onChange?: (value: string[]) => void
}

const MainImageSelect: React.FC<MainImageSelectProps> = (props) => {
	const { value, data, width, onChange } = props;
	const dataList = (data || ['PC0', 'PC1', 'PC2', 'PC3', 'PC4']);

	const handleClick = (key: string) => {
		let idx = value.findIndex(it => it == key);
		let currentSelect = idx > -1 ? value.filter(it => it !== key) : [...value, key];
		onChange?.(currentSelect);
	};

	return (
		<div className={ styles.mainImageSelectContainer }>
			{
				dataList?.map((it: string, i: number) => {
					return (
						<div
							key={ it }
							className={ cs(styles.mainImageSelectCell, value?.includes(it) ? styles.active : '') }
							onClick={ () => handleClick(it) }
						>
							<p
								className="r-ta-c r-fs-14 r-bg-f2"
								style={ {
									width: (width || '60') + 'px',
									height: (width || '60') + 'px',
									lineHeight: (width || '60') + 'px',
								} }
							>
								{`主图${i + 1}`}
							</p>
						</div>

					);
				})
			}
		</div>
	);
};

export default MainImageSelect;
