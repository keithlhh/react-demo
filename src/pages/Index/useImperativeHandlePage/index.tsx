import React, { forwardRef, useRef, useImperativeHandle, useState } from "react";
// useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用：
function FancyInput(props: any, ref: any) {
	const inputRef = useRef();
	const [count, setCount] = useState(0);
	useImperativeHandle(ref, () => {
		console.log(ref, 'cref');
		return ({
			focus: () => {
				console.log('999999', ref);
				inputRef.current.focus();
			},
			count
		});
	});
	return (
		<>
			<input ref={ inputRef } value={ count } />
			<div onClick={ () => setCount(count + 1) }>+1</div>
		</>
	);
}
const FancyInputRef = forwardRef(FancyInput);
const UseImperativeHandlePage = () => {
	const pRef = useRef();
	console.log(pRef, 'parent');
	return (
		<div>
			<FancyInputRef ref={ pRef } />
			<div onClick={ () => { pRef.current.focus(); console.log(pRef, '999999'); } }>聚焦</div>
		</div>
	);
};
export default UseImperativeHandlePage;
