import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className="text-fontColor">
				<ul className="flex gap-x-14 text-lg cursor-pointer justify-items-end p-3">
					<div className="text-2xl ">QRCode</div>
					<BrowserRouter>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</BrowserRouter>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
