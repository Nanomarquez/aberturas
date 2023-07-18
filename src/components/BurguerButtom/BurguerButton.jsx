import './BurguerButtom.css';

export default function BurguerButton({ clicked, handleClick }) {
	return (
		<div
			className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}
			onClick={handleClick}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}
