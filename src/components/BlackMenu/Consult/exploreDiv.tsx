import React, { useState } from "react";


interface Detail {
    name: string;
    cost: string;
  }

interface Props {
    header: string;
    costDetails : Detail[]

  }
  
  const Explore: React.FC<Props> =  ( {header,costDetails} ) =>{

    const [isHovered, setIsHovered] = useState<Boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };
 
     return(
        <>
          
          <div onMouseEnter={handleHover} onMouseLeave={handleUnhover} className="flex flex-col text-lg justify-center items-center  px-8 py-4 shadow-lg px-8 py-4 rounded-xl border border-grey-800 font-thin hover:bg-blue-500 hover:text-white ">

          <h1 className={` ${isHovered ? 'text-white' : 'text-blue-800 '} font-bold text-center text-2xl mb-6 `} >{header}</h1>

          <div className="text-left">

          
           <>
          {

              costDetails.map(item=>(

                <div className="flex flex-col">
                {item.name}
                <span  className={`${isHovered ? 'text-white' : 'text-blue-500'} font-semibold `}> {item.cost.split(',').length > 1  ? <> <span className=" text-red-600"><s>{item.cost.split(',')[0]}</s></span> <span>{item.cost.split(',')[1]}</span> </> :  item.cost }   </span>
                
                 </div>

              ))  
          }
          </>
         
           

          
           <div className="flex items-center justify-center">

              <ul className="list-disc">
                  <li>Consult doctors for informed health choices.</li>
              </ul>

           </div>

           </div>

           <button className="border bg-white  border-blue-600 text-blue-700 font-semibold rounded-full px-8 py-4 mt-4 hover:bg-blue-500 hover:text-white hover:border-white ">Consult Now</button>

          </div>
          
        </>
     )


}

export default Explore;