// import React from 'react'
// import img from '../../assets/slider.png'
// const Slider = () => {
//   return (
//     <div className=' py-16 md:px-52 md:py-10 px-4'>
//        <div className="">
//         <h2 className=' text-start text-[#90998a] text-xl font-semibold leading-7' >Featured venues</h2>
//        </div>
//        {/* =========================== */}
//        <div className="slider grid grid-cols-1 md:grid-cols-2 pt-10">
//         <div className="img">
//           <img src={img} alt="img" />
//         </div>
//         <div className="slider section">
          
//         </div>
//        </div>
//     </div>
//   )
// }

// export default Slider






import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img from "../../assets/slider.png";

const venues = [
  {
    id: 1,
    name: "Villa Balbianello",
    location: "Lake Como",
    description:
      "The whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini) that can host weddings and events in a truly unique setting. But the special feature of Villa Balbianello is above all the vast garden that surrounds the dwellings, with magnificent holm oaks pruned into an umbrella shape so as to offer a splendid view of Lake Como from inside the...",
  },
  // Add more venues here if needed
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 bottom-4 z-10 text-[#90998a] hover:text-black"
  >
    <ArrowLeft size={20} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 bottom-4 z-10 text-[#90998a] hover:text-black"
  >
    <ArrowRight size={20} />
  </button>
);

const VenueSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="py-16 md:px-52 md:py-10 px-4">
      <div>
        <h2 className="text-start text-[#90998a] text-xl font-semibold leading-7">
          Featured venues
        </h2>
      </div>

      <div className="slider grid grid-cols-1 md:grid-cols-2 pt-10">
        <div className="img">
          <img src={img} alt="Venue" className="rounded-2xl shadow-md" />
        </div>

        <div className="slider-section bg-[#f5f6f0] px-4 py-10 rounded-2xl relative">
          <Slider {...settings}>
            {venues.map((venue) => (
              <div
                key={venue.id}
                className="bg-white p-10 shadow-md rounded-2xl h-full"
              >
                <p className="text-[#90998a] text-sm font-semibold">
                  {venue.id} / {venues.length}
                </p>
                <h2 className="text-[#50594d] text-3xl font-bold mt-2">
                  {venue.name}
                </h2>
                <p className="text-[#90998a] text-sm mt-1">{venue.location}</p>
                <p className="text-gray-500 text-base mt-4 leading-relaxed">
                  {venue.description}
                  <span className="text-[#50594d] font-semibold ml-1 cursor-pointer">
                    View more
                  </span>
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VenueSlider;
