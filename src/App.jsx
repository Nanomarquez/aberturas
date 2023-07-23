import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Navbar/NavBar';
import Home from './pages/Home/Home';
import Obras from './pages/Obras/Obras';
// import Productos from './pages/Productos/Productos';
import Nosotros from './pages/Nosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';
// import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aberturas from './pages/Aberturas/Aberturas';
import Cortinas from './pages/Cortinas/Cortinas';
import Cerramientos from './pages/Cerramientos/Cerramientos';
import Pergolas from './pages/Pergolas/Pergolas';
import Mamparas from './pages/Mamparas/Mamparas';

function App() {
	const [clicked, setClicked] = React.useState(false);
	const handleClick = () => {
		if (window.innerWidth < 768) {
			//cuando esta true lo pasa a false y vice versa
			setClicked(!clicked);
		}
	};

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Header
				clicked={clicked}
				handleClick={handleClick}
			/>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>

				<Route
					path="/nosotros"
					element={<Nosotros />}
				/>
				<Route
					path="/obras"
					element={<Obras />}
				/>
				<Route
					path="/contacto"
					element={<Contacto />}
				/>
				<Route
					path="/aberturas-products"
					element={<Aberturas />}
				/>
				<Route
					path="/cortinas-products"
					element={<Cortinas />}
				/>
				<Route
					path="/cerramientos-products"
					element={<Cerramientos />}
				/>
				<Route
					path="/pergolas-products"
					element={<Pergolas />}
				/>
				<Route
					path="/mamparas-barandas-herreria-products"
					element={<Mamparas />}
				/>
			</Routes>
		</>
	);
}

export default App;
