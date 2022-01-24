import React, { ReactElement, ReactNode, useState } from "react";
import { Provider } from "mobx-react";
import {
	Router,
	Route,
	Switch,
	RouteComponentProps,
	Redirect
} from "react-router-dom";
import { ConfigProvider } from "antd";
import locale from 'antd/lib/locale/zh_CN';
import dayjs from "dayjs";
import stores from "@/stores";
import routes from '@/routers/root';
import history from '@/utils/history';
import CustomizeRenderEmpty from '@/components/CustomizeRenderEmpty';
import 'dayjs/locale/zh-cn';

import BasicLayout from "@/components-biz/layouts/BasicLayout";

dayjs.locale('zh-cn');

interface RouteProps extends RouteComponentProps {
	component?: any;
	path: string;
	exact?: boolean;
	layout?: any;
}

const App = () => {
	const [customize, setCustomize] = useState(true);
	return (
		<Provider { ...stores }>
			<ConfigProvider locale={ locale } renderEmpty={ customize && CustomizeRenderEmpty } >
				<Router history={ history }>
					<BasicLayout>
						<Switch>
							{routes.map(
								({ path, exact, component: Component }): ReactElement<RouteProps> => {
									return (
										<Route
											key={ path }
											exact={ exact }
											path={ path }
											render={ (props: any) => (
												<Component { ...props } />
											) }
										/>
									);
								}
							)}
							<Redirect to="/" />
						</Switch>
					</BasicLayout>
				</Router>
			</ConfigProvider>
		</Provider>
	);
};

export default App;
