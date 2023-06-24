import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/NavBar';
import Home from './components/Home';
import Obras from './components/Obras';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';

function App() {
	
	const [clicked, setClicked] = React.useState(false);
	const handleClick = () => {
		//cuando esta true lo pasa a false y vice versa
		setClicked(!clicked);
	};

	return (
		<>
			<Header
				clicked={clicked}
				handleClick={handleClick}
			/>
			<Routes>
				<Route
					path="/"
					element={<Home clicked={clicked} />}
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
