// Importing necessary modules
import React from 'react';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

// Defining the main Home component
function Home() {
	// State for input url
	const [url, setUrl] = useState('');

	// State for QR code
	const [qrCode, setQrCode] = useState('');

	// Generate QR code button function
	const generateQRCode = async () => {
		try {
			// Generating QR code image data URL from input url
			const res = await QRCode.toDataURL(url);

			// Updating QR code state with generated data URL
			setQrCode(res);
		} catch (err) {
			// Handling errors during QR code generation
			console.error('Error at catch block:', err);
		}
	};

	// If input url is empty, QR code state is set to empty string
	useEffect(() => {
		if (!url) {
			setQrCode('');
		}
	}, [url]);

	// Function to handle input url changes
	const handleChangeUrl = (event) => {
		// Updating url state with new input value
		setUrl(event.target.value);
	};

	// Rendering the UI of the Home component
	return (
		<div className="bg-white w-1/3 m-auto h-1/2 mt-32 py-5 rounded-md border-2  drop-shadow-2xl">
			<h1 className="text-center text-2xl font-serif font-extrabold text-fontColor py-3">
				QR code Generator
			</h1>
			<div className="flex flex-col">
				<input
					type="text"
					name="qrcode"
					value={url}
					placeholder="QR code"
					onChange={handleChangeUrl}
					className=" w-1/2 p-2 m-auto my-3 font-serif drop-shadow-md hover:drop-shadow-xl rounded-md  border-2  text-center"
				/>

				<button
					type="button"
					onClick={generateQRCode}
					className="w-1/2 p-2 text-xl m-auto text-white font-serif font-bold rounded-md border-3 hover:border-fontColor drop-shadow-md hover:bg-white hover:text-fontColor bg-fontColor  border-2"
				>
					Generate QR Code
				</button>
			</div>

			{/* Rendering the QR code image if the QR code state is not empty */}
			{(qrCode && (
				<img src={qrCode} alt="QR code" className="h-56 m-auto " />
			)) || <p className="text-center m-20 h-16">Get QR Code</p>}
		</div>
	);
}

// Exporting the Home component for use in other modules
export default Home;
