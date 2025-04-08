// import React from 'react'
// import location1 from '../../assets/location/img_placeholder (1).png'
// import location2 from '../../assets/location/img_placeholder (2).png'
// import location3 from '../../assets/location/img_placeholder (3).png'
// import location4 from '../../assets/location/img_placeholder (4).png'
// import location5 from '../../assets/location/img_placeholder (4).png'
// import location6 from '../../assets/location/img_placeholder.png'
// import location7 from '../../assets/location/img_placeholder (1).png'
// import location8 from '../../assets/location/img_placeholder (3).png'


// const Location = () => {
//     const location = [
//         {
//             title: "Florence",
//             image: location1,
//         },
//         {
//             title: "San Gamignano",
//             image: location2,
//         },
//         {
//             title: "Volterra",
//             image: location3,
//         },
//         {
//             title: "Chianti",
//             image: location4,
//         },
//         {
//             title: "Val d’Orcia",
//             image: location5,
//         },
//         {
//             title: "Siena",
//             image: location6,
//         },
//         {
//             title: "Lucca",
//             image: location7,
//         },
//         {
//             title: "Browse more",
//             image: location8,
//         },
//     ]



//     return (
//         <div className='md:px-52 md:py-28 p-4'>
//             <div className="text-center">
//                 <h2 className='self-stretch text-[#56614f] text-[32px] font-bold leading-10 '>Location</h2>
//                 <p className=' self-stretch text-[#b7c1b2] text-base font-normal leading-normal'>that you will remember forever</p>
//             </div>
//             {/* ============== Location Category ================= */}

//             <div className='container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 cursor-pointer'>
//                 {location.map((location, index) => (
//                     <div key={index} className="relative h-40 transform transition-transform duration-300 hover:scale-105">
//                         <img src={location.image} alt="" className='w-full h-full object-cover rounded-lg shadow-md' />
//                         <div className="absolute top-32 left-12 ">
//                             <p className='text-white'>{location.title}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Location



import React from 'react'

import location1 from '../../assets/location/img_placeholder (1).png'
import location2 from '../../assets/location/img_placeholder (2).png'
import location3 from '../../assets/location/img_placeholder (3).png'
import location4 from '../../assets/location/img_placeholder (4).png'
import location5 from '../../assets/location/img_placeholder (4).png'
import location6 from '../../assets/location/img_placeholder.png'
import location7 from '../../assets/location/img_placeholder (1).png'
import location8 from '../../assets/location/img_placeholder (3).png'


const Location = () => {
    const locations = [
        { title: "Florence", image: location1 },
        { title: "San Gamignano", image: location2 },
        { title: "Volterra", image: location3 },
        { title: "Chianti", image: location4 },
        { title: "Val d’Orcia", image: location5 },
        { title: "Siena", image: location6 },
        { title: "Lucca", image: location7 },
        { title: "Browse more", image: location8 },
    ]

    return (
        <div className='md:px-52 md:py-20 p-4'>
            <div className="text-center mb-6">
                <h2 className='text-[#56614f] text-[32px] font-bold leading-10'>Location</h2>
                <p className='text-[#b7c1b2] text-base'>that you will remember forever</p>
            </div>

            {/* ============== Location Grid ================= */}
            <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer'>
                {locations.map((location, index) => (
                    <div key={index} className="relative h-40 transform transition-transform duration-300 hover:scale-105">
                        <img src={location.image} alt={location.title} className='w-full h-full object-cover rounded-lg shadow-md' />
                        <div className="absolute inset-x-0 bottom-4 text-start left-4">
                            <p className='text-white font-semibold'>{location.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Location
