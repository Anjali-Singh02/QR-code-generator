import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className="text-fontColor">
				<ul className="flex justify-between text-lg cursor-pointer p-3 font-serif">
					<div className="text-2xl font-extrabold ">
						<Link to="/"> QRCode</Link>
					</div>
					<div className="flex gap-x-14 pr-5">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</div>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
