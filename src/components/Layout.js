import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col w-full min-h-screen h-full ">
			<Navbar />
			<div className="flex-grow bg-bgDark">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
