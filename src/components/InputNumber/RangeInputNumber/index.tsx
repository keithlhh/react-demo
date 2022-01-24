import { Input, InputNumber, InputNumberProps } from "antd";
import React, { useState, useCallback, useEffect } from "react";

export interface InputRangeNumberProps {
	value?: number[];
	onChange?: (v: number[]) => void;
	config?: {
		minConfig: InputNumberProps;
		maxConfig: InputNumberProps;
	} | InputNumberProps;
}

const InputRangeNumber: React.FC<InputRangeNumberProps> = (props) => {
	const { value, onChange, config = {} } = props;
	const [min, updateMin] = useState<number>();
	const [max, updateMax] = useState<number>();
	const numberConfig = ('minConfig' in config) ? {
		min: config.minConfig,
		max: config.maxConfig
	} : {
		min: config,
		max: config
	};
	console.log(numberConfig);
	const handleMinChange = useCallback((value) => {
		// if (!max) {
		// 	updateMax(value);
		// }
		updateMin(value);
		onChange?.([value, max]);
	}, [max, onChange]);
	const handleMaxChange = useCallback((value) => {
		// updateMax(value);
		onChange?.([min, value]);
	}, [min, onChange]);
	useEffect(() => {
		if (value && Array.isArray(value)) {
			updateMin(value?.[0]);
			updateMax(value?.[1]);
		}
	}, [value]);
	return (
		<Input.Group compact style={ { display: "flex", alignItems: "center" } }>
			<InputNumber
				{ ...numberConfig?.min }
				value={ min }
				onChange={ handleMinChange }
				style={ { flex: 1 } }
				max={ max }
			/>&nbsp;
			-&nbsp;
			<InputNumber
				{ ...numberConfig?.max }
				min={ min }
				onChange={ handleMaxChange }
				value={ max }
				{ ...(min ? { min } : {}) }
				style={ { flex: 1 } }
				onBlur={ () => {
					if (!max) {
						onChange?.([min, max]);
					}
				} }
			/>
		</Input.Group>
	);
};
export default InputRangeNumber;
