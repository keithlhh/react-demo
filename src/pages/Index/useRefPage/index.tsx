import React, { useRef, useState } from "react";

const useRefPage = () => {
	const inputEl = useRef(null);
	const [count, setCount] = useState(0);
	const onButtonClick = () => {
		// `current` 指向已挂载到 DOM 上的文本输入元素
		setCount(count + 1);
		console.log(inputEl.current.value, '111111');
		inputEl.current.focus();
	};
	return (
		<>
			<input ref={ inputEl } value={ count } type="text" />
			<button type="button" onClick={ onButtonClick }>Focus the input +1</button>
		</>
	);
};
export default useRefPage;
