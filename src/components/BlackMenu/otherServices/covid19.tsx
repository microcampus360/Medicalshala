import React from 'react';
import aapi from "../../../assets/LandingPageHeader/OtherServices/aapi.png"
import ind from "../../../assets/LandingPageHeader/OtherServices/ind.png"
import sewa from "../../../assets/LandingPageHeader/OtherServices/sewa.jpg"
import usa from "../../../assets/LandingPageHeader/OtherServices/usa.png"

const Covid19 = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-10">
      <div className=" w-full relative  mx-auto bg-white border border-black p-6">
        <div className=" mb-6 text-center flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold text-blue-600">Free COVID-19 Consultation</h1>
          <p className="mt-2 text-sm w-[70vh] text-center font-thin text-gray-700">
            eGlobalDoctors working in association with AAPI physicians and SEWA international volunteers to make this service possible.
          </p>
          <p className="mt-2 text-sm w-[70vh] text-center font-thin text-gray-700">
            This service is not for emergencies. Advice will be given by our volunteer physicians with limited history and without examination. Please consult your physician for full medical consultation.
          </p>
        </div>
        <div className="flex justify-center items-center w-full gap-48 mb-6">
          <img src={sewa} alt="SEWA" className="h-12" />
          <img src={usa} alt="USA" className="h-12" />
          <img src={ind} alt="India" className="h-12" />
          <img src={aapi} alt="AAPI" className="h-12" />
        </div>

        <div className="text-center m-6 absolute top-0 right-0 ">
          <div className="bg-white-100 text-blue-700 py-6 px-4 rounded-lg inline-block shadow-lg">
            Patients seen so far <span className="text-3xl font-bold">2500+</span>
          </div>
        </div>

        <div className='flex gap-24'>

        <div className="text-start  text-xs m-6">
          <h2 className="text-xl text-center font-semibold">How does it work?</h2>
          <p className="mt-2 text-gray-700">
            <strong>Step 1:</strong> Fill up the COVID-19 registration form (<a href="#" className="text-white p-2 font-bold bg-blue-600 rounded-full">Click here</a>).
          </p>
          <p className="mt-2 text-gray-700 w-[80vh]">
            If you have problems in filling the form, please send your name, age, and phone to <a href="mailto:coviddoctorhelp@gmail.com" className="text-blue-600">coviddoctorhelp@gmail.com</a>. One of the volunteers would call and assist you to fill the form and help with telemedicine consultation.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Step 2:</strong> Click on the Zoom link to Join Meeting.
          </p>
          <p className="mt-2 text-gray-700 w-[80vh]">
            <strong>Note:</strong> Doctor will be assigned directly if you complete Step 1. If you don’t complete Step 1, then our volunteer will help you to fill out the form once you join Zoom Meeting.
          </p>
        </div>

        <div className='flex flex-col gap-4 items-end justify-center mt-24'>

        <div className="">
        <p className="text-red-600 text-center">Click below for free consultation</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Join Meeting</button>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <div className="border border-gray-300 p-4">
            <h2 className="text-blue-600 font-semibold">Weekdays</h2>
            <p className="text-red-600">7:30AM - 9:00AM IST</p>
            <p className="text-red-600">7:30PM - 9:00PM IST</p>
          </div>
          <div className="border border-gray-300 p-4">
            <h2 className="text-blue-600 font-semibold">Weekends</h2>
            <p className="text-red-600">7:30AM - 9:00AM IST</p>
            <p className="text-red-600">7:30PM - 9:00PM IST</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Leave Feedback</button>
        </div>

        </div>



        </div>

    

        
       
      </div>
    </div>
  );
};

export default Covid19;