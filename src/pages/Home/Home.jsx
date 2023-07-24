import '../../components/Button.scss';
import { Parallax } from 'react-parallax';

import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../../components/Footer/Footer';
import Map from '../../components/Map';
import SwiperSlider from '../../components/SwiperSlider';
// import Form from '../components/Form/Form';

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
		<div className="w-full overflow-x-hidden bg-gradient-linear-custom">
			<Slider {...settings}>
				{/* imagen 1 */}
				<section className="slider bg-[url('/images/background_img1.png')] h-[80vh] bg-cover bg-center">
					<div className="content">
						{!clicked && (
							<div className="flex flex-col items-center justify-center h-screen">
								<h4
									data-aos-duration="1000"
									data-aos="zoom-in"
									className="text-[30px] lg:text-5xl drop-shadow-md font-bold text-[#ECECEC] lg:text-white p-4">
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
								<p className=" text-xl lg:text-2xl drop-shadow-md font-bold text-[#ECECEC] lg:text-white mt-20">
									¡DESCUBRÍ LA EXCELENCIA EN ABERTURAS Y MÁS!
								</p>
							</div>
						)}
					</div>
				</section>
				{/* imagen 2 */}
				<section className="slider bg-[url('/images/pexels-alena-darmel-7642100.jpg')] h-[80vh] bg-cover bg-center">
					<div className="content">
						{!clicked && (
							<div className="flex flex-col items-start justify-center h-screen ml-10 lg:ml-20">
								<h4
									data-aos-duration="1000"
									data-aos="zoom-in"
									className=" pb-4 text-[25px] max-w-sm lg:text-5xl drop-shadow-md font-extrabold text-gray-900 lg:max-w-2xl ">
									CREAMOS EL AMBIENTE QUE MERECES PARA TU HOGAR
								</h4>
								<ul className="text-2xl mt-14 lg:mt-10 lg:text-3xl drop-shadow-md font-bold  lg:mt-20 bg-gradient-blue-teal custom-list">
									<li className=" my-1 text-gray-900">TECNOLOGIA</li>
									<li className=" my-1 text-gray-900">CALIDAD</li>
									<li className=" my-1 text-gray-900">SEGURIDAD</li>
									<li className=" my-1 text-gray-900">CONFORT</li>
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
					className={`h-[60vh] flex flex-col justify-center items-center bg-gradient-linear-custom text-gray-800 text-center sm:text-left sm:px-24 gap-12`}>
					<p
						className="tracking-[0.150em] font-normal max-w-[70%] text-xl lg:text-2xl"
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
							className="button button2  right-[10rem]">
							{' '}
							<span>¡conocenos!</span>
						</button>
					</Link>
				</div>
			</Parallax>
			<div className="flex justify-center items-center">
				<span className="w-[80%] h-[2px] block bg-gradient-linear-blue rounded-md "></span>
			</div>

			{/* preview productos */}
			<div className=" w-full overflow-x-hidden ">
				<div className="bg-gradient-linear-custom flex flex-col items-center ">
					<div
						className={`flex flex-col justify-center ${'text-black'} sm:text-left px-0 gap-12 pb-16`}>
						<div className="w-screen ">
							<SwiperSlider />
						</div>
					</div>
				</div>
			</div>
			{/* <Form /> */}
			<Map />

			<Footer />
		</div>
	);
}

export default Home;
