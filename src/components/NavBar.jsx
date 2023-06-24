import './NavBar.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import BurguerButton from './BurguerButton';
import LogoImg from '../assets/logo-1-140x76.png';

function Navbar({ clicked, handleClick }) {
	return (
		<>
			<div
				className={`nav-container fixed duration-200 w-full ${
					!clicked ? 'bg-[#33333354]' : 'bg-transparent'
				}`}>
				<img
					src={LogoImg}
					alt="Logo img"
					className="object-cover z-20"
				/>

				<div className={`links ${clicked ? 'active' : ''}`}>
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
							target="blank_">
							<FaFacebook />
						</a>
						<a
							href="https://www.instagram.com/tecnoaberturasdc/"
							target="blank_">
							<FaInstagram />
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
