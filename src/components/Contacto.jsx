import Form from './Form';
const bgColor = import.meta.env.VITE_COLOR_GRIS;

export default function Contacto() {
	return (
		<>
			<div className={`bg-[#${bgColor}]`}>
				<Form />
			</div>
		</>
	);
}
