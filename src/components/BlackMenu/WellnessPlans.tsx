import React from 'react'
import wrong from '../../assets/WellnessPlans/wrong.svg'
import right from '../../assets/WellnessPlans/right.svg'
import benefit1 from '../../assets/WellnessPlans/eglobaldocters-healthpackage-benefit1.png'
import benefit2 from '../../assets/WellnessPlans/eglobaldocters-healthpackage-benefit2.png'
import benefit3 from '../../assets/WellnessPlans/eglobaldocters-healthpackage-benefit3.png'
import ourHealthPacakage from '../../assets/WellnessPlans/our-health-package-image.png'
import bronzePricing from '../../assets/WellnessPlans/bronze-pricing-india.png'
import bronzePackage from '../../assets/WellnessPlans/bronzepackage-icon.png'
import silverPricing from '../../assets/WellnessPlans/silver-pricing-india.png'
import silverPackage from '../../assets/WellnessPlans/silverpackage-icon.png'
import goldPricing from '../../assets/WellnessPlans/gold-pricing-india.png'
import goldPackage from '../../assets/WellnessPlans/goldpackage-icon.png'
import { useState } from 'react'

interface FAQ {
  question : string;
  answer : string;
}

const WellPlans: React.FC = () => {

    const faqs : FAQ[] = [
      {
          question : "What is the difference between Ayurveda, Unani, Siddha & Homeopathy?",
          answer : "Ayurveda, Unani, and Siddha are traditional Indian medical systems that focus on maintaining overall health and well-being through natural remedies and lifestyle practices. Homeopathy is a system of medicine that uses highly diluted substances to stimulate the body's natural healing abilities."
      },
      {
          question : "Are the products on Aysuhupchar genuine?",
          answer : "Yes, eglobalDoctors has partnered with Aysuhupchar to ensure that all products offered are authentic and from trusted brands."
      },
      {
          question : "Can I consult a doctor about using Ayurvedic products?",
          answer : "Yes, eglobalDoctors offers telemedicine consultations with qualified Ayurvedic doctors who can provide personalized guidance and treatment plans."
      },
      {
          question : "How do I place an order?",
          answer : "Simply browse the Aysuhupchar selection on the eglobalDoctors website, add your desired products to your cart, and proceed to checkout."
      },
      {
          question : "What are the shipping options?",
          answer : "Aysuhupchar offers a variety of shipping options to suit your needs."
      }
  ]

  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggleOpen = (index : number) => {
      setIsOpen(isOpen === index ? null : index);
  }

  return (
    <div>

      <div className='relative flex flex-col h-[80vh]'>
        <div className='bg-wellness-plans-background absolute inset-0 bg-contain bg-no-repeat bg-center z-0'></div>
      </div>


      <div className='flex flex-col items-center justify-center text-xl my-10 py-10 bg-gradient-to-b from-[#D2E5FF] to-[#FFFFFF]'>
        <div className='border border-gray-500 p-10 rounded-2xl z-10 bg-white text-black mt-[-70px]'>
          <h3 className='text-3xl font-bold my-10 text-center'>Select a eGlobalDocters Membership Plan</h3>
          <div>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='border-b border-t border-gray-400'>
                  <th className='px-8 py-8 text-start'>eGlobalDocters Benefits: <p className='text-gray-700 font-normal text-base'>Experience best care at affordable pricing</p></th>
                  <th className='px-8 py-8'>Basic Plan <p className='text-gray-700 font-normal text-base'>Covers 1 person</p><p className='text-gray-700 font-normal text-base'>Valid for 3 months</p></th>
                  <th className='px-8 py-8'>Basic Plus Plan <p className='text-gray-700 font-normal text-base'>Covers 2 persons</p><p className='text-gray-700 font-normal text-base'>Valid for 6 months</p></th>
                  <th className='px-8 py-8'>Pro Plan <p className='text-gray-700 font-normal text-base'>Covers Family upto 4 Members</p><p className='text-gray-700 font-normal text-base'>Valid for 12 months</p></th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-400'>
                  <td className='px-8 py-8 font-bold w-96'>24/7 Access to Board Certified Doctors across 40+specialities</td>
                  <td>
                    <img src={wrong} className='w-full h-7' alt="wrong" />
                  </td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                </tr>
                <tr className='border-b border-gray-400'>
                  <td className='px-8 py-8 font-bold w-96'>Premium Support Care</td>
                  <td>
                    <img src={wrong} className='w-full h-7' alt="wrong" />
                  </td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                </tr>
                <tr className='border-b border-gray-400'>
                  <td className='px-8 py-8 font-bold w-96'>No. of Diet Consultation</td>
                  <td>
                    <p className='w-full text-center'>1</p>
                  </td>
                  <td>
                    <p className='w-full text-center'>1</p>
                  </td>
                  <td>
                    <p className='w-full text-center'>1</p>
                  </td>
                </tr>
                <tr className='border-b border-gray-400'>
                  <td className='px-8 py-8 font-bold w-96'>1 Week Detox Diet Plan <span className='text-red-500 font-bold'>FREE</span></td>
                  <td>
                    <img src={wrong} className='w-full h-7' alt="wrong" />
                  </td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                </tr>
                <tr className='border-b border-gray-400'>
                  <td className='px-8 py-8 font-bold w-96'>15% OFF on Pharmacy Order</td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                </tr>
                <tr className='border-b border-gray-400'>
                  <td className='px-8 py-8 font-bold w-96'>15% OFF on Diagnostics Order</td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                  <td>
                    <img src={right} className='w-full h-7' alt="right" />
                  </td>
                </tr>
                <tr className='border-b border-gray-400'>
                  <td className='px-8 py-8 font-bold'>
                    Health Passport Access <span className='text-red-500 font-bold'><del>&#8377;500</del></span> &#8377;0
                  </td>
                  <td>
                    <p className='w-full text-center'>3 Months</p>
                  </td>
                  <td>
                    <p className='w-full text-center'>6 Months</p>
                  </td>
                  <td>
                    <p className='w-full text-center'>12 Months</p>
                  </td>
                </tr>
                <tr className='border-b border-gray-400'>
                  <td className='px-8 py-8 font-bold'>
                    Number of Consultations
                  </td>
                  <td className='px-8 py-8'>
                    <div className='w-full text-center'>
                      <p>1 Primary Consultation</p>
                      <span className='text-gray-500'><del>&#8377;999</del></span> <span className='font-bold'>&#8377;199 /</span>
                      <p>3 months</p>
                      <p className='text-green-600 font-bold my-3'>Save 80%</p>
                      <div className='text-white bg-[#1850A0] px-8 py-2 rounded-xl w-fit mx-auto'>Buy Plan</div>
                    </div>
                  </td>
                  <td className='px-8 py-8'>
                    <div className='w-full text-center'>
                      <p>2 Primary Consultation</p>
                      <span className='text-gray-500'><del>&#8377;1500</del></span> <span className='font-bold'>&#8377;399 /</span>
                      <p>6 months</p>
                      <p className='text-green-600 font-bold my-3'>Save 74%</p>
                      <div className='text-white bg-[#1850A0] px-8 py-2 rounded-xl w-fit mx-auto'>Buy Plan</div>
                    </div>
                  </td>
                  <td className='px-8 py-8'>
                    <div className='w-full text-center'>
                      <p>3 Primary Consultation</p>
                      <span className='text-gray-500'><del>&#8377;2100</del></span> <span className='font-bold'>&#8377;699 /</span>
                      <p>12 months</p>
                      <p className='text-green-600 font-bold my-3'>Save 67%</p>
                      <div className='text-white bg-[#1850A0] px-8 py-2 rounded-xl w-fit mx-auto'>Buy Plan</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div>
        <h3 className='text-3xl font-bold text-center'>Benefits of eGlobalDocters Health Package</h3>
        <div className='flex justify-evenly my-20'>
          <div className='flex flex-col gap-5 items-center'>
            <img src={benefit1} className='w-14 h-14' alt="eglobaldocters-healthpackage-benefit1" />
            <p className='text-2xl w-72 text-center'>Board Certified Docters from accross world</p>
          </div>
          <div className='flex flex-col gap-5 items-center'>
            <img src={benefit2} className='w-14 h-14' alt="eglobaldocters-healthpackage-benefit2" />
            <p className='text-2xl w-72 text-center'>40+ Specialities</p>
          </div>
          <div className='flex flex-col gap-5 items-center'>
            <img src={benefit3} className='w-14 h-14' alt="eglobaldocters-healthpackage-benefit3" />
            <p className='text-2xl w-72 text-center'>24*7 Docter Availability</p>
          </div>
        </div>
      </div>


      <div>
        <h3 className='text-3xl font-bold text-center'>eGlobalDocters vs Other Healthcare Providers</h3>
        <div className="flex justify-evenly my-20 border border-gray-500 rounded-xl w-fit mx-auto">
          <table className="border border-gray-500 rounded-xl overflow-hidden">
            <thead>
              <tr className="border border-gray-500">
                <th className="px-16 py-8 border border-gray-500 text-2xl bg-[#E2EEFD] w-[33%]">Benefits</th>
                <th className="px-16 py-8 border border-gray-500 bg-[#FDF0E2] w-[33%]">
                  <p className="text-2xl">eGlobalDocters</p>
                  <p className="font-normal">Covers 1 Person</p>
                </th>
                <th className="px-16 py-8 border border-gray-500 bg-[#FDF0E2] w-[33%]">
                  <p className="text-2xl">Other Healthcare Providers</p>
                  <p className="font-normal">Covers 1 Person</p>
                </th>
              </tr>
            </thead>
            <tbody className='text-center text-xl'>
              <tr>
                <td className="px-16 py-8 border border-gray-500 bg-[#E2EEFD]">Complementory Diet Consultation</td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={right} className='w-full h-7' alt="right" />
                </td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={wrong} className='w-full h-7' alt="wrong" />
                </td>
              </tr>
              <tr>
                <td className="px-16 py-8 border border-gray-500 bg-[#E2EEFD]">24/7 Docters Availability</td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={right} className='w-full h-7' alt="right" />
                </td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={right} className='w-full h-7' alt="right" />
                </td>
              </tr>
              <tr>
                <td className="px-16 py-8 border border-gray-500 bg-[#E2EEFD]">Premium Support Care</td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={right} className='w-full h-7' alt="right" />
                </td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={right} className='w-full h-7' alt="right" />
                </td>
              </tr>
              <tr>
                <td className="px-16 py-8 border border-gray-500 bg-[#E2EEFD]">1 Diet Consultation <span className='text-red-500'>FREE</span></td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={right} className='w-full h-7' alt="right" />
                </td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={wrong} className='w-full h-7' alt="wrong" />
                </td>
              </tr>
              <tr>
                <td className="px-16 py-8 border border-gray-500 bg-[#E2EEFD]">1 Week Detox plan <span className='text-red-500'>FREE</span></td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={right} className='w-full h-7' alt="right" />
                </td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={wrong} className='w-full h-7' alt="wrong" />
                </td>
              </tr>
              <tr>
                <td className="px-16 py-8 border border-gray-500 bg-[#E2EEFD]">Health Passport Access</td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={right} className='w-full h-7' alt="right" />
                </td>
                <td className="px-16 py-8 border border-gray-500">
                  <img src={wrong} className='w-full h-7' alt="wrong" />
                </td>
              </tr>
              <tr>
                <td className="px-16 py-8 border border-gray-500 bg-[#E2EEFD]">No. of Specialities</td>
                <td className="px-16 py-8 border border-gray-500">40+</td>
                <td className="px-16 py-8 border border-gray-500">22+</td>
              </tr>
              <tr>
                <td className="px-16 py-8 border border-gray-500 bg-[#E2EEFD]">Response Time</td>
                <td className="px-16 py-8 border border-gray-500">Within 30 Mins</td>
                <td className="px-16 py-8 border border-gray-500">2-3 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>


        {/* Medical Needs in USA */}

        <div>
          <h2 className='text-3xl text-[#1850A0] font-bold text-center'>Worried about your Medical Needs in USA?</h2>
          <h3 className='text-3xl text-[#1850A0] font-bold text-center'>Checkout our Health Packages</h3>
          <div className='font-normal flex justify-center gap-20 my-10 mx-10'>
            <img src={ourHealthPacakage} className='object-contain' alt="our-health-package-image" />
            <div>
              <h3 className='text-[#1850A0] text-3xl'>Benefits of having a Health Pacakage</h3>
              <p className='text-xl my-5'>Introducing Pacakage deals for you and your family members. Now get yourself consulted at lower cost</p>
              <ul className='list-disc text-xl space-y-4'>
                <li>Choose from our board certified docters (USA and India).</li>
                <li>Consult docters for informed health choices.</li>
                <li>Our Specialities <span className='text-[#1850A0]'>(View Specialities)</span></li>
                <li>Video Consultation upto 30 mins.</li>
                <li>These pacakges can be used by yourself or your family members.</li>
                <li>Docters response time same day or 1-3 days.</li>
                <li>Support response time 2-3 hours.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Consultations */}
        <div className='flex justify-around'>
          <div className='bg-[#BDEFD4] p-4 rounded-xl relative px-10 py-12'>
            <div className='absolute left-2 top-4'>
              <img src={bronzePackage} className='w-30 h-30' alt="bronzePackage" />
            </div>
            <div className='absolute right-3 top-[-10px]'>
              <img src={bronzePricing} className='w-28 h-30' alt="bronzePricing" />
            </div>
            <div className='mt-24'>
              <h3 className='text-3xl font-bold my-10'>Bronze</h3>
              <ul className='list-disc mx-5 text-xl'>
                <li>2 Consultations</li>
                <li>Consult docter for informed health choices</li>
                <li>Valid for 6 months (Extendable)</li>
              </ul>
              <div className='text-white bg-[#1850A0] py-2 px-7 rounded-xl text-center mt-4 w-fit mx-auto'>Buy Now</div>
            </div>
          </div>
          <div className='bg-[#F9DFFA] p-4 rounded-xl relative px-10 py-12'>
            <div className='absolute left-2 top-4'>
              <img src={silverPackage} className='w-30 h-30' alt="silverPackage" />
            </div>
            <div className='absolute right-3 top-[-10px]'>
              <img src={silverPricing} className='w-28 h-30' alt="silverPricing" />
            </div>
            <div className='mt-24'>
              <h3 className='text-3xl font-bold my-10'>Silver</h3>
              <ul className='list-disc mx-5 text-xl'>
                <li>4 Consultations</li>
                <li>Consult docter for informed health choices</li>
                <li>Valid for 6 months (Extendable)</li>
              </ul>
              <div className='text-white bg-[#1850A0] py-2 px-7 rounded-xl text-center mt-4 w-fit mx-auto'>Buy Now</div>
            </div>
          </div>
          <div className='bg-[#F9E490] p-4 rounded-xl relative px-10 py-12'>
            <div className='absolute left-2 top-4'>
              <img src={goldPackage} className='w-30 h-30' alt="goldPackage" />
            </div>
            <div className='absolute right-3 top-[-10px]'>
              <img src={goldPricing} className='w-28 h-30' alt="goldPricing" />
            </div>
            <div className='mt-24'>
              <h3 className='text-3xl font-bold my-10'>Gold</h3>
              <ul className='list-disc mx-5 text-xl'>
                <li>6 Consultations</li>
                <li>Consult docter for informed health choices</li>
                <li>Valid for 6 months (Extendable)</li>
              </ul>
              <div className='text-white bg-[#1850A0] py-2 px-7 rounded-xl text-center mt-4 w-fit mx-auto'>Buy Now</div>
            </div>
          </div>
        </div>


        {/* FAQ */}
        <div className='flex flex-col justify-center text-xl my-10 py-10'>
            <h2 className='text-4xl font-bold text-center'>Frequently Asked Questions</h2>
            <div className='my-10 flex flex-col mx-20'>

                {
                    faqs.map((faq, index) => (

                        <div key={index} onClick={() => toggleOpen(index)} className='border-2 border-slate-600 rounded-xl mx-5 cursor-pointer p-3 transition duration-500 ease-in-out my-3'>

                        <div className='flex justify-between'>
                            <h3 className='hover:text-[#00327A] text-2xl transition-all duration-100 ease-in-out font-semibold'>{faq.question}</h3>
                            
                            {isOpen === index ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fill-rule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                                </svg>
                                ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>    


                        {
                            isOpen === index && (
                                <div className='mt-5 transition duration-500 ease-in-out'>{faq.answer}</div>
                            )
                        }
                        </div>
                    ))
                }

            </div>
        </div>

        {/* Doubt not resolved */}
        <div className='flex flex-col items-center justify-center my-10'>
          <h3 className='text-3xl font-bold'>I have a question that isn't listed here. Can you help me?</h3>
          <p className='my-2 text-xl'>Don't see your question? Don't worry. Just e-mail <span className='text-[#1850A0]'>support@eglobaldocters.com</span> or call <span className='text-[#1850A0]'>+91 207-119-0009</span>.</p>

        </div>

      </div>

    </div>
  )
}

export default WellPlans