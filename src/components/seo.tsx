/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */

import * as React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
	description?: string;
	lang?: string;
	title: string;
}

const SEO: React.FC<SEOProps> = ({ description, lang, title }: SEOProps) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
		>
			<meta name="description" content={description} />
		</Helmet>
	);
};

SEO.defaultProps = {
	title: 'SmartGatsby',
	lang: 'en',
	description: ''
};

export default SEO;
