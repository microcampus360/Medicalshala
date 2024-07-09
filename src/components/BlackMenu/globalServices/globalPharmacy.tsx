import React from "react";
import vpharm from "../../../assets/LandingPageHeader/globalServices/homecare/vpharm.png"
import shager from "../../../assets/LandingPageHeader/globalServices/homecare/shager.png"
import medtube from "../../../assets/LandingPageHeader/globalServices/homecare/medplus.jpg"
import apollo from "../../../assets/LandingPageHeader/globalServices/homecare/apollo.svg"


const PharmacyCard: React.FC<{ name: string; description: string; logo: string; link: string }> = ({ name, description, logo, link }) => {
    return (
      <div className="bg-white shadow-lg flex items-center flex-col gap-4 rounded-lg p-6 w-full md:w-1/2 m-4">
        <img src={logo} alt={name} className="w-full w-48 h-48 object-contain mb-4" />
        <h4 className="text-2xl font-semibold text-center">{name}</h4>
        <p className="mt-2 text-gray-700 text-center">{description}</p>
        <div className="text-end mt-4">
          <a href={link} className="text-blue-500">Visit &gt;</a>
        </div>
      </div>
    );
  };

const GlobalPharmacy = ()=>{

    
    return (
        <>

        <div className="w-full bg-gray-300">

        <div className="bg-white w-full">
      <h2 className="text-5xl text-blue-700 font-bold mb-4 text-center">eGlobal Pharmacy</h2>
      <h3 className="text-4xl text-gray-700 font-semibold mb-4 text-center ">eGlobal Pharmacy for USA</h3>

      </div>

<div className="container w-full mx-auto my-8 px-4">
     
      
      
      <div className="flex flex-col md:flex-row justify-center">
        <PharmacyCard
          name="eGlobal-VPharmacy"
          description="Exclusive 15% off on your eGlobalDoctors prescribed medications. Available for both doorstep delivery and also pick up at the pharmacy."
          logo={vpharm}
          link="#"
        />
        <PharmacyCard
          name="eGlobal-Sheger Pharmacy"
          description="Exclusive 15% off on your eGlobalDoctors prescribed medications. Available for both doorstep delivery and also pick up at the pharmacy."
          logo={shager}
          link="#"
        />
      </div>
      <h3 className="">Note: Upon completion of your consultation, you will receive a flat 15% OFF code to order medicines.</h3>
    </div>
    <div className="p-6 bg-white w-full">
    <h3 className="text-4xl text-gray-700 font-semibold mb-4 text-center p-6 bg-white">eGlobal Pharmacy for India</h3>
    </div>

    <div className="container mx-auto my-8 px-4">

   
      <div className="flex flex-col md:flex-row justify-center">
        <PharmacyCard
          name="eGlobal-Apollo Pharmacy"
          description="Exclusive 15% off on your eGlobalDoctors prescribed medications. Available for both doorstep delivery and also pick up at the pharmacy."
          logo={apollo}
          link="#"
        />
        <PharmacyCard
          name="eGlobal-Medplus"
          description="Exclusive 15% off on your eGlobalDoctors prescribed medications. Available for both doorstep delivery and also pick up at the pharmacy."
          logo={medtube}
          link="#"
        />
      </div>
      <h3 className="">Note: Upon completion of your consultation, you will receive a flat 15% OFF code to order medicines.</h3>
    </div>
             
    </div>

         
        </>
    )

}

export default GlobalPharmacy