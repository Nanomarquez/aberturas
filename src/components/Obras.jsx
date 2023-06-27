import img1 from "../../public/images/339101016_5799821736793996_4235762734985220392_n (1).jpg";
import img2 from "../../public/images/barandas-edificios.jpg";
import img3 from "../../public/images/FB_IMG_1685797806539.jpg";
import img4 from "../../public/images/portada-cerramientos.jpg";
import img5 from "../../public/images/r-architecture-updbdgKxp5k-unsplash-scaled.jpg";
import img6 from "../../public/images/r-architecture-Y8MJFQYYjh8-unsplash.jpg";
import img7 from "../../public/images/tecnoaberturasdc.jpg";
import img8 from "../../public/images/zane-lee-ECsnJcc0Dhs-unsplash-scaled.jpg";

export default function Obras() {
  const data = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
  ];

  return (
    <>
    <div className={`h-screen bg-[url("../../public/images/tecnoaberturasdc.jpg")] bg-cover flex flex-col justify-center items-center gap-10 text-white`}>
      <p>FÁBRICA DE ABERTURAS A MEDIDA EN PILAR</p>
      <h2 className="text-5xl font-bold">Nuestras Obras</h2>
    </div>
    <div className="gallery">
      {data.map((e, i) => (
        <div className="pics relative overflow-hidden rounded-md" key={i}>
          <img src={e.src} alt="asd" className="w-full" />
          <div className="card-body">
            <h1>Titulo</h1>
            <p>Descripcion</p>
            <button>Boton</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
