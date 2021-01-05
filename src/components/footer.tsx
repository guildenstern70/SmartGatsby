/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const Footer: React.FC = () => {

	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<footer>
			<div className="text-center mb-5">
				<small>
					<span className='text-primary'>{data.site.siteMetadata.title}</span>
					© Alessio Saltarin {new Date().getFullYear()}, Built with
					&nbsp;
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</small>
			</div>
		</footer>
	);
}


export default Footer;
