import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/NavBar';
import Home from './components/Home';
import Obras from './components/Obras';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
<<<<<<< HEAD
import Footer from './components/Footer';
=======
>>>>>>> d296279118dd4ce0e9f56411afc37bb3796d63ae
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
<<<<<<< HEAD
	}, []);
=======
	}, [])
>>>>>>> d296279118dd4ce0e9f56411afc37bb3796d63ae

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
