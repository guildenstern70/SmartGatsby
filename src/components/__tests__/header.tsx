/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */

import * as React from "react";
import * as renderer from "react-test-renderer";

import Header from "../header";

describe("Header", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<Header siteTitle="Default Starter" />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
