import React from 'react';

const Contact = () => {
	return (
		<>
			<div className="w-1/3 m-auto mt-20 border-2 drop-shadow-lg p-4">
				<div className="text-center">
					<h1 className="text-3xl font-semibold text-fontColor">
						Contact us
					</h1>
				</div>
				<form className="flex flex-col mt-2">
					<input
						type="text"
						placeholder="Name"
						className="border-2 drop-shadow-md p-2 m-2"
					/>
					<input
						type="text"
						placeholder="Email"
						className="border-2 drop-shadow-md p-2 m-2"
					/>
					<input
						type="text"
						placeholder="Phone"
						className="border-2 drop-shadow-md p-2 m-2"
					/>
					<textarea
						name="msg"
						id=""
						cols="30"
						rows="5"
						placeholder="Enter your messsage here"
						className="m-2 resize-none p-2"
					></textarea>
					<button className="border-2 bg-fontColor text-white rounded-md font-serif text-2xl p-2 mt-5 m-2 hover:border-fontColor drop-shadow-md hover:bg-white hover:text-fontColor">
						Send
					</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
