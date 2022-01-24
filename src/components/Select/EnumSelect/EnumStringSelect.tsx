import { Select } from 'antd';
import { RefSelectProps, SelectProps, SelectValue } from 'antd/lib/select';
import React from 'react';
import EnumBaseSelect from './select';

export interface EnumSelectProps<VT> extends SelectProps<VT> {
    enum: any
}

const InternalStringEnumSelect = <VT extends SelectValue = SelectValue>(
	{ enum: enumObject, ...props }: EnumSelectProps<VT>,
	ref: React.Ref<RefSelectProps>
) => {
	const keys = Object.keys(enumObject);
	const dataSource = keys.map(key => ({
		label: key,
		value: enumObject[key]
	}));
	return (
		<EnumBaseSelect dataSource={ dataSource } ref={ ref } { ...props } />
	);
};

const EnumStringSelect = React.forwardRef(InternalStringEnumSelect);

export default EnumStringSelect;