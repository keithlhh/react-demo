import React, { useMemo, useState, useCallback } from "react";

const useCallbackPage = () => {
	const [a, setA] = useState(0);
	const callbackVal = useCallback(() => {
		return a;
	}, [a]);
	console.log(callbackVal, '99888888');
	const b = useMemo(() => {
		console.log('memoChange: ', a);
		return a;
	}, [a]);

	return (
		<>
			<div>callbackVal: {callbackVal()}</div>
			<div>useMemoPage {a}</div>
			<div>memoChange {b}</div>
			<button type="button" onClick={ () => setA(a + 1) }>+1</button>
		</>
	);
};
export default useCallbackPage;
