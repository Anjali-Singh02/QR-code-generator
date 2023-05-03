// Importing necessary modules

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
// Defining the main App component
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/about" element={<About />} exact />
				<Route path="/contact" element={<Contact />} exact />
			</Routes>
		</>
	);
}

// Exporting the App component for use in other modules
export default App;
