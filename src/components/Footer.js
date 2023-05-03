import React from 'react';
import { IconContext } from 'react-icons';
import { VscGithubInverted } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<div className=" py-1 text-fontColor text-center flex justify-center">
				<IconContext.Provider
					value={{ size: '1.2em', className: 'mx-1 cursor-pointer ' }}
				>
					<Link to="https://github.com/AnjaliSingh02">
						<VscGithubInverted />
					</Link>
					<Link to="https://www.linkedin.com/in/anjali-singh015/">
						<BsLinkedin />
					</Link>
					<Link to="https://mail.google.com/mail/u/0/#inbox?compose=new">
						<SiGmail />
					</Link>
				</IconContext.Provider>
			</div>
			<div className="text-center pb-1 font-serif">
				{' '}
				QrCodeGenerator &copy; 2023
			</div>
		</>
	);
};

export default Footer;
