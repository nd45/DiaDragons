import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import FAQ from "./views/FAQ";
import Cause from "./views/Cause";

const App = () => {
	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		document.body.classList.add("is-loaded");
		childRef.current.init();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<ScrollReveal
			ref={childRef}
			children={() => (
				<Switch>
					<AppRoute exact path='/' component={Home} layout={LayoutDefault} />
					<AppRoute exact path='/faq' component={FAQ} layout={LayoutDefault} />
					<AppRoute
						exact
						path='/cause'
						component={Cause}
						layout={LayoutDefault}
					/>
				</Switch>
			)}
		/>
	);
};

export default App;
