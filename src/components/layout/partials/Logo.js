import React from "react";
import classNames from "classnames";
import Image from "../../elements/Image";
import logo from "./../../../assets/images/logo.png";

const Logo = ({ className, ...props }) => {
	const classes = classNames("brand", className);

	return (
		<div {...props} className={classes}>
			<Image src={logo} alt='Open' width={200} height={32} />
		</div>
	);
};

export default Logo;
