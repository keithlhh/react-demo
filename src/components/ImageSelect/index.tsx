import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import cs from 'classnames';
import styles from './index.module.scss';

interface ImageListProps {
  key: string,
  url: string
}

interface ImageSelectProps {
	multiple?: boolean,
	value: string | string[],
	width?: number,
	data?: ImageListProps[],
	onChange?: (value: string[]) => void
}

const ImageSelect: React.FC<ImageSelectProps> = (props) => {

	const [selected, setSelected] = useState<string[]>([]);

	// useEffect(() => {
	// 	let value = Array.isArray(props.value) ? props.value : [props.value];
	// 	setSelected(value);
	// }, [props.value]);

	const handleClick = (img: ImageListProps) => {
		let idx = selected.findIndex(it => it == img.key);
		if (idx > -1) {
			let currentSelect = props.multiple ? selected.filter(it => it !== img.key) : [];
			setSelected(currentSelect);
		} else {
			setSelected(props.multiple ? [...selected, img.key] : [img.key]);
		}
		// 	props.onChange?.(selected);
	};

	return (
		<div className={ styles.imageSelectContainer }>
			{
				props.data?.map((it: ImageListProps) => {
					return (
						<div
							key={ it.key }
							className={ cs(styles.imageSelectCell, selected.includes(it.key) ? styles.active : '') }
							onClick={ () => handleClick(it) }
						>
							<Image
								preview={ false }
								src={ it.url || '' }
								style={ {
									width: (props.width || '60') + 'px',
									height: (props.width || '60') + 'px',
									margin: 0,
									fontSize: 0
								} }
							/>
						</div>

					);
				})
			}
		</div>
	);
};

export default ImageSelect;
