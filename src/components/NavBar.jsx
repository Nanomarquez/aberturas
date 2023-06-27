import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import BurguerButton from "./BurguerButton";
import LogoImg from "../assets/logo-1-140x76.png";
import { useState, useEffect, useRef } from "react";

function Navbar({ clicked, handleClick }) {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbarHeight = navbarRef.current.offsetHeight;

      setNavbarVisible(
        (prevScrollPos > currentScrollPos && currentScrollPos > navbarHeight) ||
          currentScrollPos < navbarHeight
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const listItem = document.querySelectorAll("#landing-header a");
    const menuBackDrop = document.querySelector("#menu-backdrop");

    listItem.forEach((item) => {
      if (item.id !== "home")
        item.addEventListener("mouseenter", () => {
          const { left, top, width, height } = item.getBoundingClientRect();

          menuBackDrop.style.setProperty("--left", `${left}px`);
          menuBackDrop.style.setProperty("--top", `${top}px`);
          menuBackDrop.style.setProperty("--width", `${width}px`);
          menuBackDrop.style.setProperty("--height", `${height}px`);

          menuBackDrop.style.opacity = "1";
          menuBackDrop.style.visibility = "visible";
        });

      item.addEventListener("mouseleave", () => {
        menuBackDrop.style.opacity = "0";
        menuBackDrop.style.visibility = "hidden";
      });
    });
  }, []);

  return (
    <>
      <div
        ref={navbarRef}
        style={{
          transform: `translateY(${navbarVisible ? "0" : "-100px"})`,
          transition: "transform 0.3s ease",
        }}
        id="landing-header"
        className={`nav-container fixed duration-300 ${
          navbarVisible ? "" : "hiddden"
        } w-full ${
          !clicked
            ? "bg-[#33333354] backdrop-blur-sm drop-shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Link id="home" to={"/"} className="z-[9999] ">
          <img src={LogoImg} alt="Logo img" className="object-cover z-[9999999]" />
        </Link>

        <div className={`links ${clicked ? "active" : ""} gap-7`}>
          <Link className="drop-shadow-lg font-semibold py-1 px-2" to={"/"}>
            INICIO
          </Link>
          <Link
            className="drop-shadow-lg font-semibold py-1 px-2"
            to={"/productos"}
          >
            PRODUCTOS
          </Link>
          <Link
            className="drop-shadow-lg font-semibold py-1 px-2"
            to={"/nosotros"}
          >
            NOSOTROS
          </Link>
          <Link
            className="drop-shadow-lg font-semibold py-1 px-2"
            to={"/obras"}
          >
            OBRAS
          </Link>
          <Link
            className="drop-shadow-lg font-semibold py-1 px-2"
            to={"/contacto"}
          >
            CONTACTO
          </Link>
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=100090343286715"
              target="_blank"
              className="py-2 px-2"
            >
              <FaFacebook className="text-6xl sm:text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/tecnoaberturasdc/"
              target="_blank"
              className="py-2 px-2"
            >
              <FaInstagram className="text-6xl sm:text-2xl" />
            </a>
          </div>
        </div>
        <div className="burguer z-[25]">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`bg-div initial ${clicked ? "active" : ""}`}></div>
        <div
          id="menu-backdrop"
          className={` 
     				absolute bg-slate-300/50 backdrop-blur-lg rounded
    			   translate-x-[var(--left)] translate-y-[var(--top)]
     				left-0 top-0
     				w-[var(--width)] h-[var(--height)]
      			transition-all duration-500 ease-in-out opacity-0 -z-10 shadow-md`}
        ></div>
      </div>
    </>
  );
}

export default Navbar;
