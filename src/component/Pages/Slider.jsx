
import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import img from '../../assets/slider.png'; // Replace with your image or make it dynamic

const venues = [
  {
    name: 'Villa Balbianello',
    location: 'Lake Como',
    description: `The whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini) that can host weddings and events in a truly unique setting.
But the special feature of Villa Balbianello is above all the vast garden that surrounds the dwellings, with magnificent holm oaks pruned into an umbrella shape so as to offer a splendid view of Lake Como from   inside the...`,
  },
  {
    name: 'Balbianello',
    location: 'Jakarta',
    description: 'A luxurious retreat offering elegance and timeless charm with lush gardens and panoramic views...',
  },
  {
    name: 'Hotel Balbianello',
    location: 'Bangladesh',
    description: 'This venue combines rich heritage with modern luxury, offering unique event experiences in a serene setting...',
  },
  {
    name: 'Lake Balbianello',
    location: 'Dhaka',
    description: 'Nestled near the riverbanks, this picturesque venue offers sweeping views and romantic vibes...',
  },
  {
    name: 'five-star Balbianello',
    location: 'narayanganj',
    description: 'Nestled near the riverbanks, this picturesque venue offers sweeping views and romantic vibes Nested near the riverbanks, this picturesque venue offers sweeping views and romantic vibes...',
  },
];

const VenueSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % venues.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + venues.length) % venues.length);
  };

  return (
    <div data-aos="fade-up"
    data-aos-duration="3000" className="py-16 px-4 md:px-24 bg-white">
      <h2 className="text-[#90998a] text-xl font-semibold mb-8">Featured venues</h2>

      <div className="bg-[#f9f9f7] rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Image */}
        <img src={img} alt="img" className='w-full h-[467px] rounded-tl-lg rounded-bl-lg' />

        {/* Right Side: Content */}
        <div className="relative p-8 md:p-12 space-y-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-[#90998a] font-semibold">
              {current + 1} / {venues.length}
            </p>
            <h3 className="text-3xl font-serif font-bold text-[#50594d] mt-2">
              {venues[current].name}
            </h3>
            <p className="text-[#90998a] text-sm mt-1">
              {venues[current].location}
            </p>
            <p className="text-gray-600 text-base mt-4 whitespace-pre-line leading-relaxed">
              {venues[current].description.split(' ').slice(0, 40).join(' ')}...{' '}
              <button className="text-[#50594d] cursor-pointer font-semibold underline hover:text-black transition">
                View more
              </button>
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center justify-between pt-4">
            <button
              onClick={prevSlide}
              className="text-[#90998a] text-xl hover:text-[#50594d] transition"
              aria-label="Previous"
            >
              <AiOutlineLeft />
            </button>
            <button
              onClick={nextSlide}
              className="text-[#90998a] text-xl hover:text-[#50594d] transition"
              aria-label="Next"
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueSlider;
