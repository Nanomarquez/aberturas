import './Button.css';

function Home({ clicked }) {
	return (
		<>
			<section className="slider bg-[url('/images/zane-lee-ECsnJcc0Dhs-unsplash-scaled.jpg')] h-screen bg-cover bg-center">
				<div className="content">
					{!clicked && (
						<div className=" flex flex-col items-center pt-60">
							<h4 className="sm:text-4xl lg:text-6xl font-bold text-white">
								DISEÑO PERSONALIZADO
							</h4>
							<button className="btn btn-1 hover-filled-slide-right">
								<span>cotice ahora</span>
							</button>
						</div>
					)}
				</div>
			</section>
		</>
	);
}

export default Home;
