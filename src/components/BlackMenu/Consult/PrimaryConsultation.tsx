import React, { useState, ChangeEvent, useEffect } from 'react';
import Explore from "./ExploreDiv";
import Selector from '../../CountrySelector';
import ExplorePanel from './ExplorePanel';
import primary from "../../../assets/BlackMenu/Primary_Consultation.png"



const Primary = () =>{

    const divStyle = {
        backgroundImage: `url(${primary})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };

    const [explore,setExplore] = useState<Number>(0)
    const [country, setCountry] = useState<String | null>('');

    useEffect(()=>{
          
        const count = localStorage.getItem("country")
        setCountry(count)
         
    },[])

 return(
    <>

     <Selector
      setCountry={setCountry}
     />
     
      <div className="w-full " style={divStyle}>
           
      <div className="p-20 flex flex-col gap-2 justify-center items-center sm:block ">
            <div className="my-4 backdrop-blur text-lg font-thin w-full w-[60vh] sm:w-[60vh]  border border-2 flex flex-col justify-center gap-4 px-6 py-4">

           
            <h1 className="font-bold text-3xl text-blue-900">Primary Consultation</h1>
            <h3 className="">Book an appointment with board certified physician for a secure, online Video consultation.</h3>

            {
               country === "India" ?
               <div className="flex flex-col">
                <span className="text-blue-700 font-semibold">   <span className='text-red-600 relative'> <s>₹499.00</s></span> <span> ₹199.10 (60% off) </span> </span> 
                Consultation charges-
                Tuesday, Thursday and Saturday*.
  
  
             
              
               </div>
               :
               <></>
             
             }
            <div className="flex flex-col">
            General Medicine/Internal Medicine
            <span className="text-blue-700 font-semibold"> { country === 'India' ? <> <span className='text-red-600 relative'> <s>₹499.00</s></span> <span> ₹449.10 (10% off) </span> </>   : <span>$99.00</span> } </span>
            
             </div>
             

             <div className="flex flex-col">
             Specialist consultation starting at


            <span className="text-blue-700 font-semibold"> { country === 'India' ? <> <span className='text-red-600 relative'><s>₹499.00</s> </span> <span> ₹449.10 (10% off) </span> </>   : <span>$149.00</span> } </span>
            
             </div>
             {
               country === "India" ?
               <div className="flex flex-col">
               Specialist consultation from UK/US
  
  
              <span className="text-blue-700 ">  <span>₹7,500.00</span>  </span>
              
               </div>
               :
               <></>
             
             }
             <div className="flex items-center justify-center">

                <ul className="list-disc">
                    <li>Consult doctors for informed health choices.</li>
                </ul>

             </div>
             </div>

            <button className="px-8 py-4 border text-white font-bold text-xl border-white rounded-full bg-blue-800"> Consult Now </button>
           

           </div>
           
      </div>
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
      
      <div className="w-full flex flex-col gap-4 justify-center items-center">

          <button onClick={()=>{ if(explore == 0){setExplore(1)} else setExplore(0) }} className="border border-blue-500 rounded p-2 text-xl text-blue-600 font-semibold">Explore Now</button>

          {explore
           ?
           <div className=" flex flex-col justify-center items-center">
                
                <ExplorePanel
                  
                  country={country}
                  
                />
            
           </div>
           :
           <></>
          }

      </div>
      
    </>
 )
     

}

export default Primary