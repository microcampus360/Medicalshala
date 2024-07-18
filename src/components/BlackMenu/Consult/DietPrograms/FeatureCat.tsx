import React from "react";


interface Feature{
    img : string | undefined,
    head : String,
    body : String
}


const Feature = ({ img,head,body }:Feature) =>{


    return(
        <>

        <div className="flex flex-col gap-4">

            <img src={img}></img>
            <h1 className="font-bold text-xl">{head}</h1>
            <h3 className="text-lg">{body}</h3>
            <button className="px-10 py-2 border border-blue-500 text-blue-500 rounded-lg"> Book Now </button>

        </div>



        </>
    )


}


export default Feature