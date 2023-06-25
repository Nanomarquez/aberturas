import './NavBar.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import BurguerButton from './BurguerButton';
import LogoImg from '../assets/logo-1-140x76.png';
import { useState, useEffect , useRef} from 'react';

function Navbar({ clicked, handleClick }) {
	
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const navbarRef = useRef(null);

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

	return (
		<>
			<div
				ref={navbarRef}
				style={{
					transform: `translateY(${navbarVisible ? '0' : '-100px'})`,
					transition: 'transform 0.3s ease',
				}}
				className={`nav-container fixed duration-200 ${navbarVisible ? '' : 'hiddden'} w-full ${
					!clicked ? 'bg-[#33333354] backdrop-blur-sm drop-shadow-sm' : 'bg-transparent'
				}`}>
				<img
					src={LogoImg}
					alt="Logo img"
					className="object-cover z-20"
				/>

				<div className={`links ${clicked ? 'active' : ''} gap-7`}>
					<Link
						className="drop-shadow-lg font-semibold"
						to={'/'}>
						INICIO
					</Link>
					<Link
						className="drop-shadow-lg font-semibold"
						to={'/productos'}>
						PRODUCTOS
					</Link>
					<Link 
						className="drop-shadow-lg font-semibold"
						to={'/nosotros'}>
						NOSOTROS
					</Link>
					<Link
						className="drop-shadow-lg font-semibold"
						to={'/obras'}>
						OBRAS
					</Link>
					<Link 
						className="drop-shadow-lg font-semibold"
						to={'/contacto'}>
						CONTACTO
					</Link>
					<div className="social-links">
						<a
							href="https://www.facebook.com/profile.php?id=100090343286715"
							target="_blank">
							<FaFacebook className='text-6xl sm:text-2xl'/>
						</a>
						<a
							href="https://www.instagram.com/tecnoaberturasdc/"
							target="_blank">
							<FaInstagram className='text-6xl sm:text-2xl'/>
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
			</div>
		</>
	);
}

export default Navbar;
