import React from "react";
import classNames from "classnames";
import instagramLogo from "../../../assets/images/instagramLogo.svg";
import discordLogo from "../../../assets/images/discordLogo.svg";

const FooterSocial = ({ className, ...props }) => {
	const classes = classNames("footer-social", className);

	return (
		<div {...props} className={classes}>
			<ul className='list-reset'>
				<a href='https://instagram.com/'>
					<img
						src={instagramLogo}
						alt='Features split 01'
						width={24}
						height={24}
						fill='white'
					/>
				</a>
				<a href='https://twitter.com/diadragons'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 16 16'
						xmlns='http://www.w3.org/2000/svg'>
						<title>Twitter</title>
						<path d='M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z' />
					</svg>
				</a>
				<a href='https://discord.gg/hVYBgdKQVq' style={{ marginRight: "20px" }}>
					<img
						src={discordLogo}
						alt='Features split 01'
						width={24}
						height={24}
						fill='white'
					/>
				</a>
			</ul>
		</div>
	);
};

export default FooterSocial;
