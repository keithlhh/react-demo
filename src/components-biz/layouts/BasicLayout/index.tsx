import { Layout } from "antd";
import React, { useState } from "react";
import SiderMenu from "../SiderMenu";

const { Content, Header } = Layout;
export interface BasicLayoutProps {}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
	const layout = (
		<Layout>
			{/* <SiderMenu /> */}
			<Layout>
				<Content
					id="main"
					style={ {
						boxSizing: 'border-box',
						height: '100vh',
						background: '#fff',
						width: '100%',
						overflowY: 'auto'
					} }
				>
					{props.children}
				</Content>
			</Layout>
		</Layout>
	);
	return <>{layout}</>;
};
export default BasicLayout;
