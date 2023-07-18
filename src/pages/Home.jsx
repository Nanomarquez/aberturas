import '../components/Button.scss';
import { Parallax } from 'react-parallax';
// import bg from '/images/tecnoaberturasdc.jpg';
// import bgMobile from '/images/r-architecture-updbdgKxp5k-unsplash-scaled.jpg';
// import bg2 from '/images/339101016_5799821736793996_4235762734985220392_n (1).jpg';
// import bgMobile2 from '/images/barandas-edificios.jpg';

import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
// import Slider from '../components/Slider';
// import Slider from '../components/Slider';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer/Footer';

function Home({ clicked }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
	};

	return (
		<>
			<Slider {...settings}>
				{/* imagen 1 */}
				<section className="slider bg-[url('/images/background_img1.png')] h-screen bg-cover bg-center">
					<div className="content">
						{!clicked && (
							<div className="flex flex-col items-center justify-center h-screen">
								<h4
									data-aos-duration="1000"
									data-aos="zoom-in"
									className="text-3xl lg:text-5xl drop-shadow-md font-bold text-white">
									¡TRANSFORMÁ TU HOGAR CON NOSOTROS!
								</h4>
								<Link to={'/contacto'}>
									<button
										data-aos-delay="500"
										data-aos-duration="1000"
										data-aos="fade-up"
										className="button button2">
										<span>CONTACTANOS</span>
									</button>
								</Link>
								<p className=" text-xl lg:text-2xl drop-shadow-md font-bold text-white mt-20">
									¡DESCUBRÍ LA EXCELENCIA EN ABERTURAS Y MÁS!
								</p>
							</div>
						)}
					</div>
				</section>
				{/* imagen 2 */}
				<section className="slider bg-[url('/images/pexels-alena-darmel-7642100.jpg')] h-screen bg-cover bg-center">
					<div className="content">
						{!clicked && (
							<div className="flex flex-col items-start justify-center h-screen ml-10 lg:ml-20">
								<h4
									data-aos-duration="1000"
									data-aos="zoom-in"
									className=" pb-4 text-4xl max-w-sm lg:text-5xl drop-shadow-md font-bold text-white lg:max-w-2xl ">
									CREAMOS EL AMBIENTE QUE MERECES PARA TU HOGAR
								</h4>
								<ul className="text-xl mt-10 lg:text-2xl drop-shadow-md font-bold  lg:mt-20 bg-gradient-blue-teal custom-list">
									<li className=" my-1">TECNOLOGIA</li>
									<li className=" my-1">CALIDAD</li>
									<li className=" my-1">SEGURIDAD</li>
									<li className=" my-1">CONFORT</li>
								</ul>
								<Link to={'/contacto'}>
									<button
										data-aos-delay="500"
										data-aos-duration="1000"
										data-aos="fade-up"
										className="button button2">
										<span>CONTACTANOS</span>
									</button>
								</Link>
							</div>
						)}
					</div>
				</section>
			</Slider>

			{/* preview nosotros */}
			<Parallax
				strength={isMobile ? 0 : -200}
				// bgImage={isMobile ? bgMobile : bg}
				blur={{ min: 10, max: -10 }}>
				<div
					className={`h-screen flex flex-col justify-center bg-[#d3d2d2] ${
						isMobile ? 'text-black' : ' text-gray-800'
					} text-center sm:text-left sm:px-24 gap-12`}>
					<p
						className="tracking-[0.150em] font-normal max-w-lg text-xl"
						data-aos-duration="1000"
						data-aos="fade-right">
						En Tecno Aberturas DC somos líderes en fabricación, venta y colocación de una
						amplia variedad de aberturas de alta calidad y personalizadas, desde ventanas
						y puertas corredizas, cortinas, sistemas de cerramientos innovadores, fachadas
						espejadas, barandas y pérgolas a medida, así como proyectos de herrería en
						general. Con una experiencia sólida de más de 20 años en el mercado y un
						enfoque centrado en la tecnología y el diseño personalizado, nos enorgullece
						ofrecer soluciones excepcionales para embellecer y asegurar tus espacios.
					</p>
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
			</Parallax>

			{/* preview productos */}
			<Slider {...settings}>
				{/* ABERTURAS */}
				<section className="slider bg-[url('/images/ventana_preview.jpg')] h-screen bg-cover bg-center">
					<div className="content">
						{!clicked && (
							<div className="flex flex-col items-center justify-center h-screen">
								<h4
									data-aos-duration="1000"
									data-aos="zoom-in"
									className="text-3xl lg:text-5xl drop-shadow-md font-bold text-white">
									ABERTURAS
								</h4>
								<Link to={'/productos'}>
									<button
										data-aos-delay="500"
										data-aos-duration="1000"
										data-aos="fade-up"
										className="button button2">
										<span>VER MAS</span>
									</button>
								</Link>
							</div>
						)}
					</div>
				</section>

				{/* pergolas */}
				<section className="slider bg-[url('/images/pergolas_preview.jpg')] h-screen bg-cover bg-center">
					<div className="content">
						{!clicked && (
							<div className="flex flex-col items-center justify-center h-screen">
								<h4
									data-aos-duration="1000"
									data-aos="zoom-in"
									className="text-3xl lg:text-5xl drop-shadow-md font-bold text-white">
									PÉRGOLAS
								</h4>
								<Link to={'/productos'}>
									<button
										data-aos-delay="500"
										data-aos-duration="1000"
										data-aos="fade-up"
										className="button button2">
										<span>VER MAS</span>
									</button>
								</Link>
							</div>
						)}
					</div>
				</section>
				{/* mamparas */}
				<section className="slider bg-[url('/images/mamparas_preview.jpg')] h-screen bg-cover bg-center">
					<div className="content">
						{!clicked && (
							<div className="flex flex-col items-center justify-center h-screen">
								<h4
									data-aos-duration="1000"
									data-aos="zoom-in"
									className="text-3xl lg:text-5xl drop-shadow-md font-bold text-white">
									MAMPARAS
								</h4>
								<Link to={'/productos'}>
									<button
										data-aos-delay="500"
										data-aos-duration="1000"
										data-aos="fade-up"
										className="button button2">
										<span>VER MAS</span>
									</button>
								</Link>
							</div>
						)}
					</div>
				</section>
				{/* herreria */}
				<section className="slider bg-[url('/images/herreria_preview.jpg')] h-screen bg-cover bg-center">
					<div className="content">
						{!clicked && (
							<div className="flex flex-col items-center justify-center h-screen">
								<h4
									data-aos-duration="1000"
									data-aos="zoom-in"
									className="text-3xl lg:text-5xl drop-shadow-md font-bold text-white">
									HERRERÍA
								</h4>
								<Link to={'/productos'}>
									<button
										data-aos-delay="500"
										data-aos-duration="1000"
										data-aos="fade-up"
										className="button button2">
										<span>VER MAS</span>
									</button>
								</Link>
							</div>
						)}
					</div>
				</section>
				{/* cortinas */}
				<section className="slider bg-[url('/images/cortinas_preview.jpg')] h-screen bg-cover bg-center">
					<div className="content">
						{!clicked && (
							<div className="flex flex-col items-center justify-center h-screen">
								<h4
									data-aos-duration="1000"
									data-aos="zoom-in"
									className="text-3xl lg:text-5xl drop-shadow-md font-bold text-white">
									CORTINAS ROLLER
								</h4>
								<Link to={'/productos'}>
									<button
										data-aos-delay="500"
										data-aos-duration="1000"
										data-aos="fade-up"
										className="button button2">
										<span>VER MAS</span>
									</button>
								</Link>
							</div>
						)}
					</div>
				</section>
				{/* cerramientos */}
				<section className="slider bg-[url('/images/cerramiento_preview.jpg')] h-screen bg-cover bg-center">
					<div className="content">
						{!clicked && (
							<div className="flex flex-col items-center justify-center h-screen">
								<h4
									data-aos-duration="1000"
									data-aos="zoom-in"
									className="text-3xl lg:text-5xl drop-shadow-md font-bold text-white">
									CERRAMIENTOS
								</h4>
								<Link to={'/productos'}>
									<button
										data-aos-delay="500"
										data-aos-duration="1000"
										data-aos="fade-up"
										className="button button2">
										<span>VER MAS</span>
									</button>
								</Link>
							</div>
						)}
					</div>
				</section>
				{/* barandas */}
				<section className="slider bg-[url('/images/baranda_preview.jpg')] h-screen bg-cover bg-center">
					<div className="content">
						{!clicked && (
							<div className="flex flex-col items-center justify-center h-screen">
								<h4
									data-aos-duration="1000"
									data-aos="zoom-in"
									className="text-3xl lg:text-5xl drop-shadow-md font-bold text-white">
									BARANDAS
								</h4>
								<Link to={'/productos'}>
									<button
										data-aos-delay="500"
										data-aos-duration="1000"
										data-aos="fade-up"
										className="button button2">
										<span>VER MAS</span>
									</button>
								</Link>
							</div>
						)}
					</div>
				</section>
			</Slider>
			<Footer />
		</>
	);
}

export default Home;
