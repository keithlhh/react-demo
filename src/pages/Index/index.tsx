import React from "react";
import { Link } from "react-router-dom";
import UseCustomHooks from "./customHooks";
import UseCallbackPage from "./useCallbackPage";
import UseImperativeHandlePage from "./useImperativeHandlePage";
import UseMemoPage from "./useMemoPage";
import UseReducerPage from "./useReducerPage";
import UseRefPage from "./useRefPage";
import WebpackLoader from "./webpackLoader";

const HomePage = () => {
	return (
		<>
			{/* <div>home</div> */}
			{/* <UseMemoPage /> */}
			{/* <UseRefPage /> */}
			{/* <UseImperativeHandlePage /> */}
			{/* <UseCustomHooks /> */}
			{/* <UseReducerPage /> */}
			{/* <UseCallbackPage /> */}
			<WebpackLoader />
			{/* <Link to="/lifeCycle">lifeCycle</Link> */}
		</>
	);
};

export default HomePage;
