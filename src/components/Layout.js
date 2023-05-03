import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
	return (
		<div className="flex flex-col w-full min-h-screen h-full ">
			<Navbar />
			<hr className="drop-shadow-md border-2" />
			<div className="flex-grow bg-bgDark">{children}</div>
			<hr className="drop-shadow-md border-2" />
			<Footer />
		</div>
	);
};

export default Layout;
