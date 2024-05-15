import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import "./Navigation.css";

const Navigation = () => {
  const [dropDownOpen, setDropdownOpen] = useState(false);
  const [sideBarMenu, setSideBarMenu] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropDownOpen);
  };
  return (
    <div
      style={{ zIndex: 999 }}
      className={`${sideBarMenu ? "hidden" : "flex"}
     xl:flex lg:flex md:hidden flex-col justify-between p-4 text-white 
     bg-[#000] w-[4%] hover:w-[15%] h-[100vh] fixed `}
      id="navigation-container"
    >
      <div className="flex justify-center flex-col space-y-4">
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineHome className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem] ">Accueil</span>
        </Link>
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineShopping className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem] ">Shop</span>
        </Link>
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineShoppingCart className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem] ">Carte</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
