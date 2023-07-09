import React from 'react';
import Logo from '../image/companyLogo.png';
import User from '../image/userLogo.png';

const Header = () => {
  return (
    <div className='flex justify-between border align-middle'>
      <div className='w-1/12 ml-4 sm:mt-2'>
        <img alt='company logo' src={Logo} className='w-20' />
      </div>
      <div className=' w-6/12 mt-6 sm:w-56 sm:mt-2'>
        <input type='text' className='border border-gray-300 bg-gray-100 w-full h-10 sm:h-6 rounded-md shadow-inner pl-3' placeholder='🔍' />
      </div>
      <div className='flex justify-evenly mt-4 w-4/12 font-bold sm:hidden'>
        <div className='mt-2'>
          <button className='p-1 text-base'>Contact US</button>
        </div>
        <div>
          <button className='border border-black p-2 w-24 text-[#9c9c9c]'>SIGN UP</button>
        </div>
        <div>
          <button className='border border-black p-2 w-24 text-[#9c9c9c]'>SIGN IN</button>
        </div>
      </div>
      <div className='sm:w-6 sm:m-2 md:hidden'>
        <button className=''>
          <img alt='user logo' src={User} />
        </button>
      </div>
    </div>
  );
};

export default Header;
