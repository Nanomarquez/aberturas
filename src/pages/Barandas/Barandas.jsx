import Footer from '../../components/Footer/Footer';
import Map from '../../components/Map';
// import mamparas from './mamparasData';
import barandas from './barandasData';
// import herreria from './herreriadata';

import { useState } from 'react';
import Modal from 'react-modal';
import { isMobile } from 'react-device-detect';

const Barandas = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const openModal = (image) => {
		setSelectedImage(image);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setSelectedImage(null);
		setModalIsOpen(false);
	};
	return (
		<div className=" bg-gradient-linear-custom">
			<br />
			<br />

			{/* barandas */}
			<div
				className={`h-[13vh] bg-gradient-linear-blue bg-cover flex flex-col justify-center items-center gap-10 text-white  py-3 lg:py-6 shadow-custom rounded-br-[30%] rounded-bl-[5%] min-w-[100%] lg:px-0   `}>
				<h2 className="text-5xl font-bold">BARANDAS</h2>
			</div>
			<div className="gallery">
				{barandas.map((image, index) => (
					<div
						className="pics relative overflow-hidden rounded-md"
						key={index}
						onClick={() => openModal(image)} // Abrir el modal al hacer clic en la imagen
					>
						<img
							src={image.src}
							alt={image.alt}
							className="w-full"
						/>
						<div>
							{isMobile ? (
								<div className="flex justify-center items-center">
									{/* <h1 className="font-semibold text-lg lg:text-3xl flex justify-center items-center">
										{image.title}
									</h1> */}
									{/* Add more elements as needed */}
								</div>
							) : (
								<div className="card-body flex justify-center items-center">
									{/* <h1 className="font-semibold text-lg lg:text-3xl flex justify-center items-center"> */}
									{/* {image.title} */}
									{/* </h1> */}
									{/* Add more elements as needed */}
								</div>
							)}
						</div>
					</div>
				))}
			</div>

			<Map />
			<Footer />
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Imagen Completa"
				style={{
					overlay: {
						backgroundColor: 'rgba(0, 0, 0, 0.75)', // Fondo semi-transparente
						zIndex: 1000,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					},
					content: {
						position: 'relative',
						maxWidth: '80%',
						maxHeight: '80%',
						overflow: 'auto',
						borderRadius: '8px',
						padding: '16px',
						outline: 'none',
						// Fondo transparente para el contenido del modal
						// border: "none"
					},
				}}
				className="bg-gradient-linear-custom">
				{/* Mostrar la imagen en el centro de la pantalla */}
				{selectedImage && (
					<div className="flex items-center flex-col ">
						<h3 className="text-2xl lg:text-5xl font-semibold mb-4 self-center">
							{selectedImage.title}
						</h3>
						<img
							src={selectedImage.src}
							alt={selectedImage.title}
							style={{
								objectFit: 'contain', // Ajustar la imagen para que se vea completa
								width: '100%', // Asegurar que la imagen ocupe todo el ancho disponible
								maxHeight: '100%', // Asegurar que la imagen ocupe todo el alto disponible
								borderRadius: '8px',
							}}
						/>
					</div>
				)}

				{/* Agregar el botón "X" en la esquina superior derecha */}
				<button
					onClick={closeModal}
					className="absolute top-2 right-2 text-white text-xl bg-gray-800 rounded-full p-2 ">
					X
				</button>
			</Modal>
		</div>
	);
};

export default Barandas;
