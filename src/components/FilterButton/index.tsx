import React from "react";
import { Button, Divider } from "antd";
import FilterButton, { FilterType } from "./button";

export interface FilterProps {
	filters: {
		key: string;
		label: string;
	}[];
	className?: string;
	value?: {
		key: string;
		value: FilterType;
	};
	onChange?: (value: FilterProps["value"]) => void;
}

const InternalFilter = (props: FilterProps, ref: React.Ref<HTMLDivElement>) => {
	const handleFilterChange = (key: string) => (val: FilterType) => {
		props.onChange({
			key,
			value: val,
		});
	};
	return (
		<div ref={ ref } style={ { display: "inline-block", width: "100%" } }>
			<Button.Group className="r-flex" style={ { width: '100%' } }>
				{props.filters.map((item) => (
					<FilterButton
						key={ item.key }
						text={ item.label }
						activeValue={
							props.value?.key === item.key
								? props.value?.value
								: item.key == null ? "notshow" : "empty" // 增加不需要排序图标的情况
						}
						buttonProps={ {
							style: {
								flex: 1
							}
						} }
						onChange={ handleFilterChange(item.key) }
					/>
				))}
			</Button.Group>
		</div>
	);
};

const Filter = React.forwardRef(InternalFilter);
export default Filter;
