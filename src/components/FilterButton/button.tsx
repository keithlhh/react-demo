import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import React, { ReactText } from "react";

export type FilterType = "desc" | "asc" | "empty" | "notshow"|"notshowclick";

export interface FilterButtonProps {
	text: string;
	activeValue: FilterType;
	onChange: (v: FilterType) => void;
	buttonProps?: Omit<ButtonProps, "onClick" | "children" | "icon" | "value">;
}

const FilterReverseMap: { [key: string]: FilterType } = {
	desc: "asc",
	asc: "desc",
	empty: "desc",
	notshow: "notshowclick",
	notshowclick: "notshow",
};

const UpColorMap = {
	desc: "rgba(0,0,0,.85)",
	asc: "#fff",
	empty: "rgba(0,0,0,.85)",
};

const DownColorMap = {
	desc: "#fff",
	asc: "rgba(0,0,0,.85)",
	empty: "rgba(0,0,0,.85)",
};

const FilterButton: React.FC<FilterButtonProps> = (props) => {
	const handleClick = (v: FilterType) => () => {
		props.onChange(FilterReverseMap[v]);
	};
	const render = () => {
		switch (props.activeValue) {
			case 'notshow': // 不需要排序的情况
			case 'notshowclick':
				return <> </>;
			case 'asc':
				return (
					<>
						<SwapLeftOutlined style={ { transform: 'rotate(90deg)', color: UpColorMap[props.activeValue] } } />
					</>
				);
			case 'desc':
				return (
					<>
						<SwapLeftOutlined style={ { transform: 'rotate(-90deg) translateY(5px)', color: DownColorMap[props.activeValue] } } />
					</>
				);
			default:
				return (
					<>
						<SwapLeftOutlined style={ { transform: 'rotate(-90deg) translateY(15px)', color: DownColorMap[props.activeValue] } } />
						<SwapLeftOutlined style={ { transform: 'rotate(90deg)', color: UpColorMap[props.activeValue] } } />
					</>
				);
		}
	};
	return (
		<Button { ...props.buttonProps } type={ props.activeValue == "empty" || props.activeValue == "notshow" ? "default" : "primary" } onClick={ handleClick(props.activeValue) }>
			<div className="r-flex">
				<div>{props.text || "占位文字"}</div>
				{render()}
			</div>
		</Button>
	);
};
export default FilterButton;
