import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import BurguerButton from '../BurguerButtom/BurguerButton';
import LogoImg from '/images/Logo-_Tecno_Aberturas_DC__2_-removebg-preview.png';
import { useState, useEffect, useRef } from 'react';

function Navbar({ clicked, handleClick }) {
	const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
	const [navbarVisible, setNavbarVisible] = useState(true);
	const navbarRef = useRef(null);

	const location = useLocation();

	const [navBarColor, setNavBarColor] = useState('#33333354');

	useEffect(() => {
		//  console.log(location.pathname == '/contacto');
		if (location.pathname == '/contacto') {
			setNavBarColor('#040404');
		} else {
			setNavBarColor('#33333354');
		}
	}, [location.pathname]);

	//   console.log(location.pathname);
	// console.log(navBarColor)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			const navbarHeight = navbarRef.current.offsetHeight;

			setNavbarVisible(
				(prevScrollPos > currentScrollPos && currentScrollPos > navbarHeight) ||
					currentScrollPos < navbarHeight
			);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	useEffect(() => {
		const listItem = document.querySelectorAll('#landing-header a');
		const menuBackDrop = document.querySelector('#menu-backdrop');

		listItem.forEach((item) => {
			if (item.id !== 'home')
				item.addEventListener('mouseenter', () => {
					const { left, top, width, height } = item.getBoundingClientRect();

					menuBackDrop.style.setProperty('--left', `${left}px`);
					menuBackDrop.style.setProperty('--top', `${top}px`);
					menuBackDrop.style.setProperty('--width', `${width}px`);
					menuBackDrop.style.setProperty('--height', `${height}px`);

					menuBackDrop.style.opacity = '1';
					menuBackDrop.style.visibility = 'visible';
				});

			item.addEventListener('mouseleave', () => {
				menuBackDrop.style.opacity = '0';
				menuBackDrop.style.visibility = 'hidden';
			});
		});
	}, []);

	return (
		<>
			<div
				ref={navbarRef}
				style={{
					transform: `translateY(${navbarVisible ? '0' : '-100px'})`,
					transition: 'transform 0.3s ease',
					backgroundColor: navBarColor,
				}}
				id="landing-header"
				className={`nav-container fixed duration-300 ${
					navbarVisible ? '' : 'hiddden'
				} w-full ${!clicked ? `backdrop-blur-sm drop-shadow-sm` : 'bg-transparent'}`}>
				<Link
					id="home"
					to={'/'}
					className="z-[9999] ml-2">
					<img
						src={LogoImg}
						alt="Logo img"
						className="max-w-[13rem] object-cover z-[9999999]"
					/>
				</Link>

				<div className={`links ${clicked ? 'active' : ''} gap-7`}>
					<Link
						className="drop-shadow-lg font-semibold py-1 px-2"
						to={'/'}
						onClick={handleClick}>
						INICIO
					</Link>
					<div className="mx-auto flex h-screen w-full items-center justify-center bg-transparent py-20">
						<div className="group relative cursor-pointer py-2">
							<div className="flex items-center justify-between space-x-5 bg-transparent px-4">
								<Link
									to={'/productos'}
									className="menu-hover my-2 py-2 text-base font-semibold text-black lg:mx-4"
									onClick="">
									PRODUCTOS
								</Link>
							</div>
							<div
								className="invisible absolute z-50 flex w-full flex-col bg-transparent py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
								onClick="">
								<Link
									to={'/productos'}
									className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
									ABERTURAS
								</Link>

								<Link
									to={'/productos'}
									className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
									PÉRGOLAS
								</Link>
								<Link
									to={'/productos'}
									className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
									MAMPARAS
								</Link>
								<Link
									to={'/productos'}
									className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
									BARANDAS
								</Link>
								<Link
									to={'/productos'}
									className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
									CORTINAS ROLLER
								</Link>
								<Link
									to={'/productos'}
									className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
									HERRERÍA
								</Link>
							</div>
						</div>
					</div>

					<Link
						className="drop-shadow-lg font-semibold py-1 px-2"
						to={'/nosotros'}
						onClick={handleClick}>
						NOSOTROS
					</Link>
					<Link
						className="drop-shadow-lg font-semibold py-1 px-2"
						to={'/obras'}
						onClick={handleClick}>
						OBRAS
					</Link>
					<Link
						className="drop-shadow-lg font-semibold py-1 px-2"
						to={'/contacto'}
						onClick={handleClick}>
						CONTACTO
					</Link>

					<div className="social-links">
						<a
							href="https://www.facebook.com/profile.php?id=100090343286715"
							target="_blank"
							className="py-2 px-2">
							<FaFacebook className="text-6xl sm:text-2xl" />
						</a>
						<a
							href="https://www.instagram.com/tecnoaberturasdc/"
							target="_blank"
							className="py-2 px-2">
							<FaInstagram className="text-6xl sm:text-2xl" />
						</a>
					</div>
				</div>
				<div className="burguer z-[25]">
					<BurguerButton
						clicked={clicked}
						handleClick={handleClick}
					/>
				</div>
				<div className={`bg-div initial ${clicked ? 'active' : ''}`}></div>
				<div
					id="menu-backdrop"
					className={`
     				absolute bg-slate-300/50 backdrop-blur-lg rounded
    			   translate-x-[var(--left)] translate-y-[var(--top)]
     				left-0 top-0
     				w-[var(--width)] h-[var(--height)]
      			transition-all duration-500 ease-in-out opacity-0 -z-10 shadow-md`}></div>
			</div>
		</>
	);
}

export default Navbar;
