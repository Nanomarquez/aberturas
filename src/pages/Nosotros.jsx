import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import gif1 from '/images/gif_imagen1.gif';
import supImg from '/images/image.png';
import '../components/Button.scss';
import { FaBox, FaTools, FaUser } from 'react-icons/fa';

export default function Nosotros() {
	return (
		<>
			<div className="bg-gradient-metal px-4">
				<div className="relative w-[100%] h-[77vh]">
					<img
						src={supImg}
						alt="departamento"
						className=" w-[100%] h-[100%] object-cover opacity-"
					/>
					<div
						data-aos-duration="1000"
						data-aos="zoom-in"
						className=" absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-white">
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
									Nuestro personal está capacitado para lograr todo proyecto propuesto por
									el cliente.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-[20px] my-4">
							<FaBox className="text-[3rem] self-start" />
							<div className="flex flex-col">
								<h3 className="text-[1.5rem]">Materiales Premium</h3>
								<p>
									Todos nuestros productos se confeccionan con los mejores materiales del
									sector.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className={` flex flex-col justify-center  ${'text-black'}  sm:text-left px-24 lg:px-0 gap-12 pb-24  `}>
					<div className=" bg-slate-500 p-0">
						<p
							className=" tracking-widest font-normal max-w-screen text-lg  self-center text-center pt-4 text-slate-50 px-[100px] "
							data-aos-duration="1000"
							data-aos="fade-right">
							En Tecno Aberturas DC somos líderes en fabricación, venta y colocación de
							una amplia variedad de aberturas de alta calidad y personalizadas, desde
							ventanas y puertas corredizas, cortinas, sistemas de cerramientos
							innovadores, fachadas espejadas, barandas y pérgolas a medida, así como
							proyectos de herrería en general. Con una experiencia sólida de más de 20
							años en el mercado y un enfoque centrado en la tecnología y el diseño
							personalizado, nos enorgullece ofrecer soluciones excepcionales para
							embellecer y asegurar tus espacios.
						</p>
					</div>
					<div className="flex flex-row-reverse justify-between">
						<img
							src={gif1}
							alt="gif 1"
							className=" max-w-lg max-h-auto mr-16"
						/>
					</div>
					<br />
					<div className="flex flex-row justify-between">
						<p
							className="tracking-widest font-normal max-w-lg text-xl"
							data-aos-duration="1000"
							data-aos="fade-right">
							Entendemos que cada hogar y proyecto es único. Por eso, nos dedicamos a
							crear aberturas y productos a medida que reflejen tus gustos y se adapten
							perfectamente a tus necesidades. Nuestro equipo de profesionales altamente
							calificados, con años de experiencia en el rubro, se esfuerza por combinar
							la artesanía tradicional con las últimas tendencias en diseño y tecnología,
							asegurando productos resistentes, duraderos y estéticamente atractivos que
							garantizan resultados de alta calidad que superarán tus expectativas.
							Nuestro objetivo es brindarte una experiencia excepcional y resultados que
							perduren en el tiempo.
						</p>
					</div>
					<br />
					<div className="flex flex-row-reverse justify-between">
						<p
							className="tracking-widest font-normal max-w-lg text-xl"
							data-aos-duration="1000"
							data-aos="fade-right">
							En Tecno Aberturas DC, nos apasiona crear espacios funcionales y elegantes
							que mejoren la calidad de vida de nuestros clientes. Permitinos hacer tus
							ideas realidad y ayudarte a transformar tus espacios en ambientes
							acogedores, seguros y estéticamente impresionantes.
						</p>
					</div>
					<br />
					<div className="flex flex-row justify-between">
						<p
							className="tracking-widest font-normal max-w-lg text-xl"
							data-aos-duration="1000"
							data-aos="fade-right">
							Te invitamos a explorar nuestra amplia gama de productos y a ponerte en
							contacto con nosotros para evaluar y asesorarte con la mejor solución para
							tus necesidades y objetivos.
						</p>
					</div>
					<Link
						to={'/nosotros'}
						className=" max-w-0">
						<button
							data-aos-delay="600"
							data-aos-duration="1000"
							data-aos="fade-right"
							className="button button2">
							{' '}
							<span>¡conocenos!</span>
						</button>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}
