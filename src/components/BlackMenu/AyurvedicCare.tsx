import React, { useState } from 'react'
import benefit1 from '../../assets/AyurvedicCare/Benefits/image-1.png'
import benefit2 from '../../assets/AyurvedicCare/Benefits/image-2.png'
import benefit3 from '../../assets/AyurvedicCare/Benefits/image-3.png'
import aayushUpcharLogo from '../../assets/AyurvedicCare/aayush_upchar_logo.jpg'

interface FAQ {
    question : string;
    answer : string;
}

const AyurvedicCare : React.FC = () => {

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
    <>
        <div className='relative flex flex-col h-[80vh]'>
            <div className='bg-ayurvedic-care-background absolute inset-0 bg-cover bg-center z-0'></div>
            <div className='h-full flex flex-col items-center text-center justify-center text-xl z-10'>
                <h2 className='text-5xl font-bold text-[#1850A0]'>Find your natural Path to Wellbeing</h2>
                <h4 className='text-3xl my-10'>Connect with Ayurvedic Doctors Online & Shop for Ayurvedic Products</h4>
                <div className='text-white px-16 py-3 rounded-2xl text-xl bg-gradient-to-r from-[#34539c] from-10% to-[#022A8B] to-90%'>
                    Start Consultation
                </div>
            </div>
        </div>

        <div className='bg-[#E6E6E6] flex flex-col items-center text-center justify-center text-xl my-10 py-10'>
            <h2 className='text-4xl font-bold'>Why Choose Us</h2>
            <div className='w-[50vw] my-10 flex flex-col gap-5'>
                <div className='flex gap-10 items-center justify-center'>
                    <img src={benefit1} className='w-32 h-32' alt="" />
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-xl font-bold text-start'>Wide Selection of Ayurvedic Products</h3>
                        <p className='text-lg text-start'>Explore a vast range of authentic Ayurvedic, Unani, Siddha & Homeopathy medicines, supplements, and wellness products from trusted brands.</p>
                    </div>
                </div>
                <div className='flex gap-10 items-center'>
                    <img src={benefit2} className='w-32 h-32'  alt="" />
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-xl font-bold text-start'>Wide Selection of Ayurvedic Products</h3>
                        <p className='text-lg text-start'>Explore a vast range of authentic Ayurvedic, Unani, Siddha & Homeopathy medicines, supplements, and wellness products from trusted brands.</p>
                    </div>
                </div>
                <div className='flex gap-10 items-center'>
                    <img src={benefit3} className='w-32 h-32'  alt="" />
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-xl font-bold text-start'>Wide Selection of Ayurvedic Products</h3>
                        <p className='text-lg text-start'>Explore a vast range of authentic Ayurvedic, Unani, Siddha & Homeopathy medicines, supplements, and wellness products from trusted brands.</p>
                    </div>
                </div>
            </div>
        </div>


        {/* Our Parmacy Partner */}
        <div className='bg-[#F5F3FF] flex flex-col items-center text-center justify-center text-xl my-10 py-10'>
            <h2 className='text-4xl font-bold'>Our Pharmacy Partner</h2>
            <div className='my-10 flex flex-col gap-5 w-60 h-60 items-center'>
                <img src={aayushUpcharLogo} alt="aayush-upchar-logo" />
                <div className='text-white bg-[#004AAD] p-2 rounded-xl w-40'>Explore More</div>
            </div>
        </div>
        
        {/* FAQ */}
        <div className='flex flex-col justify-center text-xl my-10 py-10'>
            <h2 className='text-4xl font-bold text-center'>FAQ's</h2>
            <div className='my-10 flex flex-col mx-20'>

                {
                    faqs.map((faq, index) => (

                        <div key={index} onClick={() => toggleOpen(index)} className='border-2 border-slate-600 rounded-xl mx-5 cursor-pointer p-3 transition duration-500 ease-in-out my-3'>

                        <div className='flex justify-between'>
                            <h3 className='hover:text-[#00327A] transition-all duration-100 ease-in-out font-semibold'>{faq.question}</h3>
                            
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
    </>
  )
}

export default AyurvedicCare