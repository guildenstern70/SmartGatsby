/* eslint-disable no-unused-vars */
/**
 * Main Layout with Bootstrap 5
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.css";

const Layout: React.FC = ({ children }) => {
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
			<div className='layout'>
				<main>{children}</main>
				<footer>
					<div className='float-end'>
						<small>
							<span className='text-primary'>{data.site.siteMetadata.title}</span>
							© Alessio Saltarin {new Date().getFullYear()}, Built with
							&nbsp;
							<a href="https://www.gatsbyjs.org">Gatsby</a>
						</small>
					</div>
				</footer>
			</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
