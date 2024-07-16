import React, { useState, ChangeEvent } from 'react';

type Props = {
    setCountry: (value: React.SetStateAction<String | null>) => void; // Define the type for the function prop
  };

const Selector = ({ setCountry }: Props) =>{

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCountry(e.target.value)
        localStorage.setItem("country",e.target.value);
    };

   
    return(
        <>

            <div className="w-full flex justify-end">
                 Country:
                <select id="country" onChange={handleChange} name="country">
                    <option value="Usa">USA</option>
                    <option value="India">India</option>
                </select>

            </div>

        </>
    )

}

export default Selector