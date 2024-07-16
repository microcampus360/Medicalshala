import React from "react";
import care from "../assets/Login/Health_provider_health_care_provider.png"
import patient from "../assets/Login/Health_provider_patient.png"
import doc from "../assets/Login/Health_care_provider_doctor.png"

interface Card{
    title : string,
    description  :String,
    imgSrc  :string
}

function Card({ title, description, imgSrc } : Card) {
    return (
      <div className="relative bg-white py-16 px-4 w-80 rounded-lg shadow-xl text-left">
        <img src={imgSrc} alt={title} className="w-24 h-24   mb-4 bg-red-500 rounded-lg" />
        <h2 className="text-xl mt-4 text-blue-700 font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="absolute bottom-0 mb-4 mt-10 flex justify-center items-center space-x-4">
          <button className="bg-blue-700 w-full px-8 text-white px-4 py-2 rounded-full">Login</button>
          <button className="border border-blue-500 px-8 w-full  text-blue-500 px-4 py-2 rounded-full">Register</button>
        </div>
      </div>
    );
  }

const LognRegister = () =>{

    return(
        <div className="min-h-screen flex flex-col  bg-gray-100">
             <h1 className="text-left mt-10 text-5xl mb-8 ml-10">Login/Register</h1>
        <div className="p-20  w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
           
          <Card
            title="For Patients"
            description="Take your healthcare to the next level. Take it into your hands. You choose the care you need from a select group of physicians from the convenience of your home."
            imgSrc={patient}
          />
          <Card
            title="For Doctors"
            description="Elevate your healthcare delivery - provide care to patients efficiently. Improve your patient base and access."
            imgSrc={doc}
          />
          <Card
            title="Other Healthcare Providers"
            description="Expand your reach. Provide your services to patients without barriers. [Nutritionist, Nurse Practitioner, Physiotherapist]"
            imgSrc={patient}
          />
        </div>
      </div>
    )
}

export default LognRegister