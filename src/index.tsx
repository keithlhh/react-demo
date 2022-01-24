import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import App from "./pages";
import './index.scss';

const AppContainer = process.env.NODE_ENV === 'production' ? React.Fragment : ReactHotAppContainer;

const AppMain = () => (
	<AppContainer>
		<App />
	</AppContainer>
);

ReactDOM.render(
	<AppMain />,
	 document.getElementById("root")
);
