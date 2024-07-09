import React from 'react';
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import 'swiper/css';
import { MouseEventHandler } from 'react';

import cardio from "../../../assets/LandingPageHeader/globalServices/specialities/cardio.png"

const specialties = [
  { image: cardio, title: 'Anesthesiology', link: '#' },
  { image: cardio, title: 'Cardiology', link: '#' },
  { image: cardio, title: 'Cardiology / Electrophysiology', link: '#' },
  { image: cardio, title: 'Dermatology', link: '#' },
  { image: cardio, title: 'Diabetology', link: '#' },
  { image: cardio, title: 'Emergency Medicine', link: '#' },
  { image: cardio, title: 'Endocrinology', link: '#' },
  { image: cardio, title: 'ENT', link: '#' },
  { image: cardio, title: 'Gastroenterology', link: '#' },
  { image: cardio, title: 'General Medicine', link: '#' },
  { image: cardio, title: 'General Surgery', link: '#' },
  { image: cardio, title: 'Geriatrics', link: '#' },
  { image: cardio, title: 'Hematology', link: '#' },
  { image: cardio, title: 'Homeopathy', link: '#' },
  { image: cardio, title: 'Hospitalist', link: '#' },
  { image: cardio, title: 'Infectious Disease', link: '#' },
  { image: cardio, title: 'Internal Medicine', link: '#' },
  { image: cardio, title: 'Interventional Radiology', link: '#' },
  { image: cardio, title: 'Nephrology', link: '#' },
  { image: cardio, title: 'Neurology', link: '#' },
  { image: cardio, title: 'Neurosurgery', link: '#' },
  { image: cardio, title: 'Nuclear Medicine', link: '#' },
  { image: cardio, title: 'Obstetrics & Gynecology', link: '#' },
  { image: cardio, title: 'Oncology', link: '#' },
  { image: cardio, title: 'Ophthalmology', link: '#' },
  { image: cardio, title: 'Oral Surgery', link: '#' },
  { image: cardio, title: 'Orthopedics', link: '#' },
  { image: cardio, title: 'Orthopedic Surgery', link: '#' },
  { image: cardio, title: 'Pain Management', link: '#' },
  { image: cardio, title: 'Pediatric Cardiology', link: '#' },
  { image: cardio, title: 'Pediatrics', link: '#' },
  { image: cardio, title: 'Physical Medicine', link: '#' },
  { image: cardio, title: 'Plastic Surgery', link: '#' },
  { image: cardio, title: 'Psychiatry', link: '#' },
  { image: cardio, title: 'Psychology', link: '#' },
  { image: cardio, title: 'Pulmonary Medicine', link: '#' },
  { image: cardio, title: 'Radiology', link: '#' },
  { image: cardio, title: 'Rheumatology', link: '#' }
];

const LeftSwipe = () =>{
   
  const swiper = useSwiper()
  return(
    <>

    <div className='absolute top-0 left-0 h-full flex items-center justify-center'>

      <button onClick={()=>{swiper.slidePrev()}} className='rounded-full z-10 shadow p-4'> Prev </button>

    </div>

     
    </>
  )


}

const RightSwipe = () =>{
   
  const swiper = useSwiper()
  return(
    <>

    <div className='absolute top-0 right-0 h-full flex items-center justify-center'>

      <button onClick={()=>{swiper.slideNext()}} className='rounded-full z-10  shadow p-4'> Next </button>

    </div>

     
    </>
  )


}

type ArrowProps = {
    onClick?: MouseEventHandler<HTMLDivElement>; 
  };



const SpecialtyCarousel = () => {
   

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-4">Our Specialties</h2>
      <div className="flex justify-center mb-4">
        <a href="#" className="text-blue-500">View All →</a>
      </div>

      <div className='relative'>

      <Swiper
      spaceBetween={50}
      slidesPerView={4}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      onSlideChange={() => console.log('slide change')}
     
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