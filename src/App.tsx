import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './components/IndexPage';
import Primary from './components/BlackMenu/Consult/PrimaryConsultation';
import Expert from './components/BlackMenu/Consult/ExpertSecond';
import Multi from './components/BlackMenu/Consult/MultiSpeciality';
import DietPrograms from './components/BlackMenu/Consult/DietPrograms/dietPrograms';
import MedicalCounselling from './components/BlackMenu/otherServices/FreeMedicalCounselling';
import Support from './components/BlackMenu/otherServices/Support';
import Covid19 from './components/BlackMenu/otherServices/covid19';
import HomeCare from './components/BlackMenu/globalServices/homecare';
import Diagnostics from './components/BlackMenu/globalServices/diagnostics';
import GlobalPharmacy from './components/BlackMenu/globalServices/globalPharmacy';
import AyurvedicCare from './components/BlackMenu/AyurvedicCare';
import WellnessPlans from './components/BlackMenu/WellnessPlans';
import CancerCare from './components/BlackMenu/CancerCare';

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
      </Route>
    </Routes>
  );
}

export default App;
