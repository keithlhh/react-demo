import React from "react";
import UseCustomHooks from "./customHooks";
import UseImperativeHandlePage from "./useImperativeHandlePage";
import UseMemoPage from "./useMemoPage";
import UseRefPage from "./useRefPage";

const HomePage = () => {
	return (
		<>
			<div>home</div>
			{/* <UseMemoPage /> */}
			{/* <UseRefPage /> */}
			{/* <UseImperativeHandlePage /> */}
			<UseCustomHooks />
		</>
	);
};

export default HomePage;
