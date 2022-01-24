import { Checkbox } from "antd";
import { CheckboxGroupProps } from "antd/lib/checkbox";
import React from "react";

export interface EnumCheckboxProps extends CheckboxGroupProps {
	dataSource: { value: string | number; label: string }[];
}

const InternalCheckBox = (
	{ dataSource, ...props }: EnumCheckboxProps,
	ref: React.Ref<HTMLDivElement>
) => {
	return (
		<Checkbox.Group ref={ ref } { ...props }>
			{dataSource.map((item) => (
				<Checkbox key={ item.value } value={ item.value }>
					{item.label}
				</Checkbox>
			))}
		</Checkbox.Group>
	);
};

const EnumBaseCheckbox = React.forwardRef(InternalCheckBox);

export default EnumBaseCheckbox;
