import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/NavBar';
import Home from './components/Home';
import Obras from './components/Obras';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
					path="/productos"
					element={<Productos />}
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
			</Routes>
			<Footer></Footer>
		</>
	);
}

export default App;
