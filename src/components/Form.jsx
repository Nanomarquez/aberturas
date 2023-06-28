import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

export default function Form() {
	const form = useRef();

	const [userData, setUserData] = useState({
		user_name: '',
		user_email: '',
		user_localidad: '',
		message: '',
		user_phone: '',
	});

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const sendEmail = () => {
		emailjs
			.sendForm('service_esteb9h', 'template_wi8riyg', form.current, 'btdakFXCbv_wuqY7F')
			.then(
				(result) => {
					console.log(result.text);
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const buttonClass =
		userData.user_email.length < 1 ||
		userData.user_name.length < 1 ||
		userData.user_phone.length < 1 ||
		userData.user_localidad.length < 1 ||
		userData.message.length < 1
			? 'opacity-50 cursor-not-allowed'
			: '';

	return (
		<>
			<div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pt-[120px] pb-[60px] px-[40px] ">
				<div className="flex flex-col items-center justify-evenly">
					<h6 className="text-lg lg:text-xl font-bold text-gray-500 mb-4 self-start pt-6">
						CONTACTATE AHORA VÍA MAIL
					</h6>
					<h4 className="text-3xl lg:text-5xl font-extrabold mb-4 text-gray-800 self-start pt-6">
						Hacé tu consulta
					</h4>
					<p className="text-lg lg:text-xl text-gray-500 pt-6 mb-4 self-start">
						Te responderemos al medio indicado.
					</p>
				</div>
				<div className="flex">
					<form
						ref={form}
						onSubmit={sendEmail}
						className="w-full max-w-lg mx-auto">
						<div className="mb-4">
							<label
								htmlFor="user_name"
								className="block text-gray-700 font-bold mb-2">
								Nombre
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-black"
								name="user_name"
								id="user_name"
								type="text"
								value={userData.user_name}
								onChange={handleChange}
								placeholder="Ingrese su nombre"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="user_email"
								className="block text-gray-700 font-bold mb-2">
								Email
							</label>
							<input
								className="focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								name="user_email"
								id="user_email"
								type="email"
								value={userData.user_email}
								onChange={handleChange}
								placeholder="Ingrese su Email"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="user_phone"
								className="block text-gray-700 font-bold mb-2">
								Teléfono
							</label>
							<input
								className="focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight   "
								name="user_phone"
								type="tel"
								placeholder="Ingrese su teléfono"
								required
								value={userData.user_phone}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="user_localidad"
								className="block text-gray-700 font-bold mb-2">
								Localidad
							</label>
							<input
								className="focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								name="user_localidad"
								id="localidad"
								type="text"
								value={userData.user_localidad}
								onChange={handleChange}
								placeholder="Ingrese su localidad"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="mensaje"
								className="block text-gray-700 font-bold mb-2">
								Mensaje
							</label>
							<textarea
								className="focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								name="message"
								id="message"
								type="text"
								value={userData.message}
								onChange={handleChange}
								placeholder="Ingrese su presupuesto deseado"
							/>
						</div>
						<button
							value="COTICE AHORA"
							type="submit"
							className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${buttonClass}`}
							disabled={
								userData.user_email.length < 1 ||
								userData.user_name.length < 1 ||
								userData.user_phone.length < 1 ||
								userData.user_localidad.length < 1 ||
								userData.message.length < 1
							}>
							COTICE AHORA
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
