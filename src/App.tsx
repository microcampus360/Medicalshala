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

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path='/primary' element={<Primary/>}/>
        <Route path='/expert' element={<Expert/>}/>
        <Route path='/multi' element={<Multi/>}/>
        <Route path='/diet' element={<DietPrograms/>}/>
        <Route path='/medicalCoun' element={<MedicalCounselling/>}/>
        <Route path='/equipmentSupport' element={<Support/>}/>
        <Route path='/covid19' element={<Covid19/>}/>
        <Route path='/eglobalHomecare' element={<HomeCare/>}/>
        <Route path='/eglobalDiagnostics' element={<Diagnostics/>}/>
        <Route path='/eglobalPharmacy' element={<GlobalPharmacy/>}/>
      </Route>
    </Routes>
  );
}

export default App;
