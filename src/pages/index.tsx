/* eslint-disable no-unused-vars */
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Jumbotron from "../components/jumbotron";

import Layout from "../components/layout";

const IndexPage: React.FC = () => {
	return (
			<Layout>
				<Jumbotron jumboTitle={"SmartGatsby"}
									 subtitle={"Built with Gatsby"}
									 description={"A template Gatsby site using Bootstrap 5 and TypeScript"}
									 linkUrl={"#"} linkTitle={"Learn more"} />
			</Layout>
	);
};

export default IndexPage;
