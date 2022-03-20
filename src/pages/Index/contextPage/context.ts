import React, { useRef, useState } from "react";
import { render } from "react-dom";
import { ChildComponent, SunComponent } from "./child";

export const ThemeContext = React.createContext('light');
