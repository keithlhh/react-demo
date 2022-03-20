import React, { useRef, useState } from "react";
import { ThemeContext } from './context';

console.log(ThemeContext, '88888777');

class ChildComponent extends React.PureComponent {
	// static contextType = ThemeContext;
	render() {
		return (
			<div>hello{this.context}</div>
		);
	}
}

ChildComponent.contextType = ThemeContext;

const SunComponent = (props: any) => {
	return <div>sun{props.them}</div>;
};

export {
	SunComponent,
	ChildComponent
};
