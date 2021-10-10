import React from 'react';

import 'bulma/bulma.sass';
import './style_documentation.css'
import Helmet from './helmet';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		{children}
		<Footer />
	</div>
);

export default Layout;
