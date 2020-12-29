/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

interface HeaderProps {
	siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
	<header>
		<div>{siteTitle}</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
