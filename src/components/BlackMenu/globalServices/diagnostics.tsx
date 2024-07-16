import React from 'react';


import apolloDiagnosticsLogo from '../../../assets/BlackMenu/globalServices/homecare/diag.png';

const Diagnostics: React.FC = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">eGlobal Diagnostics</h2>
      <h3 className="text-xl font-semibold mb-4 ">eGlobal-Diagnostics for India</h3>
      <div className="bg-white shadow-lg border border-black rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
        <img src={apolloDiagnosticsLogo} alt="Apollo Diagnostics" className="w-1/4 h-auto" />
        <div className="ml-6">
          <h4 className="text-2xl font-semibold">eGlobal-Apollo Diagnostics</h4>
          <p className="mt-2 text-gray-700">
            Experience seamless healthcare at your fingertips with eGlobal Diagnostics. Say goodbye to waiting rooms, access your reports online and offline, plus avail an incredible <strong>15% discount!</strong>
          </p>
        </div>
        <div className="ml-6 flex flex-col items-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4">Visit</button>
          <a href="#" className="text-blue-500">Explore Pricing &gt;</a>
        </div>
      </div>
      <p className="text-gray-500 mt-4">
        Note: Upon completion of your consultation, you will receive a flat 15% OFF code to order medicines.
      </p>
    </div>
  );
};

export default Diagnostics;