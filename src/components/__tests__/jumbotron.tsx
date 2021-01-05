/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */


import * as React from "react";
import * as renderer from "react-test-renderer";
import Jumbotron from "../jumbotron";
import { useStaticQuery } from "gatsby";

beforeEach(() => {
	// @ts-ignore
	useStaticQuery.mockImplementation( ()  =>
		({
			"site": {
				"siteMetadata": {
					"title": "SmartGatsby",
				},
			},
		})
	)});


it("renders correctly", () => {

  const tree = renderer
    .create(
      <Jumbotron subtitle={"Built with Gatsby"}
                 description={"A Gatsby template that makes use of Bootstrap 5 and TypeScript"}
                 linkUrl={"#"} linkTitle={"Login"} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
