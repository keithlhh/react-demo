import { Modal, ModalProps } from 'antd';
import { after } from 'lodash';
import React, { useState } from 'react';
import useMergedState from '@/utils/hooks/useMergedState';

export interface BaseModalProps extends Omit<ModalProps, 'onOk' | 'onCancel' | 'confirmLoading'> {
    triggerNode: React.ReactNode
    beforeOk?: () => Promise<boolean>
    afterCancel?: () => void
    onChange?: (visible: boolean) => void
}

const BaseModal:React.FC<BaseModalProps> = props => {
	const { triggerNode, beforeOk, afterCancel, ...modalProps } = props;
	const [visible, setVisible] = useMergedState(false, {
		value: props.visible,
		onChange: props.onChange
	});
	const [confirmLoading, setConfirmLoading] = useState(false);
	const handleVisible = () => {
		setVisible(true);
	};
	const handleOk = async() => {
		setConfirmLoading(true);
		try {
			const flag = await beforeOk?.();
			setConfirmLoading(false);
			if (!flag) return;
			setVisible(false);
		} catch (e) {
			setConfirmLoading(false);
		}
	};
	const handleCancel = () => {
		afterCancel?.();
		setVisible(false);
	};
	return (
		<>
			<span onClick={ handleVisible }>{props.triggerNode}</span>
			<Modal { ...modalProps } confirmLoading={ confirmLoading } visible={ visible } onOk={ handleOk } onCancel={ handleCancel }>{props.children}</Modal>
		</>
	);
};
export default BaseModal;
