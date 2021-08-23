import React from 'react';

import './style.scss';
import './style_documentation.css'
import Navbar from './navbar';
import Header from './header'
import Helmet from './helmet';
import Midsection from './midsection';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Header />		
		<Midsection />
		<Footer />
	</div>
);

export default Layout;
