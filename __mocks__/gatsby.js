/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */

/* eslint-disable no-unused-vars */
const React = require("react");
const gatsby = jest.requireActual("gatsby");

module.exports = {
	...gatsby,
	graphql: jest.fn(),
	Link: jest.fn().mockImplementation(
		// these props are invalid for an `a` tag
		({
			 activeClassName,
			 activeStyle,
			 getProps,
			 innerRef,
			 partiallyActive,
			 ref,
			 replace,
			 to,
			 ...rest
		 }) =>
			React.createElement("a", {
				...rest,
				href: to,
			})
	),
	StaticQuery: jest.fn(),
	useStaticQuery: jest.fn(),
}
