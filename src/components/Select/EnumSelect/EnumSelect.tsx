import { Select } from 'antd';
import { RefSelectProps, SelectProps, SelectValue } from 'antd/lib/select';
import React from 'react';
import EnumBaseSelect from './select';

export interface EnumSelectProps<VT = any> extends SelectProps<VT> {
    enum: any
}

const InternalEnumSelect = <VT extends SelectValue = SelectValue>(
	{ enum: enumObject, ...props }: EnumSelectProps<VT>,
	ref: React.Ref<RefSelectProps>
) => {
	const keys = Object.keys(enumObject);
	const dataSource = keys.slice(0, keys.length / 2).map(key => ({
		label: enumObject[key],
		value: +key
	}));
	return (
		<EnumBaseSelect dataSource={ dataSource } ref={ ref } { ...props } />
	);
};

const EnumSelect = React.forwardRef(InternalEnumSelect);

export default EnumSelect;