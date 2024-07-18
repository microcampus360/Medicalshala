import React from "react";



const articles = [
    {
      date: "January 11, 2023",
      link:"https://www.thehindu.com/news/national/telangana/nri-doctors-to-connect-with-indian-specialists-to-reach-out-patients-across-the-world/article66365093.ece",
      heading: "NRI doctors to connect with Indian specialists to reach out patients across the world",
      details: "After showing the power of technology in reaching out to patients across the world during the pandemic, the unique initiative of eGlobaldoctors forum is now planning to connect Indian doctors abroad with those in India, and combinedly with patients in need of expert advice. A group of doctors from the US and the UK connected with patients in India during the pandemic through mobiles and video technology resources offering them medical advice and help in the most distressed times. Now, they plan to expand that network with the inclusion of highly-trained specialists and bring them on a single platform to reach out to any patient across the world. “eGlobalDoctors is a dream project of physicians driven by the common goal of serving the community from the homeland which supported them and is instrumental in the success they achieved,” said Vinod Elete, a Sydney-based doctor and managing director of eGlobalDoctors."
    },
    {
      date: "September 12, 2022",
      link:"https://www.medicalnewstoday.com/articles/how-daytime-eating-benefits-mental-health",
      heading: "How daytime eating benefits the mental health of shift workers",
      details: "Researchers recently investigated the effects of meal timing on mood vulnerability in night shift workers. They found that daytime eating only, as opposed to daytime and nighttime eating, could significantly improve mood among night workers. However, they note that further studies are still needed to confirm their results. Shift workers often experience misalignment between their 24-hour body clock — known as the circadian clock — and daily environmental and behavioral cycles due to irregular work hours. Studies show that circadian misalignment has a negative impact on mood and sleep."
    },
    {
      date: "September 8, 2022",
      link:"https://www.medicalnewstoday.com/articles/how-daytime-eating-benefits-mental-health",
      heading: "New knowledge about the link between infection during pregnancy and autism",
      details: "Infections in pregnant women have been linked to an increased risk of neurodevelopmental conditions, such as autism, in the child later in life. But it does not seem to to be the infections themselves that cause autism, researchers from Karolinska Institutet in Sweden show in a study published in The Lancet Psychiatry. Our results can reassure expectant parents by indicating that infections during pregnancy may not pose as great a risk to the baby's brain as previously thought says Håkan Karlsson, researcher at the Department of Neuroscience at Karolinska Institutet and the study’s senior author."
    },
    {
      date: "June 7, 2022",
      link:"https://www.npr.org/2022/06/07/1103545361/cancer-drug-experimental-rectal-chemotherapy-surgery-treatment-immunotherapy",
      heading: "This experimental drug could change the field of cancer research",
      details: "A tiny group of people with rectal cancer just experienced something of a scientific miracle: their cancer simply vanished after an experimental treatment. In a very small trial done by doctors at New York's Memorial Sloan Kettering Cancer Center, patients took a drug called dostarlimab for six months. The trial resulted in every single one of their tumors disappearing. The trial group included just 18 people, and there's still more to be learned about how the treatment worked. But some scientists say these kinds of results have never been seen."
    },
    {
      date: "June 21, 2022",
      link:"https://www.prnewswire.com/news-releases/congressmen-gerry-connolly-and-raja-krishnamoorthi-applaud-sewa-internationals-work-301571148.html",
      heading: "Congressmen Gerry Connolly and Raja Krishnamoorthi Applaud Sewa International's Work",
      details: "Congressmen Gerald E. Connolly of Virginia and Raja Krishnamoorthi of Illinois have recognized, on the floor of the US Congress, Sewa International's service to underserved communities, and for coordinating development projects around the world. Speaking at the recently concluded session of the 117th Congress, Representative Connolly of Virginia's 11th District, said Sewa workers take inspiration from the Hindu principles of Vasudhaiva Kutumbakam -- meaning 'the whole world is one family' - and Sarve Bhavantu Sukhinah – meaning 'may all be happy' to serve humanity in distress."
    },
    {
      date: "May 2, 2022",
      link:"https://www.healthcareitnews.com/news/telehealth-can-play-vital-role-reducing-carbon-emissions",
      heading: "Telehealth can play a vital role in reducing carbon emissions",
      details: "Researchers from the Ohio State University Wexner Medical Center found that telehealth appointments saved 2.2 million gallons of gas for patients since the start of the pandemic. Telehealth's potential to bridge the services gap for people without ready transportation access is well-documented. Less explored, however, is virtual care's possible role in reducing carbon emissions, specifically by allowing patients to connect with providers without relying on a car. The Ohio State University Wexner Medical Center built a dashboard to estimate the environmental impact of the medical facility's telehealth offerings."
    },
    {
      date: "May 1, 2022",
      link:"https://www.medicalnewstoday.com/articles/synesthesia-in-a-congenitally-blind-individual",
      heading: "Synesthesia in a congenitally blind individual.",
      details: "Researchers examined the first-ever reported case of a congenitally blind person with synesthesia. They say their findings shed light on the role of vision in the condition. They say further research is needed to understand the underlying mechanisms of synesthesia. Synesthesia is a neurological condition in which stimulation of one sense leads to an experience in another, such as seeing colors when listening to music. Some cases of synaesthesia occur after brain damage, drug use, or sensory loss. However, many report symptoms for as long as they can remember."
    },
    {
      date: "May 1, 2021",
      link:"https://www.youtube.com/watch?v=gqiuKVbppuE",
      heading: "eGlobalDoctors, a Tele-Health Platform used by American Doctors providing Free COVID-19 Counselling to India Patients.",
      details: "In an exclusive Live Interview with NDTV India News Channel on Sunday May 9th, The CEO Mr. Krish Manchala said “It is been just 4-5 days our Tele Health product eGlobalDoctors was launched with free COVID-19 Counselling to Indian Patients. We are seeing 90,000 Indian citizens have visited our website www.eglobaldoctors.com and that’s a really large number from a health care perspective. With these numbers we can interpret that there are a lot of patients in India are going through COVID crisis."
    },
    {
      date: "October 26, 2021",
      link:"https://www.livemint.com/news/india/india-to-develop-container-based-mobile-hospitals-health-minister-11635249167639.html",
      heading: "India to develop container-based mobile hospitals: Health minister",
      details: "Union minister of health and family welfare Mansukh Mandaviya has said that the ministry was working on a ‘saturation approach’ with block, district, state and national levels seamlessly connected for affordable and quality healthcare. Union health minister Mansukh Mandaviya has said that the country will develop container-based hospitals that can be moved by rail or air to address health emergencies. In a first in Asia, India will develop container-based mobile hospitals that can be moved by rail or air to address a health emergency, Union minister of health and family welfare Mansukh Mandaviya said on Tuesday."
    },
    {
      date: "October 25, 2021",
      link:"https://www.usatoday.com/story/news/health/2021/10/25/memory-loss-long-term-covid-symptoms/6168210001/",
      heading: "Memory loss and 'brain fog' may be side effects of COVID-19, new study shows",
      details: "Long-term COVID-19 side effects could include memory loss and other cognitive dysfunctions commonly labeled as brain fog, according to a study released that examined 740 patients in the Mount Sinai Health System. The study, which was published Friday in the peer-reviewed medical journal JAMA Network Open, analyzed patients who contracted COVID-19, not people who only received the COVID-19 vaccine. The most common cognitive deficits the study identified were memory encoding and memory recall, which showed up in 24% and 23% of the participants, respectively."
    }
  ];
  
  const News = () => {
    return (
      <div className="px-32">
        <h1 className="text-blue-700 font-bold text-center text-3xl mb-10 mt-10">Our News</h1>
        {articles.map((article, index) => (
          <div key={index} className="mb-8 border-b flex gap-8 pb-4">
            <div className="text-gray-500 w-full">{article.date}</div>
            <div className="mt-2">
              <h2 className="text-lg font-bold">{article.heading}</h2>
              <p className="text-sm mt-2 text-gray-700">{article.details}</p>
            </div>
            <a href={article.link} className="w-full underline mt-4 inline-block">Learn More</a>
          </div>
        ))}
      </div>
    );
  };
  
  export default News;