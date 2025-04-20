import React, { useState } from "react";
import logo from "../../assets/image/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="z-10 flex justify-between items-center px-6 md:px-16 py-6 fixed w-full md:bg-[#576250]/30  bg-[#576250]/30  ">
            {/* Logo */}
            <div>
                <a href="#">
                    <img src={logo} alt="logo" className="w-[59px] h-[39px]" />
                </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-end items-center gap-10 text-white text-base font-normal">
                <ul className="flex gap-10">
                    <li className="hover:text-black hover:font-bold hover:text-3xl transform duration-200" ><a href="#browse">Browse</a></li>
                    <li className="hover:text-black  hover:font-bold hover:text-3xl transform duration-200"><a href="#services">Services</a></li>
                    <li className="hover:text-black  hover:font-bold hover:text-3xl transform duration-200"><a href="#contact">Contact us</a></li>
                </ul>
                <div className="flex gap-3 text-2xl">
                    <FaFacebook className="hover:text-black  hover:font-bold hover:text-3xl transform duration-200" />
                    <FaInstagram className="hover:text-black  hover:font-bold hover:text-3xl transform duration-200" />
                    <FaTwitter className="hover:text-black  hover:font-bold hover:text-3xl transform duration-200" />
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(true)}>
                <IoMdMenu />
            </button>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-64 h-screen bg-[#576250]/90 text-white flex flex-col items-start gap-6 p-6 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 md:hidden`}>
                {/* Close Button */}
                <button className="absolute right-10 top-6 text-4xl mt-10" onClick={() => setMenuOpen(false)}>
                    <IoClose />
                </button>

                <ul className="mt-20 space-y-4">
                    <li><a onClick={() => setMenuOpen(false)} href="#browse">Browse</a></li>
                    <li><a onClick={() => setMenuOpen(false)} href="#services">Services</a></li>
                    <li><a onClick={() => setMenuOpen(false)} href="#contact">Contact Us</a></li>
                </ul>
                <div className="flex flex-col gap-3 text-2xl">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;




