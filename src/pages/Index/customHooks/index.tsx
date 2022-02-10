import React, { useRef, useState } from "react";

const useCount = (title: string) => {
	const [count, setCount] = useState(0);
	document.title = title;
};
const UseCustomHooks = () => {
	const Hello = useCount('ddddd');
	return (
		<div>hello</div>
	);
};
export default UseCustomHooks;
