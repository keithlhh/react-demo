import React, { useMemo, useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1, value: 8 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

function useReducerPage() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			Count: {state.count}
			{state.value}
			<button onClick={ () => dispatch({ type: 'decrement' }) }>-</button>
			<button onClick={ () => dispatch({ type: 'increment' }) }>+</button>
		</>
	);
}
export default useReducerPage;
