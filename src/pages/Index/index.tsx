import React from "react";
import UseCustomHooks from "./customHooks";
import UseImperativeHandlePage from "./useImperativeHandlePage";
import UseMemoPage from "./useMemoPage";
import UseReducerPage from "./useReducerPage";
import UseRefPage from "./useRefPage";

const HomePage = () => {
	return (
		<>
			<div>home</div>
			{/* <UseMemoPage /> */}
			{/* <UseRefPage /> */}
			{/* <UseImperativeHandlePage /> */}
			{/* <UseCustomHooks /> */}
			<UseReducerPage />
		</>
	);
};

export default HomePage;
