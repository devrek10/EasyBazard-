import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineUserAdd,
  AiOutlineLogin,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import "./Navigation.css";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../redux/api/usersSlice"; 
import { logout } from "../../redux/features/auth/authSlice";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const [dropDownOpen, setDropdownOpen] = useState(false);
  const [sideBarMenu, setSideBarMenu] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropDownOpen);
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [ logoutApiCall ] = useLoginMutation()

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  



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
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <FaHeart className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem] ">Favorite</span>
        </Link>
      </div>

      <div className="relative">
        <button onClick={toggleDropdown}
        className="flex items-center text-gray-800 focus:outline-none">
         {userInfo?.name ? <span className="text-white">{userInfo.userName}</span> 
         : <>
         
         </>}
        </button>
      </div>

      <ul>
        <li>
          <Link to="/login" className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineLogin className="mr-2 mt-[3rem]" size={26} />
            <span className="hidden nav-item-name mt-[3rem] ">Se Connecter</span>
          </Link>
        </li>
        <li>
          <Link to="/register" className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineUserAdd className="mr-2 mt-[3rem]" size={26} />
            <span className="hidden nav-item-name mt-[3rem] ">S'inscrire</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
