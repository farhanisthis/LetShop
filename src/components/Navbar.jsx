import React from "react";
import { Link } from "react-router-dom";
import svg from "../assets/img1.jpg";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-sky-200">
        <h1 className="font-bold text-[2rem] mx-5 flex text-blue-600">LetShop</h1>
        <main className="flex gap-2 mx-5 font-semibold text-blue-600 ">
          <img
            src={svg}
            alt="Menu"
            className="hidden "
          />
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Contact"}>Contact</Link>
          <Link to={"/#Services"}>Services</Link>
        </main>
      </nav>
    </>
  );
};

export default Navbar;
