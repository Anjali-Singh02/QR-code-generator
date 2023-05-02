import { useEffect, useState } from 'react';
// import QRCode from 'react-qr-code';
import QRCode from 'qrcode';
function App() {
	const [url, setUrl] = useState('');
	const [qrCode, setQrCode] = useState('');
	const generateQRCode = async () => {
		// if (!url) {
		// 	return alert('Enter text to generate QR code');
		// }
		try {
			const res = await QRCode.toDataURL(url);
			setQrCode(res);
			// console.log('res : ', res);
		} catch (err) {
			console.error('error at catch block ', err);
		}
	};
	useEffect(() => {
		if (!url) {
			setQrCode('');
		}
		// return () => {

		// };
	}, [url]);

	const handleChangeUrl = (event) => {
		console.log('before: ', url);
		setUrl(event.target.value);
		console.log('after: ', url);
	};
	return (
		<div className="bg-white w-1/2 m-auto h-96 mt-32 py-5 rounded-md">
			<h1 className="text-center text-2xl text-bgDark py-3">
				QR code Generator
			</h1>
			<div className="flex justify-center">
				<input
					type="text"
					name="qrcode"
					value={url}
					placeholder="QR code"
					onChange={handleChangeUrl}
					className=" border-2 w-8/12 p-2 m-auto mx-3 border-bgDark rounded-md  text-center"
				/>

				<button
					type="button"
					onClick={generateQRCode}
					className="px-4 bg-bgDark text-xl font-bold rounded-md text-white border-2"
				>
					Generate QR Code
				</button>
			</div>
			{qrCode && (
				<img src={qrCode} alt="QR code" className="h-56 m-auto " />
			)}
			{/* {qrCode && (
				<div>
					<QRCode value={qrCode} className=" m-auto my-4" />
				</div>
			)} */}
		</div>
	);
}

export default App;
