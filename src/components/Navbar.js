import React from 'react';

const Navbar = () => {
	return (
		<>
			<nav className="bg-navColor text-white">
				<ul className="flex gap-x-14 text-lg cursor-pointer justify-items-end p-3">
					<div className="text-2xl ">QRCode</div>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
