import React, { ReactNode, useState } from 'react'

import anil from '../../assets/CancerCare/Docters/anil_bhogaraju_3203.jpg'
import atish from '../../assets/CancerCare/Docters/atish_bakane.jpg'
import dodul from '../../assets/CancerCare/Docters/dodul_mondal.jpg'
import jayanthi from '../../assets/CancerCare/Docters/jayanthi_srinivasiah_4ebc.jpg'
import khaleel from '../../assets/CancerCare/Docters/khaleel_ashraf_0bc0.jpg'
import nilesh from '../../assets/CancerCare/Docters/nilesh_mehta_egd.jpg'
import revathi from '../../assets/CancerCare/Docters/revathi_angitapalli_c565.jpg'
import venu from '../../assets/CancerCare/Docters/venu_bathini.jpg'

import sin1 from '../../assets/CancerCare/sin1.png'
import sin2 from '../../assets/CancerCare/sin2.png'
import sin3 from '../../assets/CancerCare/sin3.png'

import working1 from '../../assets/CancerCare/working/how_it_works_1.gif'
import working2 from '../../assets/CancerCare/working/how_it_works_2.gif'
import working3 from '../../assets/CancerCare/working/how_it_works_3.gif'

import callback from '../../assets/CancerCare/request-callback.png'

import oncologyBanner from '../../assets/CancerCare/oncology_video_banner.png'

// Import Swiper React components
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import { SubmitHandler, useForm } from 'react-hook-form'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'; 

interface FAQ{
    question : string;
    answer : ReactNode;
}

interface FormValues{
    name : string;
    email : string;
    phone : string;
}

const CancerCare : React.FC = () => {

    const working = [
        {
            video : working1,
            name : "Step 1",
            description : "Login to your profile and book a consultation by filling in easy details."
        },
        {
            video : working2,
            name : "Step 2",
            description : "Upload medical records and complete the payment."
        },
        {
            video : working3,
            name : "Step 3",
            description : "Get medical advice from experienced doctors and download the prescription."
        },
    ]

    const cancer_faqs = [
        {
            question : "Why cancer care is needed?",
            answer : "Early detection and improved treatments for many different types of cancer have changed our understanding of this disease. The treatment is typically very challenging physically to patients, requiring combinations of surgery, radiation, chemotherapy, etc."
        },
        {
            question : "What are the different types of cancers?",
            answer : "Breast cancer, Prostate cancer, Melanoma, Colon cancer, lung cancer, Leukemia, and lymphoma, &, etc. are the different types of cancers."
        },
        {
            question : "Why is screening helpful for the early detection of cancer?",
            answer : "Screening helps identify health problems before the symptoms appear. Different types of screenings like MRI, mammograms, colonoscopy, etc. can help with early diagnosis and treatments."
        },
        {
            question : "What are the different treatments for cancer patients?",
            answer : "Chemotherapy, Immunotherapy, Radiation Therapy, and Surgery are some of the treatments available for cancer patients. Depending on the patient’s health, the healthcare provider plans the treatment."
        },
        {
            question : "Why is diet care important for cancer patients?",
            answer : "Many cancer patients can experience gastrointestinal problems. Diet care is a way to restore digestive health, prevent malnutrition, and satisfy dietary requirements during treatment. By keeping strong and nourished through proper nutrition, you will remain healthy for your cancer treatment."
        },
        {
            question : "Can i opt for a second medical opinion on my treatment plan?",
            answer : "If you start treatment and want a second opinion, you may be able to get one. It is best to look into getting a second opinion soon after a health issue is found. That said, it is almost never too late to get a second opinion, even if treatment has started. The benefits of seeing another doctor may include: Feeling reassured that different doctors agree on your diagnosis and treatment. Having different treatments to choose from when the second doctor offers you a different treatment. Consult with our cancer specialists and get an expert second medical opinion from doctors from anywhere in the world."
        },

    ]

    const docters = [
        {
            name : "Anil Bhogaraju",
            image : anil,
            field : "ONCOLOGY",
            country : "United States",
        },
        {
            name : "Atish Bakane",
            image : atish,
            field : "ONCOLOGY",
            country : "India",
        },
        {
            name : "Dodul Mondal",
            image : dodul,
            field : "ONCOLOGY",
            country : "India",
        },
        {
            name : "Jayanthi Srinivasiah",
            image : jayanthi,
            field : "ONCOLOGY",
            country : "United States",
        },
        {
            name : "Khaleel Ashraf",
            image : khaleel,
            field : "ONCOLOGY",
            country : "United States",
        },
        {
            name : "Nilesh Mehta",
            image : nilesh,
            field : "ONCOLOGY",
            country : "United States",
        },
        {
            name : "Revathi Angitapalli",
            image : revathi,
            field : "ONCOLOGY",
            country : "United States",
        },
        {
            name : "Venu Bathini",
            image : venu,
            field : "ONCOLOGY",
            country : "United States",
        }
    ]

    const faqs : FAQ[] = [
        {
            question : "Navigating Cancer Care",
            answer : <div className='px-10'>
                <h3 className='text-2xl font-bold my-4'>What should you look for?</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>Unexplained weight loss, typically, losing 10 pounds or more with no change in lifestyle is a sign that you talk with your physician.</li>
                    <li>Fever may be associated with cancer are if the onset of a fever happens mostly at night, you experience night sweats, and you don’t have any other signs of infection.</li>
                    <li>Fatigue associated with cancer differs from the tiredness you feel after a long day at work. Cancer uses your body’s nutrients to grow and advance in your body</li>
                    <li>A migraine or a headache that won’t go away even with treatment could be a symptom of a brain tumour. Persistent back pain could signify rectum, ovarian, or colon cancer.</li>
                    <li>It’s vital to perform self-examinations and be vigilant about your skin even if you practice sun safety. If you notice any suspicious moles or lesions, have them checked immediately.</li>
                </ul>
                <h3 className='text-2xl font-bold my-4'>Second Opinion</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>If you start treatment and want a second opinion, you may be able to get one. It is best to look into getting a second opinion soon after a health issue is found. That said, it is almost never too late to get a second opinion, even if treatment has started.</li>
                </ul>
                <h3 className='font-bold underline my-4'>The benefits of seeing another doctor may include:</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>Feeling reassured that different doctors agree on your diagnosis and treatment.</li>
                    <li>Having different treatments to choose from when the second doctor offers you a different treatment.</li>
                    <li>Consult with our cancer specialists and get the second opinion from doctors from anywhere in the world from the comfort of your home.</li>
                </ul>
                <h3 className='text-2xl font-bold my-4'>Find Emotional Help</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>Finding out that you have cancer can lead to you feeling helpless and worried. Sometimes it can make you feel depressed.</li>
                    <li>It might help to let friends and family know how you feel. They may also worry about your cancer and its treatment. Talking to them can be difficult. But if they know how you feel, they can listen and support you.</li>
                </ul>
            </div>
        },
        {
            question : "Coping with Cancer",
            answer : <div className='px-10'>

                <ul className='list-disc px-10 leading-relaxed'>
                    <li>You may have just learned that you have cancer. Or you may be in treatment, finishing treatment, or have a friend or family member with cancer.</li>
                    <li>The symptoms and side effects of the disease and its treatment may cause certain physical changes, but they can also affect the way you feel and how you live.</li>
                </ul>

                <h3 className='text-2xl font-bold my-4'>Adjusting to Cancer</h3>
                <ul>
                    <li>Information that helps you and your family face life’s changes from cancer includes talking with your doctors, talking to children, changes for the family, and information on cancer support groups.</li>
                </ul>

                <h3 className='text-2xl font-bold my-4'>Self-image and Sexuality</h3>
                <ul>
                    <li>Cancer and its treatment can affect how you look and feel about yourself and your body. There are steps you can take to cope with body changes and issues related to sexuality and intimacy.</li>
                </ul>

                <h3 className='text-2xl font-bold my-4'>Cancer Survivorship</h3>
                <ul>
                    <li>Becoming a cancer survivor happens at the time of diagnosis. When cancer treatment ends, the transition to a new normal can be hard. Learn about follow-up care, dealing with physical and emotional issues, late side effects, and coping and communicating about family issues.</li>
                </ul>
                
                <h3 className='text-2xl font-bold my-4'>Questions to ask your Doctor about Cancer</h3>
                <p>Find questions to ask your doctor about</p>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>Cancer screening</li>
                    <li>Your diagnosis</li>
                    <li>Your treatment</li>
                    <li>Treatment clinical trials</li>
                    <li>When you have finished treatment</li>
                    <li>Advanced cancer</li>
                    <li>End-stage cancer and hospice care</li>
                </ul>
            </div>
        },
        {
            question : "Manage Your Risk",
            answer : <div className='px-10'>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>Using any type of tobacco puts you on a collision course with cancer. Smoking has been linked to various types of cancer — including cancer of the lung, mouth, throat, larynx, pancreas, bladder, cervix and kidney. Avoiding tobacco — or deciding to stop using it — is an important part of cancer prevention.</li>
                    <li>Eat plenty of fruits and vegetables. Base your diet on fruits, vegetables and other foods from plant sources — such as whole grains and beans.Maintain a healthy weight. Eat lighter and leaner by choosing fewer high-calorie foods, including refined sugars and fat from animal sources.</li>
                    <li>Skin cancer is one of the most common kinds of cancer — and one of the most preventable. Avoid midday sun. Stay out of the sun between 10 a.m. and 4 p.m., when the sun's rays are strongest. Never skip sunscreen.</li>
                    <li>Regular self-exams and screenings for various types of cancers — such as cancer of the skin, colon, cervix and breast — can increase your chances of discovering cancer early, when treatment is most likely to be successful. Ask your doctor about the best cancer screening schedule for you. You can book your appointment with our experts and get solutions to your concerns.</li>
                </ul>
            </div>
        },
        {
            question : "Diet Care",
            answer : <div className='px-10'>
                <p className='text-center'>Eating a healthy and balanced diet can reduce the risk of cancer.</p>
                <p className='text-center'>This is partly because of the diet itself, but mostly because it can help you keep a healthy weight or lose weight.</p>

                <h3 className='text-2xl font-bold my-4'>Difficulties eating during cancer</h3>
                <p>Having cancer and cancer treatments can make eating difficult for several reasons:</p>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>If cancer is affecting your digestive system, it might cause symptoms like sickness, stomach pains and constipation. This might put you off eating.</li>
                    <li>You may feel tired, low or in pain from cancer or your treatments. This may affect your appetite.</li>
                    <li>You may find you don’t have the energy for buying and preparing food.</li>
                    <li>Treatments may cause side-effects such as feeling sick, mouth ulcers and a dry or sore mouth. These symptoms can make it hard to eat and drink as much as you need to.</li>
                    <li>Chemotherapy can change your sense of taste and smell, which might put you off eating.</li>
                    <li>Radiotherapy and chemotherapy can cause digestive problems such as diarrhoea or constipation. You may need to change your diet to help control this.</li>
                </ul>

                <h3 className='text-2xl font-bold my-4'>Diet for cancer patients</h3>
                <ul>
                    <li>For most people with cancer, there isn’t a particular diet you need to follow. In general, you should try to maintain a healthy, balanced diet, with food from all the main food groups.</li>
                </ul>

                <h3 className='text-2xl font-bold my-4'>Foods for cancer patients to avoid</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>If you’re losing too much weight, try to avoid foods that provide little energy or nutrients. These include low-calorie drinks, salads and clear soups. These fill you up without giving your body the calories and protein it needs.</li>
                    <li>You might find you need to avoid certain foods because of side-effects you’re having during treatment. If you have a sore mouth, you might want to avoid spicy foods. If your immunity is low (for example, because you’ve had high-dose chemotherapy), you may need to avoid foods that could cause infection. These include cheeses that are mould-ripened or made from unpasteurised milk, raw meat and seafood, and runny eggs. Your nurse will discuss this with you.</li>
                    <li>Check with your doctor or nurse before drinking alcohol when you’re having treatment for cancer. You’ll usually be able to drink small amounts of alcohol with most types of chemotherapy. But alcohol can interact with certain chemotherapy drugs and make you feel unwell. It can also irritate any sores in your mouth caused by cancer treatment.</li>
                </ul>


                <h3 className='text-2xl font-bold underline my-4'>Tips for increasing your calorie and protein intake include:</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>Switching from semi-skimmed or lower-fat milk, cream, cheese, yoghurts and spreads to full-fat options.</li>
                    <li>Topping vegetables with butter or cheese or roasting them in olive oil.</li>
                    <li>Adding full-fat mayonnaise to sandwiches.</li>
                    <li>Having milky drinks and creamy desserts.</li>
                    <li>Adding dried fruits, nuts and seeds to breakfast cereals</li>
                    <li>Having snacks that are high in calories and protein – for example, sausage rolls, cheese and crackers, nuts and seeds, fromage frais, hard-boiled eggs and houmous.</li>
                    <li>Making sure to include a form of protein (meat, fish, eggs, beans, dairy or meat alternative) at every meal.</li>
                    <li>If you’re struggling to keep to a healthy weight, talk to your doctor or nurse. They can put you in touch with a dietitian. For more information, see our section: Getting help with your diet.</li>
                </ul>
            </div>
        },
        {
            question : "Family Care",
            answer : <div className='px-10'>
                <p className='text-center'>When someone has cancer, it can affect the whole family. All families are different, and each family responds differently when someone is diagnosed with cancer.</p>

                <h3 className='text-2xl font-bold my-4'>Changes in your role</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>When someone in your family is diagnosed with cancer, the role you have and your relationship with the person may change.</li>
                    <li>During and after treatment, the person with cancer may not have the energy to do things they did before. You and other family members may have to do those things instead. Or you may have to adjust to new roles. These changes may mean you have less time for other things, such as:
                        <ol className='list-decimal leading-relaxed px-10'>
                            <li>Social activities</li>
                            <li>Work</li>
                            <li>Spending time as a family.</li>
                        </ol>
                    </li>
                    <li>If life is becoming very busy, it may help to write down a list of priorities. As a family, you can plan what things are most important. Try to split any tasks between family members, so you can support each other. It is important for the person with cancer to have a role too. They may want to support other family members, as well as getting support themselves. You might find using a communication plan helps organise everyone and prevent confusion.</li>
                </ul>


                <h3 className='text-2xl font-bold my-4'>If your partner has cancer</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>If your parent has cancer, you may find yourself looking after them for the first time. For example, you might help them wash or get dressed.</li>
                    <li>Having to care for your parent in ways you have not done before might cause lots of different emotions. For example, you or your parent may feel:
                        <ol className='list-decimal leading-relaxed px-10'>
                            <li>Anxious</li>
                            <li>Embarrassed</li>
                            <li>Resentful.</li>
                        </ol>
                    </li>
                    <li>It can help to share responsibility for looking after your parent with siblings or other family members. This can sometimes cause arguments about who does what or who makes certain decisions. It can help to split the responsibilities clearly, so each person knows what to do.</li>
                </ul>


                <h3 className='text-2xl font-bold my-4'>How you can help with treatment decisions?</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>The person with cancer may want to talk to you about their treatment options. Their doctor may have spoken to them about different options.</li>
                    <li>Talking to them about these choices can help you understand their thoughts and feelings. But any decisions about treatment are theirs.</li>
                    <li>Having information may make you or the person with cancer feel more in control. It is important to remember that your information needs might be different from theirs. Some people may want to:
                        <ol className='list-decimal leading-relaxed px-10'>
                            <li>Know as much as possible about the cancer and treatment.</li>
                            <li>Only want to know enough to make decisions about treatment and how to cope with it.</li>
                            <li>Choose not to know very much at all.</li>
                        </ol>
                    </li>
                    <li>It can be useful to talk about how you can manage this. It is best to let the person with cancer find out information when they are ready.</li>
                </ul>
            </div>
        },
        {
            question : "Cancer Pain Management",
            answer : <div className='px-10'>
                <h3 className='text-2xl font-bold my-4'>Painkillers</h3>
                <ul>
                    <li>There are many different types of painkillers. The type you need depends on the type of pain you have. You might need one or more type to help relieve your pain.</li>
                    <li>Find out about taking painkillers and other drugs for pain control from your doctor and get information about possible side effects.</li>
                </ul>

                <h3 className='text-2xl font-bold my-4'>Radiotherapy</h3>
                <ul>
                    <li>Radiotherapy uses high energy rays to shrink a cancer and can be used to reduce pain and other symptoms. It is often used to control pain when a cancer has spread to the bones. This is called secondary bone cancer. You usually only need 1 to 5 sessions of radiotherapy.</li>
                </ul>

                <h3 className='text-2xl font-bold my-4'>Surgery</h3>
                <ul>
                    <li>Surgery can help with pain control by removing part or all of a tumour to relieve pressure on organs or a nerve. It can also help by repairing or strengthening a damaged bone when cancer has spread to the bones.</li>
                </ul>

                <h3 className='text-2xl font-bold my-4'>Nerve Block</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>A nerve block is a treatment that blocks nerves from sending messages to the brain. It is a way of switching off a nerve to stop it causing pain. If you have pain that is difficult to treat, your doctor might suggest a nerve block.</li>
                    <li>Nerve blocks do not usually have many side effects. Some nerve blocks may cause low blood pressure or diarrhoea. But this usually improves after a few days.</li>
                </ul>
            </div>
        },
        {
            question : "Cancer Risk Management",
            answer : <div className='px-10'>
            <h3 className='text-2xl font-bold my-4'>Genetic changes and cancer</h3>
            <ul>
                <li>Some cells in your body develop gene mutations during your lifetime. These are called acquired mutations. It is also possible to have a gene mutation because it passed from one of your parents to you. This is called an inherited mutation.</li>
                <li>Eventually, gene mutations in a cell may mean the cell stops working normally. Cancer develops when cells like this can multiply in an abnormal way and grow out of control.</li>
            </ul>

            <h3 className='text-2xl font-bold my-4'>Does cancer run in families?</h3>
            <ul>
                <li>Some inherited mutations make a person more likely to develop certain types of cancer. This means a gene mutation that is linked to cancer may run in a family.
                    <p>If you inherit a gene mutation like this from one of your parents , it does not mean you have cancer. More damage (acquired mutations) still needs to happen before a cancer can develop. The inherited gene mutation may allow this damage to build up faster.</p>
                </li>
                <li>
                    <p>You might hear different names for the inherited mutations that make cancer more likely. These include:</p>
                    <ol className='list-decimal leading-relaxed px-10'>
                        <li>Inherited cancer genes</li>
                        <li>Cancer predisposition genes</li>
                        <li>Cancer susceptibility genes.</li>
                    </ol>
                </li>
            </ul>

            <h3 className='text-2xl font-bold my-4'>Family history and cancer risk</h3>
            <p>If a family is affected by a gene mutation, there may be a pattern of cancers diagnosed in that family. For example, there may be:</p>
            <ul>
                <li>Several people who have the same types of cancer.</li>
                <li>People who were younger than usual when they were diagnosed.</li>
                <li>Someone who has had more than one primary cancer. This means they have had cancer twice, not that one cancer has spread to another part of the body.</li>
                <li>A family history of certain cancers and the family is from an Eastern European or Ashkenazi Jewish (Eastern European Jewish) background. Some inherited cancer genes are more common in these ethnic groups.</li>
            </ul>

            <h3 className='text-2xl font-bold my-4'>Managing genetic cancer risk</h3>
            <ol className='list-decimal leading-relaxed px-10'>
                <li><p className='font-bold'>Cancer screening tests</p>
                    <p>You may be offered screening tests to find or prevent a type of cancer developing. Screening looks for early signs of cancer or for changes that happen before a cancer develops. There are different screening tests for different types of cancer.</p>
                </li>
                <li><p className='font-bold'>Risk-reducing surgery</p>
                    <p>Some people with a high cancer risk decide to have risk-reducing surgery. This means removing the tissues that are at risk of getting cancer. For example, risk-reducing breast surgery means removing healthy breast tissue to reduce your risk of breast cancer. This type of surgery is usually only offered to people with a very high risk, such as people who have inherited certain cancer gene mutations. Surgery greatly reduces the risk of cancer, but it does not get rid of it completely.</p>
                </li>
                <li><p className='font-bold'>Risk-reducing drugs</p>
                    <p>Certain drugs may be used to reduce the risk of certain types of cancer. Some women who have a high risk of breast cancer may take anti-oestrogen tablets to reduce their risk. People with Lynch syndrome may take aspirin to reduce their risk of bowel cancer developing. Risk-reducing drugs may cause side effects and occasionally may cause serious complications. It is important to discuss the benefits and disadvantages with your doctor.</p>
                </li>
                <li><p className='font-bold'>Clinical trials</p>
                    <p>If you know you have an increased risk of getting cancer, you may be able to join a clinical trial. These look into genetic causes of cancer or ways of preventing it. Taking part in a clinical trial is completely up to you. Talk to our specialists for more information.</p>
                </li>
                <li><p className='font-bold'>Healthy lifestyle</p>
                    <p>There is not always clear evidence about how a healthy lifestyle affects cancer risk in people with a family history of cancer. But there is strong evidence it improves your general health and well-being. Our board certified specialist specialist can give you more information about healthy living.</p>
                </li>
                <li><p className='font-bold'>Talking to children</p>
                    <p>Most inherited cancer genes do not increase the risk of cancer until adulthood. Usually, children in families with these types of cancer gene wait until they are older to think about genetic testing. This can make it harder for parents to decide when to tell them there is an inherited cancer gene in the family.</p>
                </li>
            </ol>
        </div>
        },
        {
            question : "Cancer Screening",
            answer : <div className='px-10'>
                <p className='text-center'>Screening helps find some cancers early so that they can be treated as soon as possible. It can also find changes in some cells before they become cancerous.</p>

                <h3 className='text-2xl font-bold my-4'>Breast Screening</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>Breast cancer screening is a way of finding breast cancers early, when they are small. When breast cancer is diagnosed early, less treatment may be needed, and treatment is more likely to be effective.</li>
                    <li>The first stage of breast screening is a breast x-ray (mammogram) of each breast. About 96 out of every 100 women who go for screening (96%) have a normal result.
                    </li>
                </ul>


                <h3 className='text-2xl font-bold my-4'>Cervical Screening</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>Cervical screening is a way of preventing cervical cancer (cancer of the cervix). It uses tests to find abnormal changes in the cells of the cervix.</li>
                    <li>The first part of cervical screening is to have a smear test. This is also called the cervical screening test.
                    </li>
                    <li>For more information about having a smear test, consult eglobaldoctors specialist now
                    </li>
                </ul>


                <h3 className='text-2xl font-bold my-4'>Colon Cancer Screening:</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>Bowel screening aims to find bowel cancer early, before symptoms develop.</li>
                    <li>Bowel cancer is most common in people in their 60s and 70s. More than 95 out of 100 bowel cancers (over 95%) happen in people over 50.
                    </li>
                    <li>Most bowel cancers develop in the large bowel.</li>
                    <li>Bowel cancer often starts from small, non-cancerous growths called polyps. If doctors find polyps in the bowel during screening, they can remove them. This reduces the risk of bowel cancer developing</li>
                    <li>
                        <p>The main tests used in bowel cancer screening are:</p>
                        <ol className='list-decimal leading-relaxed px-10'>
                            <li>The FOB (faecal occult blood) test.</li>
                            <li>The FIT (faecal immuno-chemical test).</li>
                            <li>The bowel scope test.</li>
                        </ol>
                    </li>
                </ul>


                <h3 className='text-2xl font-bold my-4'>Lung Cancer Screening:</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>Low-dose helical computed tomography, a type of CT scan, has been shown to reduce lung cancer deaths among heavy smokers.</li>
                    <li>Expert groups generally recommend screening of some current or former heavy smokers at ages 50 to 80.
                    </li>
                </ul>


                <h3 className='text-2xl font-bold my-4'>Other screening tests include</h3>
                <ul className='list-disc px-10 leading-relaxed'>
                    <li>Alpha-fetoprotein blood test</li>
                    <li>Breast MRI</li>
                    <li>CA-125 test</li>
                    <li>Clinical breast exams and regular breast self-exams</li>
                    <li>Multicancer early detection tests</li>
                    <li>PSA test</li>
                </ul>

                <p className='text-center font-bold'>For more information consult our specialist</p>
            </div>
        },
    ]

    const [isOpenIndex, setIsOpenIndex] = useState<null | number>(null);

    const toggleOpen = (index : number) => {
        setIsOpenIndex(isOpenIndex === index ? null : index);
    }


    const {register, handleSubmit, setValue, formState} = useForm<FormValues>();
    const {errors} = formState;

    const onSubmit : SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

  return (
    <div>
        <div className='relative flex flex-col h-[80vh]'>
            <div className='bg-cancer-care-background absolute inset-0 bg-cover bg-no-repeat bg-center z-0'></div>

            <div className='z-10 flex justify-end h-full border-2'>
                <div className='px-32 h-full flex flex-col items-center justify-center'>
                    <h2 className='text-6xl font-bold'>Raising the Hope
                    of Life.</h2>
                    <h3 className='text-3xl font-bold my-10'>Let's Fight Cancer Together.</h3>
                    <div className='text-white w-fit px-16 py-3 rounded-2xl text-xl bg-gradient-to-r from-[#34539c] from-10% to-[#022A8B] to-90%'>
                        Book an Appointment
                    </div>
                </div>
            </div>
        </div>

        {/* FAQ */}
        <div className='flex flex-col justify-center text-xl my-10 py-10'>
            <div className='flex justify-center items-center flex-col'>
                <h2 className='text-4xl font-bold text-center w-[30vw] my-2'>Explore our services</h2>
                <div className='px-30 py-1 bg-[#B3E7FE] w-72 rounded-xl'></div>
            </div>
            <div className='my-10 flex flex-col mx-20'>

                {
                    faqs.map((faq, index) => (

                        <div key={index} onClick={() => toggleOpen(index)} className='border-2 border-slate-600 rounded-xl mx-5 cursor-pointer p-3 transition duration-500 ease-in-out my-3'>

                        <div className='flex justify-between'>
                            <h3 className='hover:text-[#00327A] text-2xl transition-all duration-100 ease-in-out font-semibold'>{faq.question}</h3>
                            
                            {isOpenIndex === index ? (
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
                            isOpenIndex === index && (
                                <div className='mt-5 transition duration-500 ease-in-out'>{faq.answer}</div>
                            )
                        }
                        </div>
                    ))
                }

            </div>
        </div>

        {/* Featured Docters */}
        <div className='flex flex-col justify-center text-xl my-10 py-10'>
            <div className='flex justify-center items-center flex-col'>
                <h2 className='text-4xl font-bold text-center w-[30vw] my-2'>Featured Docters</h2>
                <div className='px-30 py-1 bg-[#B3E7FE] w-72 rounded-xl'></div>
            </div>
            <div className='grid grid-cols-5 my-3 mx-10 justify-center items-center'>
                {
                    docters.map((docter, index) => (
                        <div key={index} className='flex flex-col gap-2 mx-2 my-5 justify-center items-center shadow-md shadow-gray-500 p-2'>
                            <img src={docter.image} className='w-60 h-60' alt={docter.name} />
                            <p className='text-xl'>{docter.name}</p>
                            <p className='text-xl'>{docter.field}</p>
                            <p className='text-xl'>{docter.country}</p>
                        </div>
                    ))
                }
            </div>
        </div>

        {/* Strength in Numbers */}
        <div className='bg-[#1850A0] text-white py-5'>
            <h3 className='text-4xl text-center'>Strength in Numbers</h3>
            <div className='flex justify-evenly my-10'>
                <div className='flex flex-col items-center text-2xl font-semibold'>
                    <img src={sin1} className='w-20 h-20 my-2' alt="" />
                    <h2 className='font-bold'>400+</h2>
                    <h3>Docters</h3>
                </div>
                <div className='flex flex-col items-center text-2xl font-semibold'>
                    <img src={sin2} className='w-20 h-20 my-2' alt="" />
                    <h2 className='font-bold'>40+</h2>
                    <h3>Services</h3>
                </div>
                <div className='flex flex-col items-center text-2xl font-semibold'>
                    <img src={sin3} className='w-20 h-20 my-2' alt="" />
                    <h2 className='font-bold'>8+</h2>
                    <h3>Countries</h3>
                </div>
            </div>
        </div>

        {/* How to consult a Docter */}

        <div className='flex flex-col justify-center text-xl my-10 py-10'>
            <div className='flex justify-center items-center flex-col'>
                <h2 className='text-4xl font-bold text-center w-[30vw] my-2'>How To Consult a Docter</h2>
                <div className='px-30 py-1 bg-[#B3E7FE] w-72 rounded-xl'></div>
            </div>
            <div className='w-full flex justify-center'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                >
                {working.map((work, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex justify-center gap-10 my-10'>
                            <div>
                                <img src={work.video} className='w-fit h-[50vh]' alt={work.name} />
                            </div>
                            <div className='flex flex-col justify-center items-center w-[30vw]'>
                                <h3 className='text-3xl text-[#1850A0] font-bold'>{work.name}</h3>
                                <p className='text-xl font-normal my-5 text-center'>{work.description}</p>
                                <div className='bg-[#1850A0] text-white font-bold w-fit rounded-2xl py-2 px-5'>
                                    Get Started
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>

        {/* Videos by Oncologists */}
        {/* FAQ */}
        <div className='flex flex-col justify-center text-xl my-10 py-10'>
            <div className='flex justify-center items-center flex-col'>
                <h2 className='text-4xl font-bold text-center w-[30vw] my-2'>Cancer Care FAQ's</h2>
                <div className='px-30 py-1 bg-[#B3E7FE] w-72 rounded-xl'></div>
            </div>
            <div className='my-10 flex flex-col mx-20'>

                {
                    cancer_faqs.map((faq, index) => (

                        <div key={index} onClick={() => toggleOpen(index)} className='border-2 border-slate-600 rounded-xl mx-5 cursor-pointer p-3 transition duration-500 ease-in-out my-3'>

                        <div className='flex justify-between'>
                            <h3 className='hover:text-[#00327A] text-2xl transition-all duration-100 ease-in-out font-semibold'>{faq.question}</h3>
                            
                            {isOpenIndex === index ? (
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
                            isOpenIndex === index && (
                                <div className='mt-5 transition duration-500 ease-in-out'>{faq.answer}</div>
                            )
                        }
                        </div>
                    ))
                }

            </div>
        </div>

        {/* Request Callback */}
        <div className='flex justify-evenly'>
            <div>
                <h3 className='text-4xl font-bold'>Request a Call-Back</h3>
                <p className='text-2xl font-normal'>Provide us with your contact details we will reach back to you soon</p>
                <form className='flex flex-col my-10 w-full text-xl' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder='Name' className='border-2 border-slate-300 rounded-xl py-2 mx-5 my-2 px-5 placeholder:text-gray-500' {...register('name', {
                        required: 'Name is required!',
                    })} />
                    {errors.name && <p className='text-red-500 w-full mb-1 mx-5'>{errors.name.message}</p>}
                    <input type="email" placeholder='Email Id' className='border-2 border-slate-300 rounded-xl py-2 mx-5 my-2 px-5 placeholder:text-gray-500' {...register('email', {
                        required: 'Email Id is required!',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Enter a valid email address"
                        }
                    })} />
                    {errors.email && <p className='text-red-500 w-full mb-1 mx-5'>{errors.email.message}</p>}
                    <div className='mx-5 my-2'>
                        <PhoneInput
                            country={'in'}
                            inputProps={{
                                name: 'phone',
                                className: 'border-2 border-slate-300 rounded-xl py-2 px-16 placeholder:text-gray-500 w-full',
                                required: true
                            }}
                            onChange={phone => setValue('phone', phone)}
                            containerClass='w-full'
                            buttonStyle={{
                                border: '2px solid #CBD5E0',
                                borderRadius: '0.75rem',
                                padding: '0.5rem',
                                width: 'px',
                                height: '47px'
                              }}
                        />
                        {errors.phone && <p className='text-red-500 w-full mb-1'>{errors.phone.message}</p>}
                    </div>
                    <div className='text-white w-fit px-14 py-3 rounded-2xl text-xl bg-gradient-to-r from-[#34539c] from-10% to-[#022A8B] to-90% my-4'>
                        Submit
                    </div>
                </form>
            </div>
            <div>
                <img src={callback} className='w-fit h-96' alt="request-callback" />
            </div>
        </div>

    </div>
  )
}

export default CancerCare