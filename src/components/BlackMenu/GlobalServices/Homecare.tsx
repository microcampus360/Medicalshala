import React from "react";

import homecare from "../../../assets/BlackMenu/globalServices/homecare/homecare_image.jpg"



const Homecare = () =>{
    return(
        <>

            <div className="  flex  items-center justify-center flex-col font-poppins">
                <h1 className="text-blue-700 text-4xl font-bold">eGlobal Homecare</h1>
                <div className="flex-col flex lg:flex-row items-center p-6">
                    <div>
                    <h1 className="text-black-700 text-2xl md:text-4xl font-bold mb-6">Launching Soon..</h1>
                    <h3 className="text-gray-700  text-xl md:text-2xl">eGlobalDoctors home care enables you to take care of your elder family members, or medically challenged members at the comfort of your home.</h3>

                    </div>

                    <img src={homecare}></img>

                   

                </div>

            </div>
        
        </>
    )
}

export default Homecare;