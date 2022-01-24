import { Radio, RadioGroupProps } from 'antd';
import React from 'react';

export interface EnumRadioProps extends RadioGroupProps {
    dataSource: {value: string|number; label: string}[]
}

const InternalRadio = (
	{ dataSource, ...props }: EnumRadioProps,
	ref: React.Ref<HTMLDivElement>
) => {
	return (
		<Radio.Group ref={ ref } { ...props }>
			{dataSource.map((item) => (
				<Radio key={ item.value } value={ item.value }>
					{item.label}
				</Radio>
			))}
		</Radio.Group>
	);
};

const EnumBaseRadio = React.forwardRef(InternalRadio);

export default EnumBaseRadio;