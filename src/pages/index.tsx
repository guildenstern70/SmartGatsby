/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */

import * as React from "react";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
import "./index.css"
// @ts-ignore
import logo from "../images/gatsby-icon.png"



const IndexPage: React.FC = () => {
	return (
		<Layout>
			<div className="row">
				<div className="col">
					<span className="float-end logoimage">
						<img src={logo} className="img-fluid logoimage" width="50px" alt="Gatsby Logo" />
					</span>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Jumbotron subtitle={"Built with Gatsby"}
             description={"A Gatsby template that makes use of Bootstrap 5 and TypeScript"}
             linkUrl={"/login"} linkTitle={"Login"} />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Footer />
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
