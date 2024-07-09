import Selector from "../../../CountrySelector";
import React, { useState,useEffect } from "react";
import Feature from "./featureCat";
import Nutritionist from "./Nutrisionist";
import ToggleBlock from "./ToggleBlock";

import diabetes from "../../../../assets/LandingPageHeader/diet/diabetes.png"
import detox from "../../../../assets/LandingPageHeader/diet/detox.png"
import child from "../../../../assets/LandingPageHeader/diet/child_nutrition.png"
import gut from "../../../../assets/LandingPageHeader/diet/gut_health.png"
import menopause from "../../../../assets/LandingPageHeader/diet/menopause.png" 
import reversal from "../../../../assets/LandingPageHeader/diet/reversal.png"
import sports from "../../../../assets/LandingPageHeader/diet/sportsnutrition.png"
import weight from "../../../../assets/LandingPageHeader/diet/weightloss.png"
import service from "../../../../assets/LandingPageHeader/diet/service.png"


const DietPrograms = () =>{
    const [country, setCountry] = useState<String | null>('');

    const questions = [
        {
          heading: "What is nutritional coaching?",
          details: "Nutritional coaching focuses on educating people about smarter food choices that help in living a healthier life. It helps people with habit formation and mindful eating."
        },
        {
          heading: "How do the nutritional coaches help me?",
          details: "The certified nutritional coaches work with you to identify the root cause problem. They work with you to understand your eating habits and help you with specific habit formation until you reach your goal. The approach to nutritional coaching is scientific along with some holistic transformational tools."
        },
        {
          heading: "Does nutritional coaching mean a strict diet?",
          details: "Nutritional coaching helps with healthy eating habit formation. No fad diets are prescribed."
        },
        {
          heading: "Can I get a nutrition plan for a specific goal?",
          details: "We provide plans in various categories such as diabetes remission, weight loss, menopause nutrition support, PCOS reversal & hypothyroidism, and many more."
        },
        {
          heading: "Are the nutrition plans the same for everyone?",
          details: "No, the coaches work with individuals to understand the case history and create eating habits that will contribute to achieving the goal."
        }
      ];

    const nutritionists = [
        {
          name: "Aakanksha Dixit",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Aanandita Pande",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aanandita_pande.jpeg"
        },
        {
          name: "Anjali Agarwal",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/anjali_agarwal.jpg"
        },
        {
          name: "Archana Arora",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/archana_arora.jpg"
        },
        {
          name: "Daniyah Irfan",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/daniyah_irfan.jpg"
        },
        {
          name: "Dhanyalakshmi Nithiyanandham",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/Dhanyalakshmi_Nithiyanandham.JPG"
        },
        {
          name: "Divya Diwaker",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Dt Neha Suryawanshi",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Dt Shama Satarkar",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Jyothi Srinivas",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Karuna Ekambar",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Kavita Vinod",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Manjunath Muneshwar",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Mark Dodge",
          pos: "NUTRITIONIST",
          country: "United States",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Neelam Jain",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Neeraja Ajay Kunisetti",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Padma Kathi",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Pavitra Maragani",
          pos: "NUTRITIONIST",
          country: "United States",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Poonam Upadhyay",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Prasanna Arun",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Pravin Kamble",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Priya Sahni",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Razia Begum",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Revathi Prasad",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Sandhya Korvan",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Sayali Shah",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Shallu Bajaj",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Shikha Kothari",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Shikha Banthiya",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Shivapriya Periasamy",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Shweta Siddharth",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Sirisha Medisetty",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Sri Sri Jayantha",
          pos: "NUTRITIONIST",
          country: "United States",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        },
        {
          name: "Supriya Srivastava",
          pos: "NUTRITIONIST",
          country: "India",
          img: "https://storage.eglobaldoctors.com/assets/updated_doctor_profiles/aakanksha_dixit.jpg"
        }]

    const features = [
        {
          "head": "Diabetes Remission",
          "body": "Everyone should be diabetes free and this is the motto of our Diabetes Remission program at eGlobalDoctors.",
          "img": diabetes
        },
        {
          "head": "Detox Program",
          "body": "The program aims at 3 levels of detox which include Food, Body, and Mind.",
          "img": detox
        },
        {
          "head": "Weight Loss",
          "body": "Our program aims not only in cutting down those extra pounds from your body but it makes you feel lighter Physically, Mentally & Emotionally.",
          "img": weight
        },
        {
          "head": "Child Nutrition",
          "body": "Child nutrition is Healthy, fun-filled, tasty, creative and at the same time provides optimal diet habits to your child.",
          "img": child
        },
        {
          "head": "Gut Health",
          "body": "Good Gut Health matters because 80% of your immune system is in the GUT and the majority of our body’s Serotonin (Happy Hormone) is secreted in the Gut.",
          "img": gut
        },
        {
          "head": "Menopause Nutrition Support",
          "body": "To empower every woman through a wonderful phase of mid-life and her unique menopausal journey.",
          "img": menopause
        },
        {
          "head": "Reversal of PCOS & Hypothyroidism",
          "body": "PCOS and certain types of hypothyroidism are reversible by the following approach. We are able to achieve that quite successfully with our clients.",
          "img": reversal
        },
        {
          "head": "Sports Nutrition",
          "body": "Sports nutrition is not only about providing the essential fuels but it is also about effective utilization of the same by the body, which eventually strengthens the body and provides the ability to perform and improve endurance.",
          "img": sports
        }
      ]


      

    useEffect(()=>{
          
        const count = localStorage.getItem("country")
        setCountry(count)
         
    },[])

    return(
        <>
         <Selector
      setCountry={setCountry}
     />
            <div className="w-full font-roboto">

                <div className="p-6 flex flex-col md:flex-row gap-4  md:items-center">
                    <div className="flex flex-col gap-6">

                      <h1 className="font-bold text-5xl text-black-700">Nutritional Coaching To Reverse Chronic Diseases</h1>
                      <div>
                      <h3 className=" text-2xl text-blue-700">Get Started For FREE Now</h3>

                        <h3 className=" text-2xl text-black-500"> We have Multilingual Nutritional Coaches (Learn More)</h3>

                      </div>
                      
                     <div className="w-full flex gap-4 ">

                        <button className="px-4 py-2 font-bold text-white text-xl bg-blue-800 border border-black rounded-lg">Get Started</button>
                        <button className="px-4 py-2 font-bold text-xl border border-black rounded-lg">Chat With Us</button>

                     </div>

                    </div>

                    <video autoPlay muted loop>
                        <source src="https://www.eglobaldoctors.com/assets/images/diet/diet_video.mp4"></source>
                    </video>

                    

                </div>

            </div>

            <div className="w-full">
                <div className="p-6">

                <h1 className="text-2xl font-bold mb-4">FEATURED CATEGORIES</h1>
                <hr className="w-full bg-[#4b4b4b] h-1"></hr>
                <div className="p-4 grid grid-cols-4 gap-4">

                    {
                        features.map(feature=>(
                            <Feature

                                img={feature.img}
                                head={feature.head}
                                body={feature.body}    
                            />
                        ))
                    }

                </div>
                <hr className="w-full bg-[#4b4b4b] h-1"></hr>

                </div>

               


            </div>

            <div className="w-full">

                <div className="flex flex-col items-center justify-center">

                    <h1 className="text-5xl font-bold ">AVAILABLE <span className="text-blue-700">DIET PROGRAMS</span></h1>
                    <div className="w-full flex flex-col gap-4 items-center justify-center rounded p-10">


                        <div className="  bg-[#f0bbff] flex flex-col gap-4 items-center justify-center rounded-lg  px-20 py-10">
                        <h2 className="text-blue-700 text-3xl">Get a Diet Consultation for free
                         </h2>
                         <h2 className="text-xl">Fill this form to get a FREE diet assessment worth $99.00 from our Expert Nutrition Coaches.</h2>
                         <button className="px-14 py-2 border border-blue-500 text-white text-xl bg-blue-500 rounded-lg"> Book Now </button>

                        </div>

                      

                    </div>

                </div>


                <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Select a eGlobalDoctors Diet Plan</h2>
      <div className="overflow-x-auto p-4 border border-grey-500">
      <table className="text-lg min-w-full bg-white p-20">
          <thead>
            <tr>
              <th className="py-6 px-4 border-b border-gray-200">Features</th>
              <th className="py-6 px-4 border-b border-gray-200">1 Month Consultation</th>
              <th className="py-6 px-4 border-b border-gray-200 bg-blue-100 relative">
                2 Months Consultation
                <span className="absolute top-0 left-20 px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">Recommended</span>
              </th>
              <th className="py-6 px-4 border-b border-gray-200">3 Months Consultation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-6 px-4 border-b border-gray-200">Personalized Diet Chart (Weekly)</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
            </tr>
            <tr>
              <td className="py-6 px-4 border-b border-gray-200">Weekly Follow-Up with Dietician</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
            </tr>
            <tr>
              <td className="py-6 px-4 border-b border-gray-200">Premium Support Care</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
            </tr>
            <tr>
              <td className="py-6 px-4 border-b border-gray-200">Blogs, Recipes, Short Informative Videos <span className="text-red-500">FREE</span></td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
            </tr>
            <tr>
              <td className="py-6 px-4 border-b border-gray-200">Detox Diet Plan <span className="text-red-500">FREE</span></td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
            </tr>
            <tr>
              <td className="py-6 px-4 border-b border-gray-200">Exercise Videos</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">✅</td>
            </tr>
            <tr>
              <td className="py-6 px-4 border-b border-gray-200">Number of Consultations</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">4</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">8</td>
              <td className="py-6 px-4 border-b border-gray-200 text-center">12</td>
            </tr>
            <tr>
              <td className="py-6 px-4 "></td>
              <td className="py-6 px-4 text-center">
                <span className="line-through text-gray-500">$240</span> <span className="font-bold">$199</span> / 1 month
                <br />
                <span className="text-green-500">Save 17%</span>
                <br />
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Buy Plan</button>
              </td>
              <td className="py-6 px-4 text-center">
                <span className="line-through text-gray-500">$332</span> <span className="font-bold">$249</span> / 2 months
                <br />
                <span className="text-green-500">Save 25%</span>
                <br />
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Buy Plan</button>
              </td>
              <td className="py-6 px-4 text-center">
                <span className="line-through text-gray-500">$388</span> <span className="font-bold">$299</span> / 3 months
                <br />
                <span className="text-green-500">Save 23%</span>
                <br />
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Buy Plan</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

                <hr className="w-full bg-[#4b4b4b] h-1"></hr>
            </div>

            <div className="w-full mt-6 p-10">

            <h2 className="mb-4 text-black-700 text-3xl font-bold">How do we work?</h2>
            
            <ul className="list-disc list-inside ml-4">
                <li>We help people understand the root cause of the problem.</li>
                <li>We take an in-depth case history.</li>
                <li>No fad diets are prescribed.</li>
                <li>Help people understand mindful eating.</li>
                <li>The recommendations are based on their individual taste and preferences.</li>
                <li>Healthy habit formation until you reach a specific goal.</li>
                <li>We will hold your hands from the beginning till you achieve optimal health.</li>
                <li>Our approach is totally scientific along with some holistic transformation tools.</li>
            </ul>

            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-4">

                        <h2 className="text-4xl text-blue-700 font-bold">Our Nutritional Coaches</h2>
                        <div className="px-16 grid grid-cols-5 gap-4">
                        

{
    nutritionists.map(nut=>(
        <Nutritionist

            img={nut.img}
            name={nut.name}
            pos={nut.pos}  
            country={nut.country}   
        />
    ))
}






                        </div>

            </div>

           
<div className="w-full p-6 flex flex-col gap-4">
<hr className="w-full bg-[#4b4b4b] h-1"></hr>
<h1 className="text-2xl font-bold mt-6">Nutritional Coaching Related Questions</h1>

<div className="mt-10 flex flex-col gap-4">

{
    questions.map(ques=>(

        <ToggleBlock

heading={ques.heading}
details={ques.details}

/>

    ))
}



</div>





</div>

<div className="w-full p-14 flex items-center justify-center">

    <div className="flex flex-col gap-6">

    <h1 className="text-gray-500 font-bold text-5xl">Still Thinking?</h1>
    <h3 className="text-2xl">Schedule a free consultation with <span className="text-blue-600"> Top class nutritional coaches.</span></h3>

    <h3>You can contact our team to clear all your doubts before starting your program.</h3>

    <div className="w-full flex gap-4 ">

<button className="px-4 py-2 font-bold text-white text-xl bg-blue-800 border border-black rounded-lg">Get Started</button>
<button className="px-4 py-2 font-bold text-xl border border-black rounded-lg">Chat With Us</button>

</div>

    </div>

    <img src={service}></img>

   

</div>
            
           

            
        </>
    )
}

export default DietPrograms;