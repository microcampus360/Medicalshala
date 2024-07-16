import React, { useState } from "react";
import cardio from "../../../assets/BlackMenu/globalServices/specialities/cardio.png"
import girl from "../../../assets/pricing/videos_main_banner.png"
import doc from "../../../assets/pricing/videos_doctor_guide.png"
import pat from "../../../assets/pricing/videos_patient_guide.png"
import { Link } from "react-router-dom";

interface Block{
    heading : String,
}

interface Second{
    heading : String,
    img : string,
    guide : String,
    link : string
}

const FirstBlock = ({ heading } : Block) => {
  const [isOpen, setIsOpen] = useState(false);

  const specialties = [
    { name: 'Geriatrics', link: '#', image: cardio },
    { name: 'General Medicine', link: '#', image: cardio },
    { name: 'Internal Medicine', link: '#', image: cardio },
    { name: 'Critical Care', link: '#', image: cardio },
    { name: 'Oncology', link: '#', image: cardio },
    { name: 'Pediatrics', link: '#', image: cardio },
    { name: 'Cardiology', link: '#', image: cardio },
    { name: 'Nephrology', link: '#', image: cardio },
    { name: 'Pulmonology', link: '#', image: cardio },
    { name: 'Gynaecology and Obstetrics', link: '#', image: cardio },
    { name: 'Endocrinology', link: '#', image: cardio },
    { name: 'Dermatology', link: '#', image: cardio },
    { name: 'Neurology', link: '#', image: cardio },
    { name: 'Nutrition and Health', link: '#', image: cardio },
    { name: 'Diabetes and high blood pressure', link: '#', image: cardio }
  ];
  const toggleBlock = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[100vh] text-left rounded border border-grey-500 bg-gray-200 text-sm">
      <div className="border  rounded-md">
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleBlock}>
          <span className=" w-full font-semibold p-6 hover:underline relative text-lg hover:text-blue-600"> 
            {heading} 
          </span>
        </div>
        {isOpen && (
          <div className="w-full flex flex-col bg-white items-center justify-center mt-4  p-6 text-lg">
            <h1 className="font-semibold text-3xl">Every Week we have one of Our specialist live on facebook to talk about the health care problems.</h1>

            <div className="p-10 grid grid-cols-2 gap-6">
                {
                    specialties.map(item=>(
                        <div className="flex items-center justify-center gap-4 w-full">
                            <img className="w-20 h-20" src={item.image}></img>
                            <div className="">
                                <h1 className="w-80">{item.name}</h1>
                                <button className="px-2 rounded text-blue-700 border border-blue-700">Watch Videos</button>
                             </div>   


                         </div>   
                    ))
                }
            </div>   
            
          </div>
        )}
      </div>
    </div>
  )
};


const SecondBlock = ({ heading,guide,img,link } : Second) => {
    const [isOpen, setIsOpen] = useState(false);
  
    
    const toggleBlock = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="w-[100vh] text-left rounded border border-grey-500 bg-gray-200 text-sm">
        <div className="border  rounded-md">
          <div className="flex items-center justify-between cursor-pointer" onClick={toggleBlock}>
            <span className=" w-full font-semibold p-6 hover:underline relative text-lg hover:text-blue-600"> 
              {heading} 
            </span>
          </div>
          {isOpen && (
            <div className="w-full flex  bg-white mt-4  p-6 text-lg">

            <img src={img}></img>
            <div className="ml-6">
                
              <h1 className="font-semibold text-blue-700 text-2xl">Website Guide For {guide}</h1>
              <h3 className="text-blue-700 text-lg">If you are facing any issues to complete a consultation please go through this video.</h3>
              <button  className="bg-blue-700 px-4 py-2 text-white mt-4 rounded"><a href={link} className="specialty-link" target="_blank" rel="noopener noreferrer">Open Playlist</a> </button>
              </div>
              
            </div>
          )}
        </div>
      </div>
    )
  };

const PatientVids = () =>{

    

  
    return(
        <>

        <div className="w-full bg-blue-500 overflow-x-hidden">

            <div className="p-10 flex gap-6">

                <div className="flex flex-col text-left justify-center">

                    <h1 className="font-bold text-4xl text-white">Patient Educational Videos </h1>
                    <h3 className="text-2xl text-white">Videos that help you provide better understanding about healthcare issues.</h3>

                </div>
                <img src={girl}></img>


            </div>

        </div>

        <div className="w-full mt-4 flex items-center justify-center">

            <FirstBlock
            
                heading={"Top Specialities Video"}
            />

        </div>
        <div className="w-full mt-4 flex items-center justify-center">

            <SecondBlock
            
                heading={"Website guide for Doctors"}
                guide={"Doctors"}
                img={doc}
                link={"https://www.youtube.com/playlist?list=PL2oSJMOkx9pjTTkXyGBv8dIJS_T3ACL_4"}
            />

        </div>
        <div className="w-full mt-4  flex items-center justify-center">

            <SecondBlock
            
                heading={"Website guide for Patients"}
                guide={"Patients"}
                img={pat}
                link={"https://www.youtube.com/playlist?list=PL2oSJMOkx9pjTTkXyGBv8dIJS_T3ACL_4"}
            />

        </div>

         
        </>
    )

}

export default PatientVids