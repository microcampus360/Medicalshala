import React from "react";
import chair from "../assets/leadership/chairman.jpg"
import ceo from "../assets/leadership/ceo.jpg"
import coo from "../assets/leadership/coo&puko.jpg"
import cfo from "../assets/leadership/cfo&puso.png"
import surya from "../assets/leadership/drsurya.jpg"
import vinod from "../assets/leadership/drvinod.jpg"
import pio from "../assets/leadership/pio.jpg"
import cmo from "../assets/leadership/cmo&is.jpg"
import anu from "../assets/leadership/anuragmairal.png"
import cat from "../assets/leadership/catherinemohr.png"
import priya from "../assets/leadership/priyakorrapati.png"
import sud from "../assets/leadership/dr_sudhakar.png"
import uday from "../assets/leadership/udayreddy.png"

interface Block{
    img:string,
    name:String,
    position:String
}

const boardMembers = [
    {
      img: chair, // Replace with actual image URL
      name: "Dr. Sreeni Gangasani",
      position: "Chairman, Board Member (USA)"
    },
    {
      img: ceo, // Replace with actual image URL
      name: "Krish Manchala",
      position: "CEO & CTO, Board Member (USA),km@eglobaldoctors.com",

    },
    {
      img: coo, // Replace with actual image URL
      name: "Dr. Srinivas Gadikoppula",
      position: "COO & President UK Operations, Board Member"
    },
    {
      img: cfo, // Replace with actual image URL
      name: "Dr. Amarender Kasarla",
      position: "CFO & President USA Operations, Board Member"
    },
    {
      img: cmo, // Replace with actual image URL
      name: "Dr. Madhu Sudhan Reddy",
      position: "CMO & Imaging Services (USA), Board Member"
    },
    {
      img: pio, // Replace with actual image URL
      name: "Dr. Sambasivaiah Kuraparthy",
      position: "President India Operations, Board Member"
    },
    {
      img: vinod, // Replace with actual image URL
      name: "Dr. Vinod Elete",
      position: "Director of Operations, India, Australia and New Zealand"
    },
    {
      img: surya, // Replace with actual image URL
      name: "Dr. Surya Prakash Reddy",
      position: "Director, India, eGlobal Seva Operations"
    }
  ];


  const adv = [
    {
      img : anu,
      name: "Dr. Anurag Mairal (USA)",
      details: "Dr. Anurag Mairal is an adjunct professor of Medicine and the Director, of Global Outreach Programs at Stanford Byers Center for Biodesign, Stanford University. He is also a Lead for Technology Innovation and Impacts at the Center for Innovation in Global Health. Dr. Mairal has an extensive background in medical technology development and commercialization, collaborating with partners in the U.S., India, China, and other emerging markets to advance product development, manufacturing, and distribution. He serves as the Founding Chair of BME IDEA APAC, a community of MedTech innovation programs in the Asia Pacific. Concurrently, he is a co-founder and Executive VP of Orbees Medical, an SF Bay Area-based strategy consulting firm serving the global healthcare industry, with a focus on MedTech, pharmaceutical, and digital health industry. Dr. Mairal earned a Ph.D. in chemical engineering from the University of Colorado at Boulder and an MBA from the Haas School of Business at the University of California at Berkeley. He also holds an MS in chemical engineering from the IIT Mumbai and a BS in chemical engineering from the NIT Raipur."
    },
    {
      img : cat,
      name: "Dr. Catherine Mohr (USA)",
      details: "Dr. Catherine Mohr is President of the Intuitive Foundation, investing in research and development programs aimed at improving the education of medical practitioners around the world and applying novel technologies towards reducing the global burden of disease. As a HealthTech executive with over 20 years of experience in the areas of strategy, research, product development, and organizational change, Catherine brings a diverse background which covers surgery, surgical education, medical technology, engineering, product design, healthcare, alternative energy, automotive, aerospace, global entrepreneurship, IP litigation, FDA compliance, and product development. From this perspective she brings deep insights into emerging opportunities, technology trends, issues and challenges. She has been involved with numerous startup companies in both energy and medical devices, and is involved with entrepreneurship programs worldwide. Dr. Mohr serves as a scientific and academic advisor for several international universities as well as government technology development programs in the US, UK and her native New Zealand. Dr. Mohr received her BS and MS in mechanical engineering from MIT, and her MD from Stanford University School of Medicine."
    },
    {
      img : priya,
      name: "Priya Korrapati (USA)",
      details: "Priya Korrapati is an entrepreneur, philanthropist, and author. She is the CEO and co-founder of eMedEvents Corp., the world’s largest Medical Education (CME/CE) marketplace, She is an active blogger for medical event marketing. She founded her first company, Pace Incorporated in October 2003, while simultaneously working as a Global Implementation Leader at Ingersoll Rand. In 2014, she co-founded eMedEvents Corporation with the idea to be earth's most healthcare - professional centric company. The social mission of eMedEvents is to provide real-time access to continuing medical education for healthcare providers so that patient outcomes are improved, and lives are saved. Priya graduated with a bachelor’s degree from the University of Veterinary Science in AP, India. She received a Master’s degree in Computer Science from Oklahoma City University, a Master’s degree in Project Management from the University of Denver, and a Master’s degree in Management from Harvard University."
    },
    {
      img : sud,
      name: "Dr. Sudhakar Jonnalagadda (USA)",
      details: "A Board-Certified Gastroenterologist/Transplant Hepatologist, working in Douglas, GA, Dr. Jonnalagadda is a former president of the American Association of Physicians of Indian Origin (AAPI). Dr. Jonnalagadda is also a former Assistant Professor at the Medical College of Georgia. He was the President of Coffee Regional Medical Staff 2018 and had served as the Director of the Medical Association of Georgia Board from 2016 onwards. He had served as the President of the Georgia Association of Physicians of Indian Heritage (GAPI) from 2007 to 2008 and was the past chair of the Board of trustees, of GAPI. He was the chairman of the Medical Association of Georgia, IMG section, and a Graduate, of Georgia Physicians Leadership Academy (advocacy training). Dr.Sudhakar Jonnalagadda pursued MD from Rangaraya Medical College, Andhra Pradesh, India and was awarded a Diploma in specialized surgery (Abdominal) at Vienna, Austria. He was a Gastroenterology Fellow at Section of Gastroenterology and Hepatology at Medical College of Georgia, Transplantation Medicine Fellow (Liver) at University of Pittsburgh Medical Center and a Hepatology Fellow at University of Miami School of Medicine/ Jackson Memorial Hospital Center for Liver Disease."
    },
    {
      img : uday,
      name: "Uday Reddy (USA)",
      details: "Uday Reddy, A visionary entrepreneur with a keen understanding of the market, is the Founder and CEO of YuppTV Inc. With over 14 years of experience in the field of telecommunications, Uday has over the course of his career worked with some globally renowned organizations. In 2006, he took up Yupp TV as a venture with a mission to make it simple and instant for broadcasters to deliver live TV, Catch-up TV, and Movies anytime and anywhere in the world to any internet-enabled device. While Uday is a successful entrepreneur, he is also an ardent philanthropist. His foundation, Brightlife is a Charity foundation enabling donors from various countries across the world to Sponsor education for the underprivileged kids living in remote parts of India. He is an Engineering Graduate of Electronics and Communications from Delhi College of Engineering, Delhi University, and has completed an Executive Management Program with the prestigious Kellogg School of Management."
    }
  ];


const PhotoBlock = ({img,name,position} : Block) =>{
    return(
        <>

                <div className="flex flex-col items-center justify-center">
                    <img  className="w-56 h-56" src={img}></img>
                    <h1 className="text-2xl text-blue-700  ">{name}</h1>
                    <h1 className="text-lg text-center ">{position}</h1>

                </div>
         
        </>
    )
}

const Advisory = ({img,name,details} :{ img:string,name:String,details:String }) =>{
    return(
        <>

                <div className="flex gap-6  items-center justify-center">
                    <img  src={img}></img>
                    <div className="">
                    <h1 className="text-2xl text-blue-700 mb-6 ">{name}</h1>
                    <h1 className="text-lg text-left ">{details}</h1>
                    </div>
                   

                </div>
                <hr></hr>
         
        </>
    )
}

const Leadership = () =>{


    return(
        <>

        <div className="flex flex-col gap-6 items-center justify-center">

            <h1 className="text-blue-700 font-bold text-3xl p-6">Our Leadership Team</h1>
            <div className="p-8  grid grid-cols-3 gap-6">

                {
                    boardMembers.map(member=>(
                        <PhotoBlock
                        img={member.img}
                        name={member.name}
                        position={member.position}
                        />
                    ))
                }

            </div>



        </div>

        <div className="flex flex-col gap-6 items-center justify-center">

<h1 className="text-blue-700 font-bold text-4xl p-6 mt-6">Advisory Board Members</h1>
<div className="p-8  flex flex-col gap-6">

{
                    adv.map(member=>(
                        <Advisory
                        img={member.img}
                        name={member.name}
                        details={member.details}
                        />
                    ))
                }

 

</div>



</div>


        </>
    )
};

export default Leadership