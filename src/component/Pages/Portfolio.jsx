
import React from 'react'
import img1 from '../../assets/port/img_placeholder.png'
import img2 from '../../assets/port/img_placeholder (1).png'
import img3 from '../../assets/port/img_placeholder (2).png'    
import img4 from '../../assets/port/img_placeholder (3).png'

const Portfolio = () => {
  const cards = [
    { image: img1, title: "THE WEDDING OF", name: "Joy & Jordan" },
    { image: img2, title: "THE WEDDING OF", name: "Dianne & Michael" },
    { image: img3, title: "THE WEDDING OF", name: "Gabrielle & Simon" },
    { image: img4, title: "THE WEDDING OF", name: "Zee & Adrian" },
  ];

  return (
    <div data-aos="fade-up" className='md:px-52 md:py-28 p-4'>
      <p className='text-[#90998a] text-xl font-semibold leading-7'>
        Our Portfolios
      </p>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-10">
        {cards.map((card, index) => (
          <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
            key={index} 
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <img 
              src={card.image} 
              alt={card.name} 
              className="w-full h-64 object-cover group-hover:opacity-80 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 text-white text-center rounded-b-lg">
              <h3 className='text-sm'>{card.title}</h3>
              <p className=' font-bold text-center justify-start text-white text-2xl leading-loose'>{card.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

