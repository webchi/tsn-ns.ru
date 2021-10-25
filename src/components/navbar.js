import React from 'react';
import { FaHome, FaUsers, FaMapMarked } from 'react-icons/fa';

const Navbar = () => (
	<nav class="navbar">
		<div class="container">
			<div class="navbar-brand">
				<span class="navbar-burger burger" data-target="navbarMenu">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</div>
			<div id="navbarMenu" class="navbar-menu">
				<div class="navbar-end">
					<span class="navbar-item">
						<a class="button is-white is-outlined" href="#">
							<span class="icon">
								<FaHome />
							</span>
							<span>Главная</span>
						</a>
					</span>
					<span class="navbar-item">
						<a class="button is-white is-outlined" href="#">
							<span class="icon">
								<FaUsers />
							</span>
							<span>Жителям</span>
						</a>
					</span>
					<span class="navbar-item">
						<a class="button is-white is-outlined" href="#">
							<span class="icon">
								<FaMapMarked />
							</span>
							<span>Контакты</span>
						</a>
					</span>
				</div>
			</div>
		</div>
	</nav>
);

export default Navbar;
