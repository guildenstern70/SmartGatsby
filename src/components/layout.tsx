/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */

import * as React from "react"

import "./layout.css";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {

	return (
		<main>
			<div className='container'>
				{props.children}
			</div>
		</main>
	);
};

export default Layout;
