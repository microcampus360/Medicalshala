import React from 'react';
import Dropdown from '../utils/Dropdown';
import USA from '../assets/IndexPage/flags/USA.png';
import India from '../assets/IndexPage/flags/India.png';
import NewZealand from '../assets/IndexPage/flags/NewZealand.png';
import Nigeria from '../assets/IndexPage/flags/Nigeria.png';
import UAE from '../assets/IndexPage/flags/UAE.png';
import UK from '../assets/IndexPage/flags/UK.png';
import Canada from '../assets/IndexPage/flags/Canada.png';
import { Link } from 'react-router-dom';
import SpecialtyCarousel from './BlackMenu/GlobalServices/Services';
import Nutritionist from './BlackMenu/Consult/DietPrograms/Nutrisionist';
import doctors from "../utils/doctors.json"

const IndexPage = () => {

  const consultDoctorItems = [
    { label: 'Primary Consultation', link: '/primary-consultation-telehealth-consultation' },
    { label: 'Expert Second Medical Option', link: '/expert-second-medical-opinion' },
    { label: 'Multi-Speciality Consultation', link: '/multispecialty-telehealth-consultation' },
    { label: 'Diet Consultation', link: '/diet-programs' }
  ];

  const medicalshalaServicesItems = [
    { label: 'Our Specialities', link: '#' },
    { label: 'Docters', link: '#' },
    { label: 'Medicalshala Pharmacy', link: '/eglobal-pharmacy' },
    { label: 'Medicalshala Diagnostics', link: '/eglobal-diagnostics' },
    { label: 'Medicalshala Homecare', link: '/eglobal-homecare' },
  ];

  const otherServicesItems = [
    { label: 'Free Medical Counsiling', link: '/fmc' },
    { label: 'Equipment Support', link: '/equipmentsupport' },
    { label: 'Covid 19', link: '/covid-19' },
  ];

  const flags = [
    {name : 'UAE', source : UAE},
    {name : 'India', source : India},
    {name : 'Canada', source : Canada},
    {name : 'USA', source : USA},
    {name : 'NewZealand', source : NewZealand},
    {name : 'Nigeria', source : Nigeria},
    {name : 'UK', source : UK},
  ];


  


  return (
    <div className='h-full'>
      <div className='relative h-[80vh]'>
        <ul className='bg-black text-white flex justify-around font-semibold p-2 text-lg cursor-pointer'>
          <li><Dropdown title="Consult Doctor" items={consultDoctorItems} /></li>
          <Link to='/diet-programs'>Diet Programs</Link>
          <Link to='/ayurvedic-care'>Ayurvedic Care</Link>
          <Link to='/wellness-plans'>Wellness Plans</Link>
          <Link to='/cancer-care'>Cancer Care</Link>
          <li><Dropdown title="Medicalshala Services" items={medicalshalaServicesItems} /></li>
          <li><Dropdown title="Other Services" items={otherServicesItems} /></li>
        </ul>

        <div className='relative h-full flex items-center text-center justify-center text-xl'>
          <div className='absolute inset-0 bg-background-image bg-cover bg-center z-0'></div>
          <div className='bg-white bg-opacity-50 p-8 rounded-lg mx-4 h-fit py-8 px-24 mr-[40vw] z-10'>
            <h2 className='text-4xl font-bold'>One Stop Solution</h2>
            <h2 className='text-4xl font-bold mt-5'>For Your Health Problems</h2>
            <p className='mt-4'>Reach Out to our 400+ Board certified Doctors.</p>
            <ul className='list-disc mt-4 gap-10 flex justify-center font-bold'>
              <li>Consultation within 30 minutes*</li>
              <li>No Insurance Needed</li>
            </ul>
            <p className='mt-4'>Consultation Starting at <span className='font-bold'>₹199 (60% OFF)</span></p>
            <div className='flex space-x-4 justify-center mt-10'>
              <div className='bg-[#1850A0] text-white px-8 py-3 rounded-full font-bold hover:transition-all hover:bg-white hover:text-[#1850A0] hover:duration-500 hover:ease-in-out cursor-pointer'>
                Consult Now
              </div>
              <div className='bg-[#1850A0] text-white px-8 py-3 rounded-full font-bold hover:transition-all hover:bg-white hover:text-[#1850A0] hover:duration-500 hover:ease-in-out cursor-pointer'>
                Our Pricing
              </div>
            </div>
            <div className='flex space-x-4 justify-center mt-10'>
              {
                flags.map((flag, index) => (
                  <img key={index} src={flag.source} alt={flag.name} className='w-8 h-8' />
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div>

        <SpecialtyCarousel/>

    <div className="container mx-auto my-2 w-full ">
      <h2 className="text-3xl font-bold text-center mb-4">Featured Doctors</h2>
      <div className="flex justify-center mb-4">
        <a href="#" className="text-blue-500">View All →</a>
      </div>

      <div className='bg-gray-300 w-full '>

      <div className="px-16 py-4 grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-4">
                        

      {
            doctors.map((doc,index)=>{

              if(index>100)return (<></>)

 return (             
<Nutritionist

img={doc.image_url}
name={doc.name}
pos={doc.designation}  
country={doc.country}   
/>
 )
})
}
                        
                        
                        
                        
                        
                        
    </div>



      </div>


    </div>

      </div>
    </div>
  );
}

export default IndexPage;
