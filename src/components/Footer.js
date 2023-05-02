import React from 'react';
import { IconContext } from 'react-icons';
import { VscGithubInverted } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
	return (
		<div className="bg-footerColor py-3 text-white text-center flex justify-center">
			<IconContext.Provider
				value={{ size: '1.5em', className: 'mx-2 cursor-pointer ' }}
			>
				<VscGithubInverted />
				<BsLinkedin />
				<SiGmail />
			</IconContext.Provider>
		</div>
	);
};

export default Footer;
