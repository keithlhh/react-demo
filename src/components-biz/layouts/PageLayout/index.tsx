import { Layout } from "antd";
import React from "react";
import Footer, { FooterProps } from '@/components/Footer';

const { Content } = Layout;


interface FooterConfig extends FooterProps {
	content: React.ReactNode,
}

export interface PageLayoutProps {
	footer?: FooterConfig
}

const PageLayout: React.FC<PageLayoutProps> = (props) => {
	const { content = undefined, ...reset } = props.footer || {};
	return (
		<Layout
			className="r-flex r-fd-c r-jc-sb r-ai-s"
			style={ {
				boxSizing: 'border-box',
				position: "relative",
				background: '#fff',
				width: '100%',
				height: content ? '100vh' : 'auto',
			} }
		>
			<Content
				className="r-pd-lr-20"
				style={ {
					boxSizing: 'border-box',
					overflowY: 'auto',
					width: '100%',
					paddingBottom: content ? '90px' : 0
				} }
			>
				{ props.children }
			</Content>
			{
				content && (
					<Footer position="absolute" { ...reset } >
						{content}
					</Footer>
				)
			}
		</Layout>
	);
};
export default PageLayout;
