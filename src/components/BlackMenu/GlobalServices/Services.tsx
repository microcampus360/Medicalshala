import React from 'react';
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import 'swiper/css';
import { MouseEventHandler } from 'react';

import cardio from "../../../assets/BlackMenu/globalServices/specialities/anesth.png"
import cardio1 from "../../../assets/BlackMenu/globalServices/specialities/cardio.png"
import derm from "../../../assets/BlackMenu/globalServices/specialities/derma.png"
import endo from "../../../assets/BlackMenu/globalServices/specialities/endo.png"
import gastro from "../../../assets/BlackMenu/globalServices/specialities/gastro.png"
import infec from "../../../assets/BlackMenu/globalServices/specialities/infec.png"
import int from "../../../assets/BlackMenu/globalServices/specialities/internal.png"
import neu from "../../../assets/BlackMenu/globalServices/specialities/neuro.png"
import onco from "../../../assets/BlackMenu/globalServices/specialities/oncology.png"
import opt from "../../../assets/BlackMenu/globalServices/specialities/ophthal.png"
import orth from "../../../assets/BlackMenu/globalServices/specialities/ortho.png"
import sur from "../../../assets/BlackMenu/globalServices/specialities/surgery.png"

const specialties = [
  { image: cardio, title: 'Anesthesiology', link: '#' },
  { image: cardio1, title: 'Cardiology', link: '#' },
  { image: cardio1, title: 'Cardiology / Electrophysiology', link: '#' },
  { image: derm, title: 'Dermatology', link: '#' },
  { image: cardio, title: 'Diabetology', link: '#' },
  { image: cardio, title: 'Emergency Medicine', link: '#' },
  { image: endo, title: 'Endocrinology', link: '#' },
  { image: cardio, title: 'ENT', link: '#' },
  { image: gastro, title: 'Gastroenterology', link: '#' },
  { image: cardio, title: 'General Medicine', link: '#' },
  { image: cardio, title: 'General Surgery', link: '#' },
  { image: cardio, title: 'Geriatrics', link: '#' },
  { image: cardio, title: 'Hematology', link: '#' },
  { image: cardio, title: 'Homeopathy', link: '#' },
  { image: cardio, title: 'Hospitalist', link: '#' },
  { image: infec, title: 'Infectious Disease', link: '#' },
  { image: int, title: 'Internal Medicine', link: '#' },
  { image: cardio, title: 'Interventional Radiology', link: '#' },
  { image: cardio, title: 'Nephrology', link: '#' },
  { image: neu, title: 'Neurology', link: '#' },
  { image: cardio, title: 'Neurosurgery', link: '#' },
  { image: cardio, title: 'Nuclear Medicine', link: '#' },
  { image: cardio, title: 'Obstetrics & Gynecology', link: '#' },
  { image: onco, title: 'Oncology', link: '#' },
  { image: opt, title: 'Ophthalmology', link: '#' },
  { image: cardio, title: 'Oral Surgery', link: '#' },
  { image: orth, title: 'Orthopedics', link: '#' },
  { image: cardio, title: 'Orthopedic Surgery', link: '#' },
  { image: cardio, title: 'Pain Management', link: '#' },
  { image: cardio, title: 'Pediatric Cardiology', link: '#' },
  { image: cardio, title: 'Pediatrics', link: '#' },
  { image: cardio, title: 'Physical Medicine', link: '#' },
  { image: sur, title: 'Plastic Surgery', link: '#' },
  { image: cardio, title: 'Psychiatry', link: '#' },
  { image: cardio, title: 'Psychology', link: '#' },
  { image: cardio, title: 'Pulmonary Medicine', link: '#' },
  { image: cardio, title: 'Radiology', link: '#' },
  { image: cardio, title: 'Rheumatology', link: '#' }
];

const Triangle = () => {
  return (
    <div className="relative w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-blue-500"></div>
  );
};


const LeftSwipe = () =>{
   
  const swiper = useSwiper()
  return(
    <>

    <div className='absolute top-0 left-0 h-full flex items-center justify-center'>

      <button onClick={()=>{swiper.slidePrev()}} className='rounded-full z-10 shadow p-4 font-bold text-2xl'> &lt; </button>

    </div>

     
    </>
  )


}

const RightSwipe = () =>{
   
  const swiper = useSwiper()
  return(
    <>

    <div className='absolute top-0 right-0 h-full flex items-center justify-center'>

      <button onClick={()=>{swiper.slideNext()}} className=' text-2xl font-bold rounded-full z-10  shadow p-4'> &gt; </button>

    </div>

     
    </>
  )


}

type ArrowProps = {
    onClick?: MouseEventHandler<HTMLDivElement>; 
  };



const SpecialtyCarousel = () => {
   

  return (
    <div className="container mx-auto my-8 p-8 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-4">Our Specialties</h2>
      <div className="flex justify-center mb-4">
        <a href="#" className="text-blue-500">View All →</a>
      </div>

      <div className='relative overflow-hidden'>

      <Swiper
      spaceBetween={50}
      slidesPerView={4}
      pagination={{ clickable: true }}
      
     
    >
      <LeftSwipe/>
         {specialties.map((specialty, index) => (
          <SwiperSlide>
          <div key={index} className="flex items-center justify-center flex-col">
            <img className=" w-24 h-24 " src={specialty.image} alt={specialty.title}/>
            <h3 className="mt-4">{specialty.title}</h3>
            <a href={specialty.link} className="text-blue-500">View Doctors</a>
          </div>
          </SwiperSlide>
        ))}
        <RightSwipe/>


      </Swiper>
      </div>
     
       
    
    </div>
  );
};

export default SpecialtyCarousel;