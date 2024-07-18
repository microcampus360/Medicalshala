import React from "react";


const Support = () =>{


    return(
        <>

        <div className="w-full p-12 flex items-center justify-center gap-24">

            <div className="text-center w-full">

            <h1 className="text-gray-800 text-4xl font-bold mb-2">Free technical <span className="text-blue-600">troubleshooting</span> for Powered Medical Equipment Consultation</h1>
<p>eGlobalDoctors is working in association with Advamed, Intuitive Foundation and SEWA International volunteers to make this technical troubleshooting service available to lower tier medical institutions in the developing world. This service is intended to help users of non-functional, non-emergency equipment that is not currently in use with patients.</p>
<br></br>
<p>This service is not for emergencies. Advice will be given by our volunteer technical consultants on a good faith, best effort basis (See Disclaimer). They will work with you to try and troubleshoot the issue that you are having with your device.</p>

<a href="#" className="text-blue-500 underline mt-4">See Disclaimer</a>


            </div>

            <div className="flex gap-24 w-full">

                <img src="https://www.eglobaldoctors.com/assets/images/equipmentSupport/banner1.png"></img>
                <img className="mt-10" src="https://www.eglobaldoctors.com/assets/images/equipmentSupport/banner2.png"></img>

            </div>

        </div>
        <div className="bg-gray-300 w-full flex gap-24 items-center justify-center p-10">

            <div className="">

                <hr className="bg-gray-600 h-1"></hr>
                <p className="text-gray-600 text-lg">In Partnership With</p>

            </div>
            <img className="w-32 h-32 p-4" src="https://www.eglobaldoctors.com/assets/images/equipmentSupport/sewa.jpg"></img>
            <img className="w-32 h-32 p-4" src="https://www.eglobaldoctors.com/assets/images/equipmentSupport/IF.jpg"></img>
            <img className="w-32 h-32 p-4" src="https://www.eglobaldoctors.com/assets/images/equipmentSupport/usa.jpg"></img>
            <img className="w-32 h-32 p-4" src="https://www.eglobaldoctors.com/assets/images/equipmentSupport/ind.png"></img>

        </div>

        <div className="p-8 text-center">

            <h1 className="text-3xl">How does it work</h1>

            <div className="p-8 flex gap-20 items-center justify-center">

               

                <div className="text-center w-[80vh] flex gap-4 ">
                
                <div>

                

                <h1 className="text-blue-700 text-3xl"><p className=" w-[42px] h-[42px] border border-blue-700 rounded-full text-blue-700">1</p>  Fill out the technical consultation registration form</h1>
                <p className="w-full text-lg font-thin">If you have problems in filling the form, please send your name, age and phone to support@eglobaldoctors.com . One of the volunteers would call and assist you to fill the form and help with telemedicine consultation.</p>
                </div>
                </div>

                <img className="ml-10" src="https://www.eglobaldoctors.com/assets/images/equipmentSupport/hdiw1.png"></img>

            </div>



            <div className="p-8 flex gap-20 items-center justify-center">

               
            <img className="ml-10" src="https://www.eglobaldoctors.com/assets/images/equipmentSupport/hdiw2.png"></img>
                <div className="text-center w-[80vh] flex gap-4 ">
{/* <p className="border border-blue-700 rounded-full text-blue-700">1</p> */}
<div>



<h1 className="text-blue-700 text-3xl"><p className=" w-[42px] h-[42px] border border-blue-700 rounded-full text-blue-700">2</p> Click on the zoom link to join the meeting</h1>
<p className="w-full text-lg font-thin">The technical volunteer will be assigned directly if you complete Step 1. If you don't complete the form, then our room moderator will help you fill out the form and get an assigned technical volunteer once you join the zoom meeting</p>
</div>
</div>



</div>


        </div>


        <div className="p-4">
      <h1 className="text-center text-4xl font-semibold mb-4">Meeting Details</h1>
      <div className="flex justify-center p-10 w-full">
        <div className="border border-gray-300 p-4 w-full text-center">
          <h2 className="text-blue-600 text-lg font-semibold">Weekdays</h2>
          <p className="text-xl">6:00AM - 10:30AM IST</p>
          <p className="text-2xl">5:30PM - 8:30PM IST</p>
        </div>
        <div className="border border-gray-300 p-4 w-full  text-center">
          <h2 className="text-blue-600 text-lg font-semibold">Weekends</h2>
          <p className="text-xl">6:00AM - 10:30AM IST</p>
          <p className="text-2xl">5:30PM - 9:30PM IST</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <button className="bg-blue-800 text-white py-4 px-6 text-xl rounded-full">Join Meeting</button>
        <button className="bg-blue-800 text-white py-4 px-6 text-xl rounded-full">Leave Feedback</button>
      </div>
      <h2 className="text-center text-xl font-semibold mt-8">Links for the forms</h2>
      <div className="flex justify-center space-x-4 mt-4 text-xl">
        <div className="bg-white shadow-md rounded p-4 text-start">
          <p>For more details of the program</p>
          <a href="#" className="text-blue-600">Click here</a>
        </div>
        <div className="bg-white shadow-md rounded p-4 text-start">
          <p>To volunteer as a technical consultant</p>
          <a href="#" className="text-blue-600">Click here</a>
        </div>
      </div>
    </div>

         
        </>
    )

}

export default Support;