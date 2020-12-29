/* eslint-disable no-unused-vars */
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Jumbotron from "../components/jumbotron";

import Layout from "../components/layout";

const IndexPage: React.FC = () => {
	return (
			<Layout>
				<Jumbotron subtitle={"Built with Gatsby"}
									 description={"A Gatsby template that makes use of Bootstrap 5 and TypeScript"}
									 linkUrl={"#"} linkTitle={"Learn more"} />
			</Layout>
	);
};

export default IndexPage;
