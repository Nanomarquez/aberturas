import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Importa los iconos de Leaflet (es necesario para corregir el tamaño de los iconos en React)
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Configura los iconos de Leaflet para React
let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
	const position = [-34.46517104297939, -58.91531125943224]; // Define las coordenadas de la ubicación del mapa: -,
	const position2 = [-34.44944821614411, -58.95359200377997]; // Define las coordenadas de la ubicación del mapa: -,

	return (
		<MapContainer
			center={position}
			zoom={13}
			style={{ height: '400px' }}>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker
				position={position}
				eventHandlers={{
					click: () => {
						// Abre el enlace de Google Maps en una pestaña aparte
						window.open(
							'https://www.google.com/maps/dir//Rincon,+Pilar,+Provincia+de+Buenos+Aires/@-34.4662954,-58.9854123,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95bc83afa3214cd7:0x25e1249a849b6cd5!2m2!1d-58.9153722!2d-34.4663154?entry=ttu',
							'_blank',
							'rel="noopener noreferrer"'
						);
					},
				}}
			/>
			<Marker
				position={position2}
				eventHandlers={{
					click: () => {
						// Abre el enlace de Google Maps en una pestaña aparte
						window.open(
							'https://www.google.com/maps/dir//Rincon,+Pilar,+Provincia+de+Buenos+Aires/@-34.4662954,-58.9854123,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95bc83afa3214cd7:0x25e1249a849b6cd5!2m2!1d-58.9153722!2d-34.4663154?entry=ttu',
							'_blank',
							'rel="noopener noreferrer"'
						);
					},
				}}
			/>
		</MapContainer>
	);
};

export default Map;
