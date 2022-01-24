import { RadioGroupProps } from 'antd';
import React from 'react';
import EnumBaseRadio from './radio';

export interface EnumRadioProps extends RadioGroupProps {
    enum: any
}

const InternalEnumRadio = (
	{ enum: enumObject, ...props }: EnumRadioProps,
	ref: React.Ref<HTMLDivElement>
) => {
	const keys = Object.keys(enumObject);
	const dataSource = keys.slice(0, keys.length / 2).map(key => ({
		label: enumObject[key],
		value: +key
	}));
	return (
		<EnumBaseRadio dataSource={ dataSource } ref={ ref } { ...props } />
	);
};

const EnumRadio = React.forwardRef(InternalEnumRadio);

export default EnumRadio;