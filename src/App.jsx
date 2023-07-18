import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Navbar/NavBar';
import Home from './pages/Home';
import Obras from './pages/Obras';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
// import Footer from './components/Footer/Footer';
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
		</>
	);
}

export default App;
