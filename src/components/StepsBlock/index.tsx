import React, { useEffect, useState } from 'react';
import cs from 'classnames';
import styles from './index.module.scss';


interface StepListProps {
	key: string,
	title: string
}

interface StepsBlockProps {
	value: string,
	data?: StepListProps[],
	onChange?: (value: string) => void
}

const StepsBlock: React.FC<StepsBlockProps> = (props) => {

	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const idx = props.data.findIndex(it => it.key == props.value);
		setActiveIndex(idx);
	}, [props.value, props]);

	const onChange = (step: StepListProps) => {
		props.onChange?.(step.key);
	};

	return (
		<div className={ styles.stepblockContainer }>
			{
				props.data?.map((it: StepListProps, i) => {
					return (
						<div
							key={ it.key }
							className={ cs(styles.stepblockCell, activeIndex > i && styles.complete, activeIndex == i && styles.active) }
							onClick={ () => onChange(it) }
						>
							<div>
								{it.title || `步骤${it.key || i}`}
							</div>
						</div>
					);
				})
			}
		</div>
	);
};

export default StepsBlock;
