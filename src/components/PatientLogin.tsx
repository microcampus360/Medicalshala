import React, { useState, ChangeEvent } from 'react';

import side from "../assets/Login/side.png"


import logo from "../assets/logo.png"


const PatientLogin = () =>{

    return(
        <>  
          
          <div className="flex min-h-screen bg-blue-50">
    <div className="flex flex-col items-center justify-center w-1/2 bg-[#1850A0] text-white">
      <div className="text-center">
        <div className="mx-auto ">
          <img  src={side} alt="Logo" className="w-full h-full" />
        </div>
       
      </div>
    </div>
   
    
    <div className="flex flex-col  w-1/2 p-8 bg-white">
    <div className="w-full flex items-center mb-10">
        <a className="text-2xl text-blue-800" href="/login">&lt;-Back</a>
        <div className="mx-auto">
        <img src={logo} className='h-24' alt="" />

        </div>

    </div>
      <h2 className="text-4xl  text-left mb-6 ">Login-Patient</h2>
      <h2 className='text-gray-600 mb-10 text-xl'>Just a step away from starting your consultation!</h2>
      {/* <div className='flex gap-6 w-full'>
            <hr className='h-1'></hr>
            Register
            <hr className='h-1'></hr>
        </div> */}
        <div className='flex mt-6 w-full items-center justify-center'>

            <button className='px-16 py-2 border border-blue-500  rounded-l-full focus:bg-blue-700 focus:text-white'>Phone</button>
            <button className='px-16 py-2 border border-blue-500 rounded-r-full focus:bg-blue-700 focus:text-white'>Email</button>

        </div>

        <div className='flex flex-col mt-8 w-full items-center justify-center'>
            <div>

        <label className="block text-sm font-medium text-gray-700 text-left">Mobile Number*</label>
             <div className='flex'>
             <select
        id="country"
        name="country"
        
        required
        className="w-40 block  px-3 py-2 border-2 border-gray-300 bg-white rounded-l-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        style={{ textAlign: 'left' }}
      >
        <option className="font-bold" disabled value="">
          Country Code*
        </option>
        <option value="ATG">ATG (+267)</option>
        <option value="ARG">ARG (+54)</option>
        <option value="AUS">AUS (+61)</option>
        <option value="BHS">BHS (+241)</option>
        <option value="BRB">BRB (+245)</option>
        <option value="BLZ">BLZ (+501)</option>
        <option value="BOL">BOL (+591)</option>
        <option value="BRA">BRA (+55)</option>
        <option value="CAN">CAN (+1)</option>
        <option value="CYM">CYM (+344)</option>
        <option value="CHL">CHL (+56)</option>
        <option value="COL">COL (+57)</option>
        <option value="CRI">CRI (+506)</option>
        <option value="CUB">CUB (+53)</option>
        <option value="DMA">DMA (+766)</option>
        <option value="DOM">DOM (+1)</option>
        <option value="ECU">ECU (+593)</option>
        <option value="EGY">EGY (+20)</option>
        <option value="SLV">SLV (+503)</option>
        <option value="FLK">FLK (+500)</option>
        <option value="GUF">GUF (+594)</option>
        <option value="GRD">GRD (+472)</option>
        <option value="GLP">GLP (+590)</option>
        <option value="GTM">GTM (+502)</option>
        <option value="GUY">GUY (+592)</option>
        <option value="HTI">HTI (+509)</option>
        <option value="HND">HND (+504)</option>
        <option value="IND">IND (+91)</option>
        <option value="JAM">JAM (+876)</option>
        <option value="JPN">JPN (+81)</option>
        <option value="MTQ">MTQ (+596)</option>
        <option value="MEX">MEX (+52)</option>
        <option value="NZL">NZL (+64)</option>
        <option value="NIC">NIC (+505)</option>
        <option value="PAN">PAN (+507)</option>
        <option value="PRY">PRY (+595)</option>
        <option value="PER">PER (+51)</option>
        <option value="PRI">PRI (+1)</option>
        <option value="BLM">BLM (+590)</option>
        <option value="KNA">KNA (+868)</option>
        <option value="LCA">LCA (+757)</option>
        <option value="VCT">VCT (+783)</option>
        <option value="SUR">SUR (+597)</option>
        <option value="TTO">TTO (+867)</option>
        <option value="TCA">TCA (+648)</option>
        <option value="ARE">ARE (+971)</option>
        <option value="GBR">GBR (+44)</option>
        <option value="USA">USA (+1)</option>
        <option value="URY">URY (+598)</option>
        <option value="VEN">VEN (+58)</option>
        <option value="VGB">VGB (+283)</option>
        <option value="VIR">VIR (+339)</option>
      </select>
      <input type="text" className="rounded-r-full w-full px-3 py-2 border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
             </div>
           
            <div className='w-full flex justify-end m-8 items-end '>

<button className='text-blue-500 underline'>Click here to Get Otp</button>

</div>
            </div>
            

            <button className='w-80 rounded-full text-white font-bold text-2xl m-4 px-10 py-2 bg-blue-800'>Login</button>
            <div className="flex items-center">
          <input type="checkbox" className="form-checkbox" required />
          <span className="ml-2 text-sm text-gray-700">Login with Password instead of OTP?</span>
        </div>

        
        </div>
        <div className='flex gap-10 m-10'>

            <h1 className=''>Not yet registered ? <span className='text-blue-600'>Create an account</span></h1>
            <h1 className=''><span className='text-blue-600'>Forgot password?</span></h1>


        </div>

        <div className='flex  justify-center items-center'>

            <h1 className=''>2024 Copyright © All rights reserved by eGlobalDoctors

</h1>
           


        </div>

           </div>
        </div>
        </>
    )
}

export default PatientLogin