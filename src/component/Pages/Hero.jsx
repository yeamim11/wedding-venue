import React from 'react'
import banner from '../../assets/image/banner.png'
import { IoIosArrowRoundDown } from "react-icons/io";

const Hero = () => {
    return (
        <div>
            <div className="w-full md:w-full h-screen md:h-screen relative bg-cover bg-center bg-no-repeat flex flex-col gap-10 items-center "
                style={{ backgroundImage: `url(${banner})`,backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>  
                <div className="absolute inset-0 bg-black/30"></div> {/* Optional overlay */}

                <div data-aos="fade-up" className=" text-white text-center md:w-[820px] md:mt-28 mt-28 px-6">
                    <p className="text-[#464d43] text-2xl md:text-[56px] font-normal leading-[30px] md:leading-[64px]">Descover Your Perfrct US Wedding Venue
                    </p>
                    <p className=" text-[#333532] text-base font-normal leading-normal md:px-10">Sagittis adipiscing posuere id adipiscing aliquam posuere. Aliquet faucibus duis accumsan aliquet tempor diam dignissim suscipit. Nibh urna ut diam fames.</p>
                </div>
                <button  data-aos="fade-up" >
                    <IoIosArrowRoundDown className="text-[#464d43] text-4xl" />
                    <p className='text-[#333532] text-base font-normal'>Scroll</p>
                </button>

            </div>







        </div>
    )
}

export default Hero