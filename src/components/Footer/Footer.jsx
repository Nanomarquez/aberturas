import LogoImg from '/images/Logo-_Tecno_Aberturas_DC__2_-removebg-preview.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-5">
      <div className="container mx-auto  flex flex-wrap justify-between items-center ">
        <div className="w-full md:w-auto mb-10 md:mb-0">
          <img
            src={LogoImg}
            alt="Logo"
            className="max-w-[11rem] object-cover z-[9999999] mx-auto md:mx-0"
          />
          <p className="mt-4 text-sm text-center md:text-left">
            ¡TRANSFORMÁ TU HOGAR CON NOSOTROS!
          </p>
          <div className="social-links mt-4 flex justify-center md:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=100090343286715"
              target="_blank"
              className="inline-block mr-4"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/tecnoaberturasdc/"
              target="_blank"
              className="inline-block"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-auto mb-10 md:mb-0">
          <p className="text-sm font-bold mb-2 text-center md:text-left">
            Contacto
          </p>
          <p className="text-sm text-center md:text-left">
            <a href="tel://1165282356">Tel: 11 6528 2356</a>
          </p>
          <p className="text-sm text-center md:text-left">
            <a href="">info@tecnoaberturasdc.com.ar</a>
          </p>
          <p className="text-sm text-center md:text-left">
            Pilar, Prov. de Buenos Aires
          </p>
        </div>
        <div className="w-full md:w-auto">
          <p className="text-sm font-bold mb-2 text-center md:text-left">
            Horario de atención
          </p>
          <p className="text-sm text-center md:text-left">
            Lunes a Viernes: 8:00 a 17:00 hs
          </p>
          
        </div>
      </div>
      <hr className="border-gray-700 my-10" />
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2023 Tecno Aberturas DC | Fábrica de Aberturas a Medida
        </p>
      </div>
    </footer>
  );
}