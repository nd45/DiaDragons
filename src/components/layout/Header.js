import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterSocial from "../layout/partials/FooterSocial";
import {
	connectWallet,
	getCurrentWalletConnected,
} from "../../util/interact.js";

const propTypes = {
	navPosition: PropTypes.string,
	hideNav: PropTypes.bool,
	hideSignin: PropTypes.bool,
	bottomOuterDivider: PropTypes.bool,
	bottomDivider: PropTypes.bool,
};

const defaultProps = {
	navPosition: "",
	hideNav: false,
	hideSignin: false,
	bottomOuterDivider: false,
	bottomDivider: false,
};

const Header = ({
	className,
	navPosition,
	hideNav,
	hideSignin,
	bottomOuterDivider,
	bottomDivider,
	...props
}) => {
	const [isActive, setIsactive] = useState(false);
	const [walletAddress, setWallet] = useState("");
	const [status, setStatus] = useState("");
	const nav = useRef(null);
	const hamburger = useRef(null);

	useEffect(async () => {
		const { address, status } = await getCurrentWalletConnected();

		setWallet(address);
		setStatus(status);

		addWalletListener();
	}, []);

	function addWalletListener() {
		if (window.ethereum) {
			window.ethereum.on("accountsChanged", (accounts) => {
				if (accounts.length > 0) {
					setWallet(accounts[0]);
					setStatus("👆🏽 Write a message in the text-field above.");
				} else {
					setWallet("");
					setStatus("🦊 Connect to Metamask using the top right button.");
				}
			});
		} else {
			setStatus(
				<p>
					{" "}
					🦊{" "}
					<a target='_blank' href={`https://metamask.io/download.html`}>
						You must install Metamask, a virtual Ethereum wallet, in your
						browser.
					</a>
				</p>
			);
		}
	}

	const connectWalletPressed = async () => {
		const walletResponse = await connectWallet();
		setStatus(walletResponse.status);
		setWallet(walletResponse.address);
	};
	const openMenu = () => {
		document.body.classList.add("off-nav-is-active");
		nav.current.style.maxHeight = nav.current.scrollHeight + "px";
		setIsactive(true);
	};

	const closeMenu = () => {
		document.body.classList.remove("off-nav-is-active");
		nav.current && (nav.current.style.maxHeight = null);
		setIsactive(false);
	};

	const keyPress = (e) => {
		isActive && e.keyCode === 27 && closeMenu();
	};

	const clickOutside = (e) => {
		if (!nav.current) return;
		if (
			!isActive ||
			nav.current.contains(e.target) ||
			e.target === hamburger.current
		)
			return;
		closeMenu();
	};

	const classes = classNames(
		"site-header",
		bottomOuterDivider && "has-bottom-divider",
		className
	);

	return (
		<header {...props} className={classes}>
			<div className='container'>
				<div
					className={classNames(
						"site-header-inner",
						bottomDivider && "has-bottom-divider"
					)}>
					<Logo />
					{!hideNav && (
						<>
							<button
								ref={hamburger}
								className='header-nav-toggle'
								onClick={isActive ? closeMenu : openMenu}>
								<span className='screen-reader'>Menu</span>
								<span className='hamburger'>
									<span className='hamburger-inner'></span>
								</span>
							</button>
							<nav
								ref={nav}
								className={classNames("header-nav", isActive && "is-active")}>
								<div className='header-nav-inner'>
									<ul
										className={classNames(
											"list-reset text-xs",
											navPosition && `header-nav-${navPosition}`
										)}>
										<li>
											<FooterSocial />
										</li>
									</ul>
									{!hideSignin && (
										<ul className='list-reset header-nav-right'>
											<li>
												<button
													className='button button-primary button-wide-mobile button-sm'
													id='walletButton'
													onClick={connectWalletPressed}>
													{walletAddress.length > 0 ? (
														"Connected: " +
														String(walletAddress).substring(0, 6) +
														"..." +
														String(walletAddress).substring(38)
													) : (
														<span>Connect Wallet</span>
													)}
												</button>
											</li>
										</ul>
									)}
								</div>
							</nav>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
