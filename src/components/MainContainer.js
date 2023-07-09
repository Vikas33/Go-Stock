import React, { useEffect, useState } from 'react';

const MainContainer = (props) => {
  const [postDetails, setPostDetails] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const data = await fetch('http://localhost:5000/postDetails');
    const json = await data.json();
    setPostDetails(json);
  };

  return (
    <>
      <div className={`w-6/12 pb-4 pl-10 sm:w-6/12 sm:pl-4`}>
        <h1 className='font-semibold text-xl -ml-8 text-red-600 mt-4 sm:hidden'>DISCUSSION FORUM </h1>
        <div className='mt-4 sm:ml-2'>
          <h3 className='text-lg font-medium'>Filters</h3>
          <div className='border flex h-16 shadow-lg w-full sm:w-96 items-center rounded-md'>
            <div className='flex w-6/12 sm:w-7/12 justify-evenly text-sm sm:text-[9px] h-9 '>
              <button className='border w-3.5/12 rounded-full p-2 bg-red-600 '>Section 1 </button>
              <button className='border w-3.5/12 rounded-full p-2 bg-blue-500'>Section 2 </button>
              <button className='border w-3.5/12 rounded-full p-2 bg-yellow-400'>Section 3 </button>
            </div>
            <div className='h-8 mr-2 w-6/12 sm:w-5/12 text-center'>
              <input type='text' placeholder='🔍 Search here' className='border w-10/12 sm:w-11/12 h-8 rounded-2xl pl-6 sm:pl-2 bg-gray-100 shadow-inner' />
            </div>
          </div>

          {postDetails.map((item) => (
            <div key={item.id} className='border mt-4 w-full text-start sm:w-96 shadow-lg rounded-lg p-2'>
              <div className='sm:ml-12 ml-40'>
                <img alt='company-logo' src={require(`../image/${item.image}.png`)} className='w-80  sm:w-64' />
              </div>
              <div className='flex ml-6'>
                <img alt='user' src={require(`../image/${item.userLogo}.png`)} className='w-5 ml-1 mb-1' />
                <h4 className='ml-2'>{item.user}</h4>
              </div>
              <p className='ml-12'>{item.description}</p>
              <div className='flex justify-evenly text-xs mt-6'>
                <span>{item.like}</span>
                <span>{item.views}</span>
                <span>{item.comment}</span>
                <span>{item.share}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
