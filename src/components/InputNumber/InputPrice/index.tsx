import React, { useEffect } from 'react';
import { Input, InputNumberProps } from "antd";

export interface InputPriceProps {
	value?: string;
	onChange?: (v: string) => void;
	precision?: undefined | number;
	style?: React.CSSProperties
}

const numberRex = /^[0-9]+(\.[0-9]{0,2})?$/;

const InputPrice: React.FC<InputPriceProps> = (props) => {
	const { value, onChange, precision = 2, ...reset } = props;
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
		let current = e.target.value;
		// 校验是否为数字
		if (current === '') {
			onChange(current);
		} else if (current !== '' && numberRex.test(current)) {
			// 小数位数限制；
			if (precision >= 0) {
				let result = String(current).split(".");
				console.log(result, 'result ------');
				let r1 = result[0];
				let r2 = result[1] || "";
				if (precision > 0 && result.length >= 2) {
					current = r1 + '.' + r2.substring(0, precision);
				} else {
					current = r1;
				}
			}
			onChange(current);
		}
	};

	const onblur = (e: React.ChangeEvent<HTMLInputElement>) => {
		let current = e.target.value;
		if (current !== '' && numberRex.test(current)) {
			if (precision !== undefined && precision >= 0) {
				let result = String(current).split(".");
				let r1 = result[0];
				let r2 = result[1] || "";
				if (precision > 0 && r2.length == 0) {
					onChange(r1);
				}
			}
		}
	};
	return (
		<Input
			value={ props.value }
			type="text"
			onBlur={ onblur }
			onChange={ onInputChange }
			{ ...reset }
		/>
	);
};

export default InputPrice;
