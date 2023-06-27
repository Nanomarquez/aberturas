import './Button.css';
import { Parallax } from 'react-parallax';
import bg from '../../public/images/tecnoaberturasdc.jpg';
import bgMobile from '../../public/images/r-architecture-updbdgKxp5k-unsplash-scaled.jpg';
import bg2 from '../../public/images/339101016_5799821736793996_4235762734985220392_n (1).jpg';
import bgMobile2 from '../../public/images/barandas-edificios.jpg';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

function Home({ clicked }) {
	return (
		<>
			<section className="slider bg-[url('/images/zane-lee-ECsnJcc0Dhs-unsplash-scaled.jpg')] h-screen bg-cover bg-center">
				<div className="content">
					{!clicked && (
						<div className="flex flex-col items-center justify-center h-screen">
							<h4
								data-aos-duration="1000"
								data-aos="zoom-in"
								className="sm:text-4xl lg:text-5xl drop-shadow-md font-bold text-white">
								DISEÑO PERSONALIZADO
							</h4>
							<Link to={'/contacto'}>
								<button
									data-aos-delay="500"
									data-aos-duration="1000"
									data-aos="fade-up"
									className="btn btn-1 hover-filled-slide-right">
									<span>cotice ahora</span>
								</button>
							</Link>
						</div>
					)}
				</div>
			</section>
			<Parallax
				strength={isMobile ? 0 : -200}
				bgImage={isMobile ? bgMobile : bg}
				blur={{ min: 10, max: -10 }}>
				<div
					className={`h-screen flex flex-col justify-center ${
						isMobile ? 'text-black' : 'text-white'
					} text-center sm:text-left sm:px-24 gap-12`}>
					<p
						className="tracking-widest font-normal"
						data-aos-duration="1000"
						data-aos="fade-right">
						FÁBRICA DE ABERTURAS A MEDIDA EN PILAR
					</p>
					<h1
						data-aos-delay="200"
						data-aos-duration="1000"
						data-aos="fade-right"
						className="text-6xl font-semibold drop-shadow-md">
						Tecno Aberturas DC
					</h1>
					<small
						data-aos-delay="400"
						data-aos-duration="1000"
						data-aos="fade-right"
						className="text-lg">
						Fabricantes de aberturas de alta prestación, modelos estándar y a medida.
						Venta y colocación.{' '}
					</small>
					<Link to={'/productos'}>
						<button
							data-aos-delay="600"
							data-aos-duration="1000"
							data-aos="fade-right"
							className="self-center btn btn-1 hover-filled-slide-right m-0 sm:self-start">
							{' '}
							<span>Ver productos</span>
						</button>
					</Link>
				</div>
			</Parallax>
			<Parallax
				strength={isMobile ? 0 : -200}
				bgImage={isMobile ? bgMobile2 : bg2}
				blur={{ min: 10, max: -10 }}>
				<div
					className={`h-screen flex flex-col justify-center ${
						isMobile ? 'text-black' : 'text-white'
					} text-center sm:text-left sm:px-24 gap-12`}>
					<p
						data-aos-duration="1000"
						data-aos="fade-right"
						className="tracking-widest font-normal">
						PRESUPUESTOS SIN CARGO
					</p>
					<h1
						data-aos-delay="200"
						data-aos-duration="1000"
						data-aos="fade-right"
						className="text-6xl font-semibold drop-shadow-md">
						Realizamos todo proyecto
					</h1>
					<small
						data-aos-delay="400"
						data-aos-duration="1000"
						data-aos="fade-right"
						className="text-lg">
						Solicitanos el envío y la instalación completa de tus aberturas.{' '}
					</small>
					<Link to={'/contacto'}>
						<button
							data-aos-delay="600"
							data-aos-duration="1000"
							data-aos="fade-right"
							className="self-center btn btn-1 hover-filled-slide-right m-0 sm:self-start">
							{' '}
							<span className="flex">Contacto</span>
						</button>
					</Link>
				</div>
			</Parallax>
		</>
	);
}

export default Home;
