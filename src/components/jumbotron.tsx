import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import "./jumbotron.css";

interface JumbotronProps {
	subtitle: string;
	description: string;
	linkUrl: string;
	linkTitle: string;
}

const Jumbotron: React.FC<JumbotronProps> = (props: JumbotronProps) => {

	const data = useStaticQuery(graphql`
		query theTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div className="jumbotron">
			<h2 className="display-5 jumbotitle text-primary">{data.site.siteMetadata.title}</h2>
			<p className="lead">{props.subtitle}</p>
			<hr className="my-4" />
			<p>{props.description}</p>
			<a className="btn btn-primary btn-lg" href={props.linkUrl} role="button">{props.linkTitle}</a>
		</div>
	);
};



export default Jumbotron;
