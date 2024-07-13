import React from 'react'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/Header/menu-icon.svg'
import { Link } from 'react-router-dom';
const Index = () => {
  return (
    <div className='sticky top-0 bg-white z-50'>
      <div className='flex justify-between items-center w-full'>
        <div>
          <img src={logo} className='h-24' alt="" />
        </div>
        <div className='flex gap-10 justify-center items-center'>
          <ul className='flex gap-5 justify-center items-center text-[#1850A0] text-lg font-semibold'>
            <li>How It Works</li>
            <li ><Link to='/pricing'>Pricing</Link></li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Offers</li>
            <li className='flex gap-2 items-center'>More <img src={menuIcon} className='w-10 h-10' alt='menuIcon'/></li>
          </ul>
          <div className='bg-[#1850A0] p-5 flex m-5 rounded-xl gap-5 shadow-md shadow-slate-400'>
            <div className='bg-white text-[#1850A0] px-8 py-2 rounded-full font-bold cursor-pointer text-lg'>
              login
            </div>
            <div className='border-white border-2 text-white px-6 py-2 rounded-full font-bold cursor-pointer'>
              Register
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Index