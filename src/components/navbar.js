import React from 'react';

const Navbar = () => (
	<nav className="navbar" role="navigation" aria-label="main navigation">
		<div className="container">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://bulma.io">
					<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
				</a>

				<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-end">
					<a className="navbar-item"> Главная </a>
					<a className="navbar-item"> Жителям </a>
					<a className="navbar-item"> Контакты </a>
				</div>
			</div>
		</div>
	</nav>
);

export default Navbar;
