import React, { useState } from "react"
import primary from "../assets/pricing/pricing_new.png"
import prescription from "../assets/pricing/prescription.png"
import ver from "../assets/pricing/verified-user.png"
import sin1 from "../assets/pricing/sin1.png"
import sin2 from "../assets/pricing/sin2.png"
import sin3 from "../assets/pricing/sin3.png"
import ExplorePanel from "./BlackMenu/Consult/ExplorePanel"

import bronzePricing from '../assets/WellnessPlans/bronze-pricing-india.png'
import bronzePackage from '../assets/WellnessPlans/bronzepackage-icon.png'
import silverPricing from '../assets/WellnessPlans/silver-pricing-india.png'
import silverPackage from '../assets/WellnessPlans/silverpackage-icon.png'
import goldPricing from '../assets/WellnessPlans/gold-pricing-india.png'
import goldPackage from '../assets/WellnessPlans/goldpackage-icon.png'

import patientImage from "../assets/pricing/heartattac.png"



const Pricing = () =>{

    const [onHover,setHover] = useState(0)

    const divStyle = {
        backgroundImage: `url(${primary})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };

    return(
        <>

<div className="w-full " style={divStyle}>
           
           <div className="p-20 flex flex-col gap-2 justify-center items-center sm:block ">
                 <div className="my-6 mx-14 backdrop-blur text-lg font-thin w-full  sm:w-[60vh]   flex flex-col justify-center gap-4 px-6 py-4">
     
                
                 <h1 className="font-bold text-4xl text-blue-900">Save your time!
                 Take online doctor consultation</h1>
                 <h3 className="text-2xl ">Secured Private Consultation + Video call • Starts at just $99.00</h3>
     
                 <button className="px-8 py-4 w-80 border text-white font-bold text-xl border-white rounded-full bg-blue-800"> Consult Now </button>
                 <div className="flex gap-10 items-center justify-center">
                    <div className="flex gap-4">
                        <img className="w-8 h-8" src={ver}></img>
                        <h3 className="">Verified Doctors</h3>

                    </div>
                    <div className="flex gap-4">
                        <img className="w-8 h-8" src={prescription}></img>
                        <h3 className="">Medical Treatment Plan.</h3>

                    </div>

                 </div>
                  </div>
     
                
                
     
            </div>
                
</div>

<div className="mt-10">

    <ExplorePanel
     
     country={"USA"}

    />

</div>

<div className="flex flex-col items-center justify-center">

<h1 className="text-5xl font-bold ">AVAILABLE <span className="text-blue-700">DIET PROGRAMS</span></h1>
<div className="w-full flex flex-col gap-4 items-center justify-center rounded p-10">


    <div className="  bg-[#f0bbff] flex flex-col gap-4 items-center justify-center rounded-lg  px-20 py-10">
    <h2 className="text-blue-700 text-3xl">Get 1 Diet Consultation for free
     </h2>
     <h2 className="text-xl">Fill this form to get a FREE diet assessment worth $99.00 from our Expert Nutrition Coaches.</h2>
     <button className="px-14 py-2 border border-blue-500 text-white text-xl bg-blue-500 rounded-lg"> Book Now </button>

    </div>

  

</div>

</div>


<div className="container mx-auto px-4 py-8">
      <div className="flex justify-center gap-20 space-x-4 mb-8">

        <div className="max-w-sm w-full bg-gradient-to-r from-blue-200 to-blue-100 shadow-lg rounded-lg p-6">
          <h3 className="text-3xl font-bold mb-4 text-blue-700">3 Weeks Program</h3>
          <ul className="text-xl  flex flex-col gap-10 mb-4">
            <li className="font-bold">Number of Consultations: 6 </li>
            <li>Personalised nutritional Plan ✅</li>
            <li>Access to Personal Dietitian ✅</li>
            <li>Access to Personal Coach ✅</li>
            <li>Weekly Monitoring & Feedbacks ✅</li>
          </ul>
          <p className="text-xl font-semibold mb-4">$199.00</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">Book Now</button>
        </div>

        <div className="max-w-sm w-full bg-gradient-to-r from-pink-200 to-pink-100 shadow-lg rounded-lg p-6">
          <h3 className="text-3xl font-bold mb-4 text-blue-700">3 Months Program</h3>
          <ul className="text-xl  flex flex-col gap-10 mb-4">
          <li className="font-bold">Number of Consultations: 20</li>
            <li>Personalised nutritional Plan ✅</li>
            <li>Access to Personal Dietitian ✅</li>
            <li>Access to Personal Coach ✅</li>
            <li>Weekly Monitoring & Feedbacks ✅</li>
          </ul>
          <p className="text-lg font-bold mb-4">$299.00</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">Book Now</button>
        </div>

      </div>
      
      <div className="text-center mb-8">
        <h2 className=" text-blue-700 text-3xl font-bold mb-4">Worried about your Medical Needs in USA?</h2>
        <p className="text-blue-700 text-xl  text-lg mb-4">Check Out Our Health Packages</p>
      </div>
      <div className="flex gap-24 items-center justify-center">

      <div className="flex justify-center mb-8">
        <img src={patientImage} alt="Patient" className="max-w-md rounded-lg shadow-lg" />
      </div>
      <div className="text-left">
        <h2 className="text-2xl text-blue-700 mb-4">Benefits of having a Health Package</h2>
        <p className="text-lg mb-4 ">
          Introducing package deals for you and your family members.
          Now get yourself consulted at lower cost.
        </p>
        <ul className="list-disc inline-block text-left">
          <li>Choose from our board certified doctors (USA and India).</li>
          <li>Consult doctors for informed health choices.</li>
          <li>Our Specialties (View Specialties)</li>
          <li>Video Consultation up to 30 mins.</li>
          <li>These packages can be used by yourself or your family members.</li>
          <li>Doctor response time same day or 1-3 days.</li>
        </ul>
      </div>

      </div>
     
    </div>


<div className='flex justify-around p-10 gap-6'>
          <div className='bg-[#BDEFD4] p-4 rounded-xl relative px-10 py-12'>
            <div className='absolute left-2 top-4'>
              <img src={bronzePackage} className='w-30 h-30' alt="bronzePackage" />
            </div>
            <div className='absolute right-3 top-[-10px]'>
              <img src={bronzePricing} className='w-28 h-30' alt="bronzePricing" />
            </div>
            <div className='mt-24'>
              <h3 className='text-3xl font-bold my-10'>Bronze</h3>
              <ul className='list-disc mx-5 text-xl'>
                <li>2 Consultations</li>
                <li>Consult docter for informed health choices</li>
                <li>Valid for 6 months (Extendable)</li>
              </ul>
              <div className='text-white bg-[#1850A0] py-2 px-7 rounded-xl text-center mt-4 w-fit mx-auto'>Buy Now</div>
            </div>
          </div>
          <div className='bg-[#F9DFFA] p-4 rounded-xl relative px-10 py-12'>
            <div className='absolute left-2 top-4'>
              <img src={silverPackage} className='w-30 h-30' alt="silverPackage" />
            </div>
            <div className='absolute right-3 top-[-10px]'>
              <img src={silverPricing} className='w-28 h-30' alt="silverPricing" />
            </div>
            <div className='mt-24'>
              <h3 className='text-3xl font-bold my-10'>Silver</h3>
              <ul className='list-disc mx-5 text-xl'>
                <li>4 Consultations</li>
                <li>Consult docter for informed health choices</li>
                <li>Valid for 6 months (Extendable)</li>
              </ul>
              <div className='text-white bg-[#1850A0] py-2 px-7 rounded-xl text-center mt-4 w-fit mx-auto'>Buy Now</div>
            </div>
          </div>
          <div className='bg-[#F9E490] p-4 rounded-xl relative px-10 py-12'>
            <div className='absolute left-2 top-4'>
              <img src={goldPackage} className='w-30 h-30' alt="goldPackage" />
            </div>
            <div className='absolute right-3 top-[-10px]'>
              <img src={goldPricing} className='w-28 h-30' alt="goldPricing" />
            </div>
            <div className='mt-24'>
              <h3 className='text-3xl font-bold my-10'>Gold</h3>
              <ul className='list-disc mx-5 text-xl'>
                <li>6 Consultations</li>
                <li>Consult docter for informed health choices</li>
                <li>Valid for 6 months (Extendable)</li>
              </ul>
              <div className='text-white bg-[#1850A0] py-2 px-7 rounded-xl text-center mt-4 w-fit mx-auto'>Buy Now</div>
            </div>
          </div>
        </div>



<div className="w-full flex flex-col items-center justify-center p-6">

    <button onClick={()=> {  if(onHover)setHover(0) 
        else
        setHover(1)
    }
    } className="border border-blue-700 hover:bg-blue-700 hover:text-white transition duration-300 text-xl p-4 text-blue-700 rounded" >Learn More Features </button>

    {
        onHover?
        <>

<div className=" p-10 sm:p-30 font-thin text-lg">

<div className=" px-8 py-2 rounded border border-black shadow">
<h2 className=" font-bold text-3xl text-blue-800 m-2">Features</h2>
<ul className="list-disc ">
<li>Access to doctors from USA, UK, India and other parts of the world.</li>
<ul>
    <li>(View Doctors)</li>
</ul>
<li>Our Specialties - Internal Medicine, Cardiology, Orthopedics, Oncology, Pediatrics, Psychiatry and many more.</li>
<ul>
    <li>(View Specialties)</li>
</ul>
<li>Consult doctors for informed health choices.</li>
<li>Response time 30 minutes for Internal Medicine/ General Medicine, 1-2 Days for specialist consultation.</li>
<li>Support response time 2-3 hours.</li>
<li>Family Members can participate live via Video Physician Consultation from any part of the world.</li>
<li>Video Consultation up to 30 minutes.</li>
<li>No restrictions on pre-existing medical conditions.</li>
<li>In-app messaging with doctor after consultation.</li>
<li>ID and Portable Health Passports.</li>
<li>These packages are applicable only for Primary Consultations and Expert Second Medical Opinion.</li>
<li>Package subscription can be extended; it cannot be canceled.</li>
<li>If the subscribed package is not used in 6 months from the date of purchase; subscription can be extended to one year.</li>
<li>The numbers are subject to change under the authority of eGlobalDoctors.</li>
</ul>

</div>

</div>
        </>
        :
        <>
        </>
    }

</div>



<div className="w-full bg-blue-700 p-10">

 

    <div className="flex flex-col gap-6 items-center justify-center">

    <h1 className="text-3xl text-white font-bold mb-10">Strength in Numbers</h1>

    <div className="flex gap-32 items-center justify-center">

        <div className="mr-10">
            <img src={sin1}></img>
        <h1 className="text-3xl text-white font-bold">400+
        Doctors</h1>

        </div>

        <div className="mr-10">
            <img src={sin2}></img>
        <h1 className="text-3xl text-white font-bold">40+
        Services</h1>

        </div>

        <div className="">
            <img src={sin3}></img>
        <h1 className="text-3xl text-white font-bold">8+
        Countries</h1>

        </div>


    </div>

        

    </div>

</div>






          
        </>
    )


}

export default Pricing