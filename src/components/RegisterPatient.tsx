import React, { useState, ChangeEvent } from 'react';

import side from "../assets/Login/side.png"


import logo from "../assets/logo.png"

const RegistrationFormPatient = () => {
    const [cont,setContinue]  = useState(0)
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        let { value } = event.target;
    
        // Remove all non-numeric characters
        value = value.replace(/\D/g, '');
    
        // Format the value as (XXX) XXX-XXXX
        if (value.length > 3 && value.length <= 6) {
          value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else if (value.length > 6) {
          value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    
        setPhoneNumber(value);
      };
  return (
    <div className="flex min-h-screen bg-blue-50">
    <div className="flex flex-col  w-1/2 bg-[#1850A0] text-white">
      <div className="text-center">
        <div className="mx-auto ">
          <img  src={side} alt="Logo" className="w-full h-full" />
        </div>
       
      </div>
    </div>
    {
        !cont?
    
    <div className="flex flex-col justify-center w-1/2 p-8 bg-white">
    <div className="w-full flex items-center mb-10">
        <a className="text-2xl text-blue-800" href="/login">&lt;-Back</a>
        <div className="mx-auto">
        <img src={logo} className='h-24' alt="" />

        </div>

    </div>
      <h2 className="text-4xl  text-left mb-6 ">Register</h2>
      <h2 className='text-gray-600 mb-10 text-xl'>Just a step away from starting your consultation!</h2>
      {/* <div className='flex gap-6 w-full'>
            <hr className='h-1'></hr>
            Register
            <hr className='h-1'></hr>
        </div> */}

      <form className="space-y-4 p-8">
        <div className="flex space-x-4">
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">First Name*</label>
            <input type="text" className="rounded-full w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">Middle Name</label>
            <input type="text" className="rounded-full w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          
        </div>
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">Last Name*</label>
            <input type="text" className="rounded-full w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Create Password*</label>
          <input type="password" className="rounded-full w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Country*</label>
            <select
      className="custom-select mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="country"
      required
    >
      <option disabled selected value="">
        Choose your country*
      </option>
      <option value='{"id":10,"is_national_license":true,"phone_code":"+267"}'>
        Antigua And Barbuda
      </option>
      <option value='{"id":11,"is_national_license":true,"phone_code":"+54"}'>
        Argentina
      </option>
      <option value='{"id":14,"is_national_license":true,"phone_code":"+61"}'>
        Australia
      </option>
      <option value='{"id":17,"is_national_license":true,"phone_code":"+241"}'>
        Bahamas The
      </option>
      <option value='{"id":20,"is_national_license":true,"phone_code":"+245"}'>
        Barbados
      </option>
      <option value='{"id":23,"is_national_license":true,"phone_code":"+501"}'>
        Belize
      </option>
      <option value='{"id":27,"is_national_license":true,"phone_code":"+591"}'>
        Bolivia
      </option>
      <option value='{"id":31,"is_national_license":true,"phone_code":"+55"}'>
        Brazil
      </option>
      <option value='{"id":39,"is_national_license":true,"phone_code":"+1"}'>
        Canada
      </option>
      <option value='{"id":41,"is_national_license":true,"phone_code":"+344"}'>
        Cayman Islands
      </option>
      <option value='{"id":44,"is_national_license":true,"phone_code":"+56"}'>
        Chile
      </option>
      <option value='{"id":48,"is_national_license":true,"phone_code":"+57"}'>
        Colombia
      </option>
      <option value='{"id":53,"is_national_license":true,"phone_code":"+506"}'>
        Costa Rica
      </option>
      <option value='{"id":56,"is_national_license":true,"phone_code":"+53"}'>
        Cuba
      </option>
      <option value='{"id":61,"is_national_license":true,"phone_code":"+766"}'>
        Dominica
      </option>
      <option value='{"id":62,"is_national_license":true,"phone_code":"+1"}'>
        Dominican Republic
      </option>
      <option value='{"id":64,"is_national_license":true,"phone_code":"+593"}'>
        Ecuador
      </option>
      <option value='{"id":65,"is_national_license":true,"phone_code":"+20"}'>
        Egypt
      </option>
      <option value='{"id":66,"is_national_license":true,"phone_code":"+503"}'>
        El Salvador
      </option>
      <option value='{"id":71,"is_national_license":true,"phone_code":"+500"}'>
        Falkland Islands
      </option>
      <option value='{"id":76,"is_national_license":true,"phone_code":"+594"}'>
        French Guiana
      </option>
      <option value='{"id":87,"is_national_license":true,"phone_code":"+472"}'>
        Grenada
      </option>
      <option value='{"id":88,"is_national_license":true,"phone_code":"+590"}'>
        Guadeloupe
      </option>
      <option value='{"id":90,"is_national_license":true,"phone_code":"+502"}'>
        Guatemala
      </option>
      <option value='{"id":94,"is_national_license":true,"phone_code":"+592"}'>
        Guyana
      </option>
      <option value='{"id":95,"is_national_license":true,"phone_code":"+509"}'>
        Haiti
      </option>
      <option value='{"id":97,"is_national_license":true,"phone_code":"+504"}'>
        Honduras
      </option>
      <option value='{"id":101,"is_national_license":true,"phone_code":"+91"}'>
        India
      </option>
      <option value='{"id":108,"is_national_license":true,"phone_code":"+876"}'>
        Jamaica
      </option>
      <option value='{"id":109,"is_national_license":true,"phone_code":"+81"}'>
        Japan
      </option>
      <option value='{"id":138,"is_national_license":true,"phone_code":"+596"}'>
        Martinique
      </option>
      <option value='{"id":142,"is_national_license":true,"phone_code":"+52"}'>
        Mexico
      </option>
      <option value='{"id":158,"is_national_license":true,"phone_code":"+64"}'>
        New Zealand
      </option>
      <option value='{"id":159,"is_national_license":true,"phone_code":"+505"}'>
        Nicaragua
      </option>
      <option value='{"id":170,"is_national_license":true,"phone_code":"+507"}'>
        Panama
      </option>
      <option value='{"id":172,"is_national_license":true,"phone_code":"+595"}'>
        Paraguay
      </option>
      <option value='{"id":173,"is_national_license":true,"phone_code":"+51"}'>
        Peru
      </option>
      <option value='{"id":178,"is_national_license":true,"phone_code":"+1"}'>
        Puerto Rico
      </option>
      <option value='{"id":189,"is_national_license":true,"phone_code":"+590"}'>
        Saint-Barthelemy
      </option>
      <option value='{"id":185,"is_national_license":true,"phone_code":"+868"}'>
        Saint Kitts And Nevis
      </option>
      <option value='{"id":186,"is_national_license":true,"phone_code":"+757"}'>
        Saint Lucia
      </option>
      <option value='{"id":188,"is_national_license":true,"phone_code":"+783"}'>
        Saint Vincent And The Grenadines
      </option>
      <option value='{"id":210,"is_national_license":true,"phone_code":"+597"}'>
        Suriname
      </option>
      <option value='{"id":223,"is_national_license":true,"phone_code":"+867"}'>
        Trinidad And Tobago
      </option>
      <option value='{"id":227,"is_national_license":true,"phone_code":"+648"}'>
        Turks And Caicos Islands
      </option>
      <option value='{"id":231,"is_national_license":true,"phone_code":"+971"}'>
        United Arab Emirates
      </option>
      <option value='{"id":232,"is_national_license":true,"phone_code":"+44"}'>
        United Kingdom
      </option>
      <option value='{"id":233,"is_national_license":false,"phone_code":"+1"}'>
        United States
      </option>
      <option value='{"id":235,"is_national_license":true,"phone_code":"+598"}'>
        Uruguay
      </option>
      <option value='{"id":239,"is_national_license":true,"phone_code":"+58"}'>
        Venezuela
      </option>
      <option value='{"id":241,"is_national_license":true,"phone_code":"+283"}'>
        Virgin Islands (British)
      </option>
      <option value='{"id":242,"is_national_license":true,"phone_code":"+339"}'>
        Virgin Islands (US)
      </option>
    </select>
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Primary Mobile Number*</label>
            <input onChange={handleChange} type="tel" className="rounded-full w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">How did you come to know about us?*</label>
          <select className="rounded-full w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
            <option>Choose your source</option>
            {/* Add source options here */}
          </select>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="form-checkbox" required />
          <span className="ml-2 text-sm text-gray-700">I agree to receive text messages from eGlobalDoctors.</span>
        </div>
        <button onClick={()=>{
            setContinue(1)
        }} type="submit" className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Continue</button>
      </form>
    </div>

    :
    <> 
      
      <div className="">

        <div className="flex flex-col gap-6 p-10">
        <h1 className='text-3xl'>Verify Mobile</h1>
        <h1 className='text-2xl text-gray-600  font-thin'>We have sent an OTP on</h1>

            <h1 className='text-4xl'>{phoneNumber}</h1>
           <h1 className='text-xl'>Enter OTP*</h1>
           <input onChange={handleChange} type="tel" className="rounded-full w-80 px-3 py-2 border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />

             <h1 className=' font-thin'>OTP not received yet? Resend OTP</h1>
             <h1 className=''>You can resend otp in 00:58</h1>
             <h1 className=' font-thin'>Already have an account ? Sign in</h1>
             <div className='w-[80vh] mt-6 flex items-center justify-center text-center'>

                <h1 className='text-center w-full font-thin'>2024 Copyright © All rights reserved by eGlobalDoctors</h1>

             </div>
        </div>

      </div>
      
    </>
}
  </div>
  );
}

export default RegistrationFormPatient;