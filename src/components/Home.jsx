import "./Button.css";
import { Parallax } from "react-parallax";
import bg from '../../public/images/zane-lee-ECsnJcc0Dhs-unsplash-scaled.jpg'

function Home({ clicked }) {
  return (
    <>
      <section className="slider bg-[url('/images/zane-lee-ECsnJcc0Dhs-unsplash-scaled.jpg')] h-screen bg-cover bg-center">
        <div className="content">
          {!clicked && (
            <div className=" flex flex-col items-center pt-60">
              <h4
                data-aos-duration="1000"
                data-aos="zoom-in"
                className="sm:text-4xl lg:text-5xl drop-shadow-md font-bold text-white"
              >
                DISEÑO PERSONALIZADO
              </h4>
              <button
                data-aos-duration="1000"
                data-aos="fade-up"
                className="btn btn-1 hover-filled-slide-right"
              >
                <span>cotice ahora</span>
              </button>
            </div>
          )}
        </div>
      </section>
			<Parallax strength={-200} bgImage={bg} blur={{min:10,max:-10}} className="h-screen">

			</Parallax>
    </>
  );
}

export default Home;
