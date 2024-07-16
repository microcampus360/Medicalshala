import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './components/IndexPage';
import Primary from './components/BlackMenu/Consult/PrimaryConsultation';
import Expert from './components/BlackMenu/Consult/ExpertSecond';
import Multi from './components/BlackMenu/Consult/MultiSpeciality';
import DietPrograms from './components/BlackMenu/Consult/DietPrograms/DietPrograms';
import MedicalCounselling from './components/BlackMenu/OtherServices/FreeMedicalCounselling';
import Support from './components/BlackMenu/OtherServices/Support';
import Covid19 from './components/BlackMenu/OtherServices/Covid19';
import HomeCare from './components/BlackMenu/GlobalServices/Homecare';
import Diagnostics from './components/BlackMenu/GlobalServices/Diagnostics';
import GlobalPharmacy from './components/BlackMenu/GlobalServices/GlobalPharmacy';
import AyurvedicCare from './components/BlackMenu/AyurvedicCare';
import WellnessPlans from './components/BlackMenu/WellnessPlans';
import CancerCare from './components/BlackMenu/CancerCare';
import Pricing from './components/MainMenu/MoreOptions/Pricing';
import PatientVids from './components/MainMenu/MoreOptions/PatientVideos';
import News from './components/MainMenu/MoreOptions/News';
import Leadership from './components/MainMenu/MoreOptions/Leadership';
import Partner from './components/MainMenu/MoreOptions/Partner';
import Doctors from './components/MainMenu/MoreOptions/Doctors';
import LognRegister from './components/LognRegister';
import RegistrationFormPatient from './components/RegisterPatient';
import PatientLogin from './components/PatientLogin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path='/ayurvedic-care' element={<AyurvedicCare/>}/>
        <Route path='/wellness-plans' element={<WellnessPlans/>}/>
        <Route path='/cancer-care' element={<CancerCare/>}/>
        <Route path='/primary-consultation-telehealth-consultation' element={<Primary/>}/>
        <Route path='/expert-second-medical-opinion' element={<Expert/>}/>
        <Route path='/multispecialty-telehealth-consultation' element={<Multi/>}/>
        <Route path='/diet-programs' element={<DietPrograms/>}/>
        <Route path='/fmc' element={<MedicalCounselling/>}/>
        <Route path='/equipmentsupport' element={<Support/>}/>
        <Route path='/covid-19' element={<Covid19/>}/>
        <Route path='/eglobal-homecare' element={<HomeCare/>}/>
        <Route path='/eglobal-diagnostics' element={<Diagnostics/>}/>
        <Route path='/eglobal-pharmacy' element={<GlobalPharmacy/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/patient-vids' element={<PatientVids/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/leadership' element={<Leadership/>}/>
        <Route path='/partner' element={<Partner/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/login' element={<LognRegister/>}/>
        <Route path='/patient-register' element={<RegistrationFormPatient/>}/>
        <Route path='/patient-login' element={<PatientLogin/>}/>
      </Route>
    </Routes>
  );
}

export default App;
