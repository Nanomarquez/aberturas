import { useState } from 'react';
import { validation } from './formValidation';
import PhoneInput from 'https://cdn.skypack.dev/react-phone-input-2@2.15.1';

export default function Form() {
	const [userData, setUserData] = useState({
		nombre: '',
		email: '',
		localidad: '',
		mensaje: '',
		telefono: '',
	});

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const [errors, setErrors] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		const validationErrors = validation(userData);
		setErrors(validationErrors);
		if (
			Object.prototype.hasOwnProperty.validationErrors('nombre') ||
			Object.prototype.hasOwnProperty.validationErrors('email') ||
			Object.prototype.hasOwnProperty.validationErrors('localidad') ||
			Object.prototype.hasOwnProperty.validationErrors('mensaje') ||
			Object.prototype.hasOwnProperty.validationErrors('telefono')
		) {
			// console.log(Object.prototype.hasOwnProperty.validationErrors());
			return;
		}
	};

	return (
		<>
			<div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-4 py-[120px] px-[40px] ">
				<div className="flex flex-col items-center pb-20  justify-evenly">
					<h6 className="text-lg lg:text-xl font-bold text-gray-500 mb-4 self-start pt-6">
						CONTACTATE AHORA VÍA MAIL
					</h6>
					<h4 className="text-3xl lg:text-5xl font-extrabold text-gray-800 self-start pt-6">
						Hacé tu consulta
					</h4>
					<p className="text-lg lg:text-xl text-gray-500 pt-6 mb-4 self-start">
						Te responderemos al medio indicado.
					</p>
					<span className=" w-full border-t border-gray-400 lg:mt-[300px]"></span>
				</div>
				<div className="flex">
					<form
						onSubmit={handleSubmit}
						className="w-full max-w-lg mx-auto">
						<div className="mb-4">
							<label
								htmlFor="nombre"
								className="block text-gray-700 font-bold mb-2">
								Nombre
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-black"
								name="nombre"
								id="nombre"
								type="text"
								value={userData.nombre}
								onChange={handleChange}
								placeholder="Ingrese su nombre"
							/>
							{errors.nombre && <p className="text-red-500">{errors.nombre}</p>}
						</div>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-gray-700 font-bold mb-2">
								Email
							</label>
							<input
								className="focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								name="email"
								id="email"
								type="text"
								value={userData.email}
								onChange={handleChange}
								placeholder="Ingrese su Email"
							/>
							{errors.email && <p className="text-red-500">{errors.email}</p>}
						</div>
						<div className="mb-4">
							<label
								htmlFor="telefono"
								className="block text-gray-700 font-bold mb-2">
								Teléfono
							</label>
							<PhoneInput
								className="focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight   "
								enableSearch={false}
								preferredCountries={['ar']}
								country={'ar'}
								// value={userData.telefono}
								// onChange={handleChange}
							/>
							{errors.telefono && <p className="text-red-500">{errors.telefono}</p>}
						</div>
						<div className="mb-4">
							<label
								htmlFor="localidad"
								className="block text-gray-700 font-bold mb-2">
								Localidad
							</label>
							<input
								className="focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								name="localidad"
								id="localidad"
								type="text"
								value={userData.password}
								onChange={handleChange}
								placeholder="Ingrese su localidad"
							/>
							{errors.localidad && <p className="text-red-500">{errors.localidad}</p>}
						</div>
						<div className="mb-4">
							<label
								htmlFor="mensaje"
								className="block text-gray-700 font-bold mb-2">
								Mensaje
							</label>
							<textarea
								name="mensaje"
								id="mensaje"
								type="text"
								value={userData.mensaje}
								onChange={handleChange}
								placeholder="Ingrese su presupuesto deseado"
								className="focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
							{errors.mensaje && <p className="text-red-500">{errors.mensaje}</p>}
						</div>
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							Enviar
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
