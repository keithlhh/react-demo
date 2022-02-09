import React, { useMemo, useState } from "react";

const useMemoPage = () => {
	const [a, setA] = useState(0);
	const b = useMemo(() => {
		console.log('memoChange: ', a);
		return a;
	}, [a]);
	return (
		<>
			<div>useMemoPage {a}</div>
			<div>memoChange {b}</div>
			<button type="button" onClick={ () => setA(a + 1) }>+1</button>
		</>
	);
};
export default useMemoPage;
