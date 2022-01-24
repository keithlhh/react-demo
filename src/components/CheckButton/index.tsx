import React, { ReactNode, useState, useEffect, FormEventHandler } from 'react';
import cs from 'classnames';
import style from './index.module.scss';

interface CheckButtonProps{
	value: boolean,
	onChange?: (value: boolean) => void
}

const CheckButton: React.FC<CheckButtonProps> = (props) => {
	const { value, onChange, ...reset } = props;
	const [checked, setChecked] = useState(props.value || false);

	useEffect(() => {
		onChange?.(checked);
	}, [checked, onChange]);

	return (
		<div
			className={ cs(style.checkButton, checked && style.active) }
			onClick={ () => setChecked(!checked) }
			{ ...reset }
		>
			{props.children}
		</div>
	);
};

export default CheckButton;
