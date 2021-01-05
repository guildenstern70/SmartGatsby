/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */

import * as React from "react";

interface HeaderProps {
	siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }: HeaderProps) => (
	<header>
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">{ siteTitle }</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
								aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav me-auto mb-2 mb-md-0">
						<li className="nav-item active">
							<a className="nav-link" aria-current="page" href="/main">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/page-2">Another Page</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
						</li>
					</ul>
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	</header>
);

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
