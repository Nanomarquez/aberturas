import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Button.scss';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '/images/aber_ventanas_20.jpg';
import slide_image_2 from '/images/cerramientos_9.jpg';
import slide_image_3 from '/images/pergolas_1.jpg';
import slide_image_4 from '/images/herreria_preview.jpg';
import slide_image_5 from '/images/cortinas_5.jpg';
import slide_image_6 from '/images/mamparas_preview.jpg';
import slide_image_7 from '/images/barandas_1.jpg';

import { Link } from 'react-router-dom';

function SwiperSlider() {
	return (
		<div className="container">
			<h2
				className="heading text-gray-800"
				data-aos-duration="1000"
				data-aos="fade-up">
				Explorá todos nuestros productos
			</h2>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
				}}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					clickable: true,
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="swiper_container "
				data-aos-duration="1000"
				data-aos-delay="500"
				data-aos="zoom-in">
				<SwiperSlide>
					<div className="relative">
						<img
							src={slide_image_1}
							alt="slide_image"
						/>
						<div className=" absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-[#fff] font-bold lg:text-5xl pt-20 ">
							<h3 className="">ABERTURAS</h3>
						</div>
						<div className=" navcont absolute top-[10rem] left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] pt-20">
							<Link
								to={'/aberturas-products'}
								className=" nav-link nav-link-fade-up">
								VER MAS
							</Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative ">
						<img
							src={slide_image_2}
							alt="slide_image"
						/>
						<div className=" absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-[#fff] font-bold lg:text-5xl pt-20">
							<h3 className="">CERRAMIENTOS</h3>
						</div>
						<div className=" navcont absolute top-[10rem] left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-white pt-20">
							<Link
								to={'/cerramientos-products'}
								className=" nav-link nav-link-fade-up">
								VER MAS
							</Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img
							src={slide_image_3}
							alt="slide_image"
						/>
						<div className=" absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-[#fff] font-bold lg:text-5xl pt-20">
							<h3 className="">PÉRGOLAS</h3>
						</div>
						<div className=" navcont absolute top-[10rem] left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-white pt-20">
							<Link
								to={'/pergolas-products'}
								className=" nav-link nav-link-fade-up">
								VER MAS
							</Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img
							src={slide_image_4}
							alt="slide_image"
						/>
						<div className=" absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-[#fff] font-bold lg:text-5xl pt-20">
							<h3 className="">HERRERÍA</h3>
						</div>
						<div className=" navcont absolute top-[10rem] left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-white pt-20">
							<Link
								to={'/mamparas-barandas-herreria-products'}
								className=" nav-link nav-link-fade-up">
								VER MAS
							</Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img
							src={slide_image_5}
							alt="slide_image"
						/>
						<div className=" absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-[#fff] font-bold lg:text-5xl pt-20">
							<h3 className="">CORTINAS ROLLER</h3>
						</div>
						<div className=" navcont absolute top-[10rem] left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-white pt-20">
							<Link
								to={'/cortinas-products'}
								className=" nav-link nav-link-fade-up">
								VER MAS
							</Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img
							src={slide_image_6}
							alt="slide_image"
						/>
						<div className=" absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-[#fff] font-bold lg:text-5xl pt-20">
							<h3 className="">MAMPARAS</h3>
						</div>
						<div className=" navcont absolute top-[10rem] left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-white pt-20">
							<Link
								to={'/mamparas-barandas-herreria-products'}
								className=" nav-link nav-link-fade-up">
								VER MAS
							</Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img
							src={slide_image_7}
							alt="slide_image"
						/>
						<div className=" absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-[#fff] font-bold lg:text-5xl pt-20">
							<h3 className="">BARANDAS</h3>
						</div>
						<div className=" navcont  absolute top-[10rem] left-0 w-[100%] h-[100%] flex flex-col justify-center items-center bg-color[rgba(0,0,0,0.5)] text-white pt-20">
							<Link
								to={'/mamparas-barandas-herreria-products'}
								className=" nav-link nav-link-fade-up">
								VER MAS
							</Link>
						</div>
					</div>
				</SwiperSlide>

				<div className="slider-controler">
					<div className="swiper-button-prev slider-arrow active:bg-gray-300">
						<ion-icon name="arrow-back-outline">
							<FaArrowLeft />
						</ion-icon>
					</div>
					<div className="swiper-button-next slider-arrow active:bg-gray-300">
						<ion-icon name="arrow-forward-outline">
							<FaArrowRight />
						</ion-icon>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</Swiper>
		</div>
	);
}

export default SwiperSlider;
