import { Select } from 'antd';
import { RefSelectProps, SelectProps, SelectValue } from 'antd/lib/select';
import React from 'react';

export interface EnumSelectProps<VT> extends SelectProps<VT> {
    dataSource: {value: string|number; label: string}[]
}

const InternalSelect = <VT extends SelectValue = SelectValue>(
	{ dataSource, ...props }: EnumSelectProps<VT>,
	ref: React.Ref<RefSelectProps>
) => {
	return (
		<Select ref={ ref } allowClear { ...props }>
			{dataSource.map((item) => (
				<Select.Option key={ item.value } value={ item.value }>
					{item.label}
				</Select.Option>
			))}
		</Select>
	);
};

const EnumBaseSelect = React.forwardRef(InternalSelect);

export default EnumBaseSelect;