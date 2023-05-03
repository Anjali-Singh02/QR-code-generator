// Importing necessary modules

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Defining the main App component
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

// Exporting the App component for use in other modules
export default App;
