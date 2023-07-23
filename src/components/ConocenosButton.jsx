import { Link } from 'react-scroll';

const ConocenosButton = () => {
	return (
		<Link
			to="p-scroll"
			smooth={false}
			duration={1000}
			id="conocenos"
			data-aos-delay="600"
			data-aos-duration="1000"
			data-aos="zoom-in"
			className="button button2 mt-5  font-medium ">
			<button>VER MAS</button>
		</Link>
	);
};

export default ConocenosButton;
