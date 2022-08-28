import React, { useRef, useState } from "react";
import { render } from "react-dom";
import { ChildComponent, SunComponent } from "./child";

export const ThemeContext = React.createContext('light');

export function createContainer(arg: any) {
	console.log('h');
	return arg;
}

createContainer(133);