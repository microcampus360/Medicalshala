import React, { useEffect, useState } from "react";
import primary from "../assets/partner/Business_landing_page_banner.png"

import gr1 from "../assets/partner/Group 14934.png"

import gr2 from "../assets/partner/Group 14936.png"
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import 'swiper/css';
import gr3 from "../assets/partner/Group 14938.png"

import world from "../assets/partner/world_map.jpg"
import two from "../assets/partner/Healthconsultation feature icon.png"
import pharm from "../assets/partner/no insuarance needed icon.png"
import multi from "../assets/partner/health privacy icon.png"
import cust from "../assets/partner/Doctor referal icon.png"
import holis from "../assets/partner/Save money icon.png"
import med from "../assets/partner/Medical prescription icon.png"

import one from "../assets/partner/aapi (1).png"
import to from "../assets/partner/Apollo-Diagnostics_logo.png"
import three from "../assets/partner/ata.png"
import four from "../assets/partner/aapyaya_logo.png"
import five from "../assets/partner/h_and_c_logo.png"
import six from "../assets/partner/Sunshine Hospitals_Logo.png"
import seven from "../assets/partner/tana1.png"
import eight from "../assets/partner/whatsashore_logo.png"

import service from "../assets/partner/oncology_footer.png"






    const slides =[
        { id: 1, image: one, caption: '' },
        { id: 2, image: to, caption: '' },
        { id: 3, image: three, caption: '' },
        { id: 4, image: four, caption: '' },
        { id: 5, image: five, caption: '' },
        { id: 6, image: six, caption: '' },
        { id: 7, image: seven, caption: '' },
        { id: 8, image: eight, caption: '' }
      ];
  
    

const Partner = () =>{

    const divStyle = {
        backgroundImage: `url(${primary})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };


    return(
        <>

            <div style={divStyle} className="w-full flex gap-32 p-10">

                <div className="p-10 mt-10 ml-20 flex flex-col gap-10">

                    <h1 className="text-white font-bold text-4xl">Make eGlobalDoctors your</h1>
                    <h1 className="text-white font-bold text-4xl">Digital Healthcare Partner</h1>
                    <div className="flex gap-10">

                        <div className="">
                            <h1 className="font-bold text-white text-2xl">400+</h1>
                            <h1 className="text-white text-2xl">Doctors</h1>

                        </div>
                        <div className="">
                            <h1 className="font-bold text-white text-2xl">40+</h1>
                            <h1 className="text-white text-2xl">Services</h1>

                        </div>
                        <div className="">
                            <h1 className="font-bold text-2xl text-white">8+</h1>
                            <h1 className="text-white text-2xl">Countries</h1>

                        </div>

                    </div>

                </div>

                <div className="rounded-lg bg-gray-300 flex flex-col gap-6 items-center p-4 w-[50vh]">

                    <h1 className="font-bold text-xl">Schedule a demo</h1>
                    <input className="text-gray-500 rounded-lg p-2 w-full " placeholder="Name"></input>
                    
    <input className="text-gray-500 rounded-lg p-2 w-full " placeholder="Organization Name"></input>
    <div className="flex w-full">
                    <select className="custom-select oncology_prepend_input" id="bpage_phone_code">
      <option value="+267">ATG(+267)</option>
      <option value="+54">ARG(+54)</option>
      <option value="+61">AUS(+61)</option>
      <option value="+241">BHS(+241)</option>
      <option value="+245">BRB(+245)</option>
      <option value="+501">PAGE(+501)</option>
      <option value="+591">WAS(+591)</option>
      <option value="+55">GOOD (+55)</option>
      <option value="+1">CAN(+1)</option>
      <option value="+344">EN (+344)</option>
      <option value="+56">CHL(+56)</option>
      <option value="+57">COL(+57)</option>
      <option value="+506">CRI(+506)</option>
      <option value="+53">CUB(+53)</option>
      <option value="+766">DMA(+766)</option>
      <option value="+1">DOM(+1)</option>
      <option value="+593">ECU(+593)</option>
      <option value="+20">ONE (+20)</option>
      <option value="+503">SLV(+503)</option>
      <option value="+500">FLK(+500)</option>
      <option value="+594">GUF(+594)</option>
      <option value="+472">GRD(+472)</option>
      <option value="+590">GLP(+590)</option>
      <option value="+502">GTM(+502)</option>
      <option value="+592">GUY(+592)</option>
      <option value="+509">HTI(+509)</option>
      <option value="+504">HND(+504)</option>
      <option value="+91">IN(+91)</option>
      <option value="+876">HOUR(+876)</option>
      <option value="+81">JPN(+81)</option>
      <option value="+596">MTQ(+596)</option>
      <option value="+52">MEX(+52)</option>
      <option value="+64">NZL(+64)</option>
      <option value="+505">NOTHING (+505)</option>
      <option value="+507">PAN(+507)</option>
      <option value="+595">PRY(+595)</option>
      <option value="+51">PER(+51)</option>
      <option value="+1">PRI (+1)</option>
      <option value="+590">BLM(+590)</option>
      <option value="+868">KNA(+868)</option>
      <option value="+757">LCA(+757)</option>
      <option value="+783">VCT(+783)</option>
      <option value="+597">ON(+597)</option>
      <option value="+867">TTO(+867)</option>
      <option value="+648">TCA(+648)</option>
      <option value="+971">ARE(+971)</option>
      <option value="+44">GBR(+44)</option>
      <option value="+1">USA (+1)</option>
      <option value="+598">URY(+598)</option>
      <option value="+58">VEN(+58)</option>
      <option value="+283">VGB(+283)</option>
      <option value="+339">FOR(+339)</option>
    </select>
                   
                    <input className="text-gray-500  p-2 w-full " placeholder="Contact Number"></input>
                </div>
                    <input className="text-gray-500 rounded-lg p-2 w-full " placeholder="Official Email Id"></input>
                    <textarea className="text-gray-500 rounded-lg p-2 w-full " placeholder="Enter Your query"></textarea>
                    <button className="shadow rounded-xl bg-blue-600 px-10 py-2 text-white text-2xl">Submit</button>

                </div>



            </div>
            <div className="w-full flex flex-col mt-10 mb-10 items-center justify-center">

            <h1 className="text-3xl font-bold">Our Partners</h1>
            <div className="w-full mt-6">

            <Swiper
      spaceBetween={50}
      slidesPerView={4}
      pagination={{ clickable: true }}
      
     
    >
            { slides.map((specialty, index) => (
            <SwiperSlide>
          <div key={index} className="flex items-center justify-center ">
            <img className=" w-24 h-24 " src={specialty.image} />
            <h3 className="mt-4">{}</h3>
          </div>
          </SwiperSlide>
            ))
        }
          </Swiper>
            </div>

            </div>
            <div className="w-full flex flex-col items-center bg-gray-200">

                <div className="p-10 text-center">
                    <h1 className="font-bold text-4xl mb-4">Why Choose Us</h1>
                    <h1 className="text-2xl">Tailored Packages Services For :</h1>
                    <div className="flex gap-6 mt-16">

                        <div className="flex items-center text-left">
                            <img src={gr1}></img>
                           <div className="ml-4">
                            <h1 className="font-bold">Corporate</h1>
                            <h1>Transforming your employee well-being with innovative digital health solutions.</h1>
                           </div>

                        </div>
                        <div className="flex items-center text-left">
                            <img src={gr2}></img>
                           <div className="ml-4">
                            <h1 className="font-bold">Hospitals & Insurance Companies</h1>
                            <h1>Elevate patient care with integrated digital health technologies.</h1>
                           </div>

                        </div>
                        <div className="flex items-center text-left">
                            <img src={gr3}></img>
                           <div className="ml-4">
                            <h1 className="font-bold">Diagnostics & Pharmacies</h1>
                            <h1>Revolutionize diagnostics and pharmacies through seamless digital healthcare integration.</h1>
                           </div>

                        </div>

                    </div>

                </div>

            </div>
            <div className="mt-10 w-full flex flex-col gap-10 items-center">

            <h1 className="text-3xl font-bold">Our Services</h1>
            <div className="grid grid-cols-2 gap-6 p-10">

                <div className="rounded-lg  shadow py-10 px-4">
                    <div className="flex gap-4">
                        <img src={two}></img>
                        <h1 className="text-blue-700 text-xl">24/7 Service</h1>

                    </div>
                    <h1 className="text-xl font-thin">Extend your offerings with our round-the-clock healthcare services.</h1>

                </div>
                <div className="rounded-lg  shadow py-10 px-4">
                    <div className="flex gap-4">
                        <img src={pharm}></img>
                        <h1 className="text-blue-700 text-xl">Diagnostics and Pharmacy</h1>

                    </div>
                    <h1 className="text-xl font-thin">Home Sample Collection, Online Reports, & Medicine Delivery.</h1>

                </div>

                <div className="rounded-lg  shadow py-10 px-4">
                    <div className="flex gap-4">
                        <img src={multi}></img>
                        <h1 className="text-blue-700 text-xl">Multi Specialist Consultations</h1>

                    </div>
                    <h1 className="text-xl font-thin">Enhance your services with access to our network of expert doctors and specialists.</h1>

                </div>

                <div className="rounded-lg  shadow py-10 px-4">
                    <div className="flex gap-4">
                        <img src={cust}></img>
                        <h1 className="text-blue-700 text-xl">Customer Support</h1>

                    </div>
                    <h1 className="text-xl font-thin">collaborate to enhance customer support for seamless user experiences.</h1>

                </div>

                <div className="rounded-lg  shadow py-10 px-4">
                    <div className="flex gap-4">
                        <img src={holis}></img>
                        <h1 className="text-blue-700 text-xl">Holistic Nutrition Plans</h1>

                    </div>
                    <h1 className="text-xl font-thin">Explore collaborations in promoting healthier lifestyles through expert nutrition coaching.</h1>

                </div>

                <div className="rounded-lg  shadow py-10 px-4">
                    <div className="flex gap-4">
                        <img src={med}></img>
                        <h1 className="text-blue-700 text-xl">Secure and Private consultations</h1>

                    </div>
                    <h1 className="text-xl font-thin">Join us in providing secure, private consultations adhering to HIPAA standards.</h1>

                </div>


            </div>

            </div>
            <div className="text-center w-full mt-10 flex flex-col gap-10 items-center">
                <h1 className="text-3xl font-bold">Our Global Presence</h1>
                <img src={world}></img>

            </div>

            <div className="flex p-10 mt-10  bg-gray-100">
      <div className=" p-6 ml-24 rounded-lg text-left w-full max-w-md">
        <h2 className="text-4xl font-bold mb-6 ">Request a Call-Back</h2>
        <p className="mb-6 font-thin text-2xl">Provide us with your contact details we will reach back to you soon</p>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="name" placeholder="Name" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Email id</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" id="email" placeholder="Email id" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="phone">Phone Number</label>
            <div className="flex">
            <select className="custom-select oncology_prepend_input" id="bpage_phone_code">
      <option value="+267">ATG(+267)</option>
      <option value="+54">ARG(+54)</option>
      <option value="+61">AUS(+61)</option>
      <option value="+241">BHS(+241)</option>
      <option value="+245">BRB(+245)</option>
      <option value="+501">PAGE(+501)</option>
      <option value="+591">WAS(+591)</option>
      <option value="+55">GOOD (+55)</option>
      <option value="+1">CAN(+1)</option>
      <option value="+344">EN (+344)</option>
      <option value="+56">CHL(+56)</option>
      <option value="+57">COL(+57)</option>
      <option value="+506">CRI(+506)</option>
      <option value="+53">CUB(+53)</option>
      <option value="+766">DMA(+766)</option>
      <option value="+1">DOM(+1)</option>
      <option value="+593">ECU(+593)</option>
      <option value="+20">ONE (+20)</option>
      <option value="+503">SLV(+503)</option>
      <option value="+500">FLK(+500)</option>
      <option value="+594">GUF(+594)</option>
      <option value="+472">GRD(+472)</option>
      <option value="+590">GLP(+590)</option>
      <option value="+502">GTM(+502)</option>
      <option value="+592">GUY(+592)</option>
      <option value="+509">HTI(+509)</option>
      <option value="+504">HND(+504)</option>
      <option value="+91">IN(+91)</option>
      <option value="+876">HOUR(+876)</option>
      <option value="+81">JPN(+81)</option>
      <option value="+596">MTQ(+596)</option>
      <option value="+52">MEX(+52)</option>
      <option value="+64">NZL(+64)</option>
      <option value="+505">NOTHING (+505)</option>
      <option value="+507">PAN(+507)</option>
      <option value="+595">PRY(+595)</option>
      <option value="+51">PER(+51)</option>
      <option value="+1">PRI (+1)</option>
      <option value="+590">BLM(+590)</option>
      <option value="+868">KNA(+868)</option>
      <option value="+757">LCA(+757)</option>
      <option value="+783">VCT(+783)</option>
      <option value="+597">ON(+597)</option>
      <option value="+867">TTO(+867)</option>
      <option value="+648">TCA(+648)</option>
      <option value="+971">ARE(+971)</option>
      <option value="+44">GBR(+44)</option>
      <option value="+1">USA (+1)</option>
      <option value="+598">URY(+598)</option>
      <option value="+58">VEN(+58)</option>
      <option value="+283">VGB(+283)</option>
      <option value="+339">FOR(+339)</option>
    </select>
              <input className="w-full px-3 py-2 border-t border-b border-r border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="tel" id="phone" placeholder="Phone Number" />
            </div>
          </div>
          <button className="w-80 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Submit</button>
        </form>
      </div>
      <img src={service}></img>
    </div>

        </>
    )
}

export default Partner