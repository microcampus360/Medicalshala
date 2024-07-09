import React, { useState } from "react";


interface Field{
    img : string,
    name : String,
    pos : String,
    country : String
}

const Nutritionist = ({img,name,pos,country}: Field) =>{

    const [showButton,setShow] = useState<number>(0)


    return(
        <>

            <div className=" text-center shadow-lg flex bg-white flex-col items-center justify-center">

                <div onMouseEnter={()=>{
                        setShow(1)
                }}  onMouseLeave={()=>{
                    setShow(0)
            }} className="relative w-full h-full p-6">

                <img className="w-full h-full rounded" src={img}></img>

                 {
                    showButton?
                    <button className="text-white font-bold w-full absolute bottom-0 left-0 bg-blue-700 p-6  transition duration-300 ease-in-out">View Profile</button>
                    :
                    <></>
                 }
                
                

                </div>
              
                <h2 className="font-semibold text-xl">{name}</h2>
                <h2 className="text-lg font-thin">{pos}</h2>
                <h2 className="text-lg font-thin">{country}</h2>


            </div>


        
        </>
    )

}

export default Nutritionist