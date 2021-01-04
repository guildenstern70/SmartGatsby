/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */

import * as React from "react"

import "./layout.css";

const Layout: React.FC = ({ children }) => {

	return (
		<main>
			<div className='container'>
				{children}
			</div>
		</main>
	);
};

export default Layout;
