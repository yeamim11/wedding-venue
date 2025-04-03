import React from 'react';
import img1 from '../../assets/services/photo.png';
import img2 from '../../assets/services/ceremony.png';
import img3 from '../../assets/services/wedding.png';

const Services = () => {
    const services = [
        {
            title: "Photography",
            image: img1,
        },
        {
            title: "Ceremony",
            image: img2,
        },
        {
            title: "Wedding Design",
            image: img3,
        },
    ];

    return (
        <div className='bg-[#f8f9f7] rounded-lg py-16 px-4 md:px-20 flex flex-col items-center'>
            <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-xl p-12 flex flex-col md:flex-row md:items-start">
                <div className="md:w-1/3 text-left md:pr-8">
                    <h2 className='text-[#56614f] text-4xl font-bold'>Services</h2>
                    <p className='text-[#b7c1b2] text-lg mt-2'>To plan and orchestrate your special occasion</p>
                </div>
                
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 md:mt-8 w-full ">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200">
                            <img src={service.image} alt={service.title} className="w-full h-60 object-cover rounded-t-xl" />
                            <div className="p-4 text-center">
                                <h3 className='text-[#56614f] text-lg font-semibold'>{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;











// import React from 'react';
// import img1 from '../../assets/services/photo.png';
// import img2 from '../../assets/services/ceremony.png';
// import img3 from '../../assets/services/wedding.png';

// const Services = () => {
//     const services = [
//         {
//             title: "Photography",
//             image: img1,
//         },
//         {
//             title: "Ceremony",
//             image: img2,
//         },
//         {
//             title: "Wedding Design",
//             image: img3,
//         },
//     ];

//     return (
//         <div className='bg-[#f8f9f7] rounded-lg py-16 px-4 md:px-20 flex flex-col items-center'>
//             <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-start">
//                 <div className="md:w-1/3 w-full text-left md:text-left mb-6 md:mb-0">
//                     <h2 className='text-[#56614f] text-4xl font-bold'>Services</h2>
//                     <p className='text-[#b7c1b2] text-lg mt-2 max-w-xs md:mx-0 '>To plan and orchestrate your special occasion.</p>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:w-2/3 w-full">
//                     {services.map((service, index) => (
//                         <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
//                             <img src={service.image} alt={service.title} className="w-full h-60 object-cover" />
//                             <div className="p-4 text-center">
//                                 <h3 className='text-[#56614f] text-lg font-semibold'>{service.title}</h3>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Services;








