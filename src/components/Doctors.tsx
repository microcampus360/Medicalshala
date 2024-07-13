import React from "react";
import doctors from "../utils/doctors.json"

import Nutritionist from "./BlackMenu/Consult/DietPrograms/Nutrisionist";



const Doctors = () =>{
    return(
        <>

            <div>

            <div className="mt-6 flex flex-col items-center justify-center gap-4">

<h2 className="text-4xl text-blue-700 font-bold">Our Doctors</h2>
<div className="px-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">


        {
            doctors.map((doc,index)=>(
<Nutritionist

img={doc.image_url}
name={doc.name}
pos={doc.designation}  
country={doc.country}   
/>
))
}







</div>

</div>

            </div>
         
        </>
    )
}

export default Doctors