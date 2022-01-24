import { FormInstance, FormItemProps } from "antd/es/form";
import React, { useCallback, useContext } from "react";
import { Form, Row, Col, ColProps, RowProps } from "antd";
import { SearchTableContext } from "./SearchTable";

export interface FormItemConfig extends FormItemProps {
	colProps?: ColProps;
	children?: React.ReactElement;
	changeKeyProp?: string;
	autoSearch?: boolean
}

export interface RowFormProps {
	formList: FormItemConfig[];
	formItemProps?: FormItemProps;
	rowProps?: RowProps;
	colProps?: ColProps;
	fixedRightCol?: React.ReactNode;
}

function FormWidthRow(props: RowFormProps) {
	const {
		formList,
		rowProps,
		colProps,
		formItemProps,
		fixedRightCol,
	} = props;
	const { submit, reset } = useContext(SearchTableContext);
	const renderCols = useCallback(() => {
	
		return formList.map((item) => {
			const {
				colProps: curItemColProps,
				changeKeyProp = 'onChange',
				autoSearch = false,
				...curFormItemProps
			} = item;
			return (
				<Col
					{ ...colProps }
					{ ...formItemProps }
					{ ...curItemColProps }
					key={ String(curFormItemProps.name) }
				>
					<Form.Item { ...curFormItemProps }>
						{
							React.cloneElement(curFormItemProps.children, {
								...(autoSearch ? { [changeKeyProp]: submit } : {}),
								
							})
						}
					</Form.Item>
				</Col>
			);
		});
	}, [formList, colProps, formItemProps, submit]);
	return (
		<Row { ...rowProps }>
			{renderCols()}
			{fixedRightCol ? (
				<Col
					style={ {
						flex: 1,
						display: "flex",
						justifyContent: "flex-end",
					} }
				>
					{fixedRightCol}
				</Col>
			) : (
				<></>
			)}
		</Row>
	);
}
export default FormWidthRow;
