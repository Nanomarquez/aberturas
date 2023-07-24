import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import gif1Des from '/images/gif-nosotros1.gif';
import gif1Mob from '/images/gif_imagen1.gif';
import supImg from '/images/image.png';
import '../../components/Button.scss';
import { FaBox, FaTools, FaUser } from 'react-icons/fa';
import ConocenosButton from '../../components/ConocenosButton';
import { isMobile } from 'react-device-detect';
import Map from '../../components/Map';

export default function Nosotros() {
	// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	return (
		<>
			<div className=" w-full overflow-x-hidden">
				<div className="bg-gradient-linear-custom  flex flex-col items-center ">
					<div className="relative w-[100%] h-[82vh]  ">
						<img
							src={supImg}
							alt="departamento"
							className=" w-[100%] h-[100%] object-cover  "
						/>
						<div
							data-aos-duration="1000"
							data-aos="zoom-in"
							className=" absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-white pt-20 px-8 lg:px-0">
							{/* <FontAwesomeIcon icon={faIcono} size="2x" /> */}
							<div className=" flex items-start gap-[20px] my-4">
								<FaUser className=" text-[3rem] self-start" />
								<div className=" flex flex-col">
									<h3 className="text-[1.5rem]">Asesoramiento Personalizado</h3>
									<p className=" mt-[10px]">
										Podemos asesorarte sobre todo proyecto que tengas en mente, para tomar
										la mejor decisión.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-[20px] my-4">
								<FaTools className="text-[3rem] self-start" />
								<div className="flex flex-col">
									<h3 className="text-[1.5rem]">Carpinteros Profesionales</h3>
									<p className=" mt-[10px]">
										Nuestro personal está capacitado para lograr todo proyecto propuesto
										por el cliente.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-[20px] my-4">
								<FaBox className="text-[3rem] self-start" />
								<div className="flex flex-col">
									<h3 className="text-[1.5rem]">Materiales Premium</h3>
									<p>
										Todos nuestros productos se confeccionan con los mejores materiales
										del sector.
									</p>
								</div>
							</div>
							<ConocenosButton />
						</div>
					</div>

					<div
						className={` flex flex-col justify-center  ${'text-black'}  sm:text-left px-0 gap-12 pb-16    `}>
						<div className="bg-gradient-linear-blue py-3 lg:py-6 shadow-custom rounded-br-[30%] rounded-bl-[5%] min-w-[100%] lg:px-0   ">
							<p
								className="text-md tracking-widest font-medium lg:font-semibold lg:text-2xl text-center text-slate-50 h-auto m-0 "
								data-aos-duration="1000"
								data-aos="fade-right">
								En Tecno Aberturas DC, nos apasiona crear espacios funcionales y elegantes
								que mejoren la calidad de vida de nuestros clientes. Permitinos hacer tus
								ideas realidad y ayudarte a transformar tus espacios en ambientes
								acogedores, seguros y estéticamente impresionantes.
							</p>
						</div>
						{/* <br /> */}
						<div className="flex flex-col lg:flex-row justify-center items-center gap-4">
							<div
								data-aos-duration="1000"
								data-aos="fade-right"
								className="flex flex-col justify-stretch items-center bg-slate-50 max-w[80%] lg:max-w-[55%] lg:mx-4  lg:ml-0 lg:min-h-[500px] text-justify lg:gap-8 rounded-[5%] lg:rounded-b-[20%] shadow-cardShadow ">
								<h3
									data-aos-duration="1000"
									data-aos="fade-right"
									className=" text-4xl lg:text-[30px] font-bold text-gray-800 lg:mt-4 p-12 pb-4 tracking-wider leading-[3rem]">
									¡Entendemos que cada hogar y proyecto es único!
								</h3>
								<div className="flex justify-center flex-col items-center gap-4 pb-8 lg:pb-0">
									<p
										className="tracking-widest font-medium max-w-[70%] text-md  lg:text-2xl text-gray-700 "
										data-aos-duration="1000"
										data-aos="fade-right">
										Por eso, nos dedicamos a crear aberturas y productos a medida que
										reflejen tus gustos y se adapten perfectamente a tus necesidades.{' '}
									</p>
									<p
										className="tracking-widest text-md font-medium max-w-[70%]  lg:text-2xl   text-gray-700 "
										data-aos-duration="1000"
										data-aos="fade-right">
										Nuestro equipo de profesionales altamente calificados, con años de
										experiencia en el rubro, se esfuerza por combinar la artesanía
										tradicional con las últimas tendencias en diseño y tecnología,
										asegurando productos resistentes, duraderos y estéticamente atractivos
										que garantizan resultados de alta calidad que superarán tus
										expectativas.
									</p>{' '}
									<p
										className="tracking-widest text-md font-medium max-w-[70%]  lg:text-2xl   text-gray-700 "
										data-aos-duration="1000"
										data-aos="fade-right">
										Nuestro objetivo es brindarte una experiencia excepcional y resultados
										que perduren en el tiempo.
									</p>
								</div>
							</div>
							<div
								className=" bg-slate-50 flex items-center p-4 max-w-[600px] max-h-auto rounded-[15px] "
								data-aos-duration="800"
								data-aos="fade-left">
								{/* Agrega la imagen para móvil */}
								{isMobile ? (
									<img
										src={gif1Mob}
										alt="gif-1-mobile"
										className=" max-w-xl max-h-[500px] "
										data-aos-duration="800"
										data-aos="fade-left"
									/>
								) : (
									<img
										src={gif1Des}
										alt="gif-1-desktop"
										className=" max-w-xl max-h-[500px] "
										data-aos-duration="800"
										data-aos="fade-left"
									/>
								)}
							</div>
						</div>

						{/* <br /> */}
						<div className="flex flex-col lg:flex-row justify-center gap-4 ">
							<div
								className={`${
									isMobile ? 'flex-col' : 'flex-row'
								} justify-center lg:justify-stretch items-center bg-slate-50   min-h-[400px]  gap-8 flex  max-w[80%] lg:max-w-[40%] mx-4 lg:w-[55%]  lg:ml-0 lg:min-h-[300px] text-justify lg:gap-8 rounded-[5%] lg:rounded-b-[20%] shadow-cardShadow py-4 lg:py-0 self-center  `}
								data-aos-duration="800"
								data-aos="zoom-in">
								<div className="flex justify-center flex-col items-center gap-4">
									<p
										className="tracking-widest font-medium max-w-[70%]  lg:text-2xl   text-gray-700 "
										data-aos-duration="1000"
										data-aos="fade-right">
										En Tecno Aberturas DC, nos apasiona crear espacios funcionales y
										elegantes que mejoren la calidad de vida de nuestros clientes.
										Permitinos hacer tus ideas realidad y ayudarte a transformar tus
										espacios en ambientes acogedores, seguros y estéticamente
										impresionantes.{' '}
									</p>
								</div>
							</div>
							<div
								className={`${
									isMobile ? 'flex-col' : 'flex-row'
								} justify-center lg:justify-stretch items-center bg-slate-50   min-h-[300px]  gap-8 flex  max-w[80%] lg:max-w-[40%] mx-4 lg:w-[55%]  lg:ml-0 lg:min-h-[300px] text-justify lg:gap-8 rounded-[5%] lg:rounded-b-[20%] shadow-cardShadow py-4 lg:py-0 self-center  `}
								data-aos-duration="800"
								data-aos="zoom-in">
								<div className="flex justify-center flex-col items-center gap-4">
									<p
										id="p-scroll"
										className="tracking-widest font-medium max-w-[70%]  lg:text-2xl   text-gray-700 "
										data-aos-duration="1000"
										data-aos-delay="500"
										data-aos="fade-left">
										Te invitamos a explorar nuestra amplia gama de productos y a ponerte
										en contacto con nosotros para evaluar y asesorarte con la mejor
										solución para tus necesidades y objetivos.
									</p>{' '}
								</div>
							</div>
						</div>
						<div
							className=" self-center"
							data-aos-duration="800"
							data-aos="zoom-in">
							<h3
								className="tracking-widest font-semibold max-w-full  lg:text-5xl   text-gray-800 "
								data-aos-duration="1000"
								data-aos-delay="500"
								data-aos="fade-left">
								¡Atendido por sus dueños!
							</h3>
						</div>
					</div>

					<Link
						to={'/contacto'}
						className=" max-w-0 mb-6 mr-[50%] lg:mr-[20%] ">
						<button
							id="button-con"
							data-aos-delay="600"
							data-aos-duration="1000"
							data-aos="fade-right"
							className="button button2 m-0 ">
							{' '}
							<span>¡contactanos!</span>
						</button>
					</Link>
				</div>

				<Map />
				<Footer />
			</div>
		</>
	);
}
