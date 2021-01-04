/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */

/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

interface HeaderProps {
	siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }: HeaderProps) => (
	<header>
		<div>{siteTitle}</div>
	</header>
);

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
