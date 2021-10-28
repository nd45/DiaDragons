import React from "react";
import PresaleHeader from "../components/layout/PresaleHeader";
import Footer from "../components/layout/Footer";

const LayoutPresale = ({ children }) => (
	<>
		<PresaleHeader navPosition='right' className='reveal-from-bottom' />
		<main className='site-content'>{children}</main>
		<Footer />
	</>
);

export default LayoutPresale;
