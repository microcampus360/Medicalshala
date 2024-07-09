import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './components/IndexPage';
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
      </Route>
    </Routes>
  );
}

export default App;
