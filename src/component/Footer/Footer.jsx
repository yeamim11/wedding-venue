// import React from 'react'
// import logo from '../../assets/logo.png'
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


// const Footer = () => {
//   return (
//     <div className='md:px-52 p-4 bg-[#424242] text-white'>
//       <div className=" flex justify-between items-center py-4">
//         <div className="">
//           <img src={logo} alt="logo" className='w-[121px] h-[80px]' />
//         </div>
//         {/* ==================== */}
//         <div className="">
//           <ul className="flex gap-10">
//             <li className="hover:text-black hover:font-bold hover:text-3xl transform duration-200" ><a href="#browse">About us</a></li>
//             <li className="hover:text-black  hover:font-bold hover:text-3xl transform duration-200"><a href="#services">Terms of Service</a></li>
//             <li className="hover:text-black  hover:font-bold hover:text-3xl transform duration-200"><a href="#contact">Privacy Policy</a></li>
//             <li className="hover:text-black  hover:font-bold hover:text-3xl transform duration-200"><a href="#contact">FAQ</a></li>
//           </ul>
//         </div>
//         {/* ======================= */}
//         <div className="flex gap-3 text-2xl">
//           <FaFacebook className="hover:text-black  hover:font-bold hover:text-3xl transform duration-200" />
//           <FaInstagram className="hover:text-black  hover:font-bold hover:text-3xl transform duration-200" />
//           <FaTwitter className="hover:text-black  hover:font-bold hover:text-3xl transform duration-200" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer




import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#424242] text-white px-10 md:px-20 lg:px-32 py-8">
      <div className="flex flex-col md:flex-row md:items-center items-start justify-between gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Company Logo" className="w-[100px] md:w-[120px] h-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm md:text-base text-start md:text-center">
          <li>
            <a
              href="#about"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#terms"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="#privacy"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300 transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300 transition duration-300">
            <FaTwitter />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
