import React, { useRef, useState } from "react";
import { render } from "react-dom";
import { ChildComponent, SunComponent } from "./child";
import { ThemeContext } from './context';


class ContextPage1 extends React.Component {
	componentDidMount() {
		console.log(this.context, '999911');
	}

	render() {
		return (
			<div>
				<ChildComponent />
			</div>
		);
	}
}


const contextPage = () => (
	<ThemeContext.Provider value="dark">
		<ContextPage1 />
	</ThemeContext.Provider>
);


export default contextPage;
