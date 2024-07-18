import React from "react";
import Explore from "./ExploreDiv";


interface Country{
    country : String | null
}



const ExplorePanel = ({ country } : Country) =>{
 
    return(
        <>

<h1 className="font-bold text-3xl text-center text-blue-800 mb-4">Choose your Consultation Type</h1>
                <div className="md:grid grid-cols-3 gap-4 p-10 justify-center items-center">

                    <Explore

                        header={"Primary Consultation"}
                        costDetails={
                            [
                                
                               {
                                name: country ? "Consultation charges-Tuesday, Thursday and Saturday.": "",
                                    cost:  country === 'India' ? "₹499,₹199(60% OFF)*" :  ""
                               
                               },  
                                {
                                    name: "General Medicine/Internal Medicine",
                                    cost:  country === 'India' ? "₹499.00,₹449.10(10% off)" :  "$99.00" 
                                },
                                {
                                    name:" Specialist consultation starting at",
                                    cost:country === 'India' ? "₹499.00,₹449.10(10% off)" : "$149.00"
                                }
                            ]
                        }
                       

                    />

                <Explore

                    header={"Expert Second Medical Opinion"}
                costDetails={
                     [
      
                         {
                              name:" Specialist consultation starting at",
                                  cost:country === 'India' ? "₹999.00" : "$149.00"
                            },
                            {
                                name: country ? "Specialist consultation from UK/US": "",
                                    cost:  country === 'India' ? "₹7500.00" :  ""
                               
                               }  
                         ]
                    }
                    

                />

<Explore

header={"Multi-Specialty Consultation"}
costDetails={
    [
        {
            name: "Specialist consultation starting at",
            cost:country === 'India' ? "₹1000.00 each" : "$150.00 each"
        },
        {
            name: country ? "Specialist consultation from UK/US": "",
                cost:  country === 'India' ? "₹5000.00 each" :  ""
           
        }, 
        {
            name:" At least 2 specialties should be selected",
            cost:""
        }
    ]
}

/>

<Explore

header={"Follow-up Consultation"}
costDetails={
    [
        {
            name: "General Medicine/Internal Medicine",
            cost:  country === 'India' ? "₹499.00,₹449.10(10% off)" :  "$70.00" 
        },
        {
            name:" Specialist consultation starting at",
            cost:country === 'India' ? "₹499.00,₹449.10(10% off)" : "$100.00"
        },
        {
            name: country ? "Specialist consultation from UK/US": "",
                cost:  country === 'India' ? "₹3000.00" :  ""
           
        }, 
    ]
}

/>

<Explore

header={"Health Passport"}
costDetails={
    [
        {
            name: "Cost to store your medical records and prescription safely and securely is",
           cost:  country === 'India' ? "₹500.00/year" :  "$25.00/year"
        },
        {
            name:" Can access your health records from anywhere with our Health Passport",
            cost:""
        }
    ]
}

/>








                </div>

        </>
    )


}

export default ExplorePanel