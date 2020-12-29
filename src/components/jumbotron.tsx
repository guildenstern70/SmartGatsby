import * as React from "react";
import "./jumbotron.css";

interface JumbotronProps {
	jumboTitle: string;
	subtitle: string;
	description: string;
	linkUrl: string;
	linkTitle: string;
}

const Jumbotron = (props: JumbotronProps) => (
	<div className="jumbotron">
		<h1 className="display-4">{props.jumboTitle}</h1>
		<p className="lead">{props.subtitle}</p>
		<hr className="my-4" />
			<p>{props.description}</p>
			<a className="btn btn-primary btn-lg" href={props.linkUrl} role="button">{props.linkTitle}</a>
	</div>
);



export default Jumbotron;
