import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col w-full min-h-screen h-full ">
			<Navbar />
			<hr className="shadow-md border-fontColor" />
			<div className="flex-grow bg-bgDark">{children}</div>
			<hr className="shadow-md border-fontColor" />
			<Footer />
		</div>
	);
};

export default Layout;
