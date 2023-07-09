import React, { useEffect, useState } from 'react';

const MarketStories = (props) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const data = await fetch('http://localhost:5000/stories');
    const json = await data.json();
    setStories(json);
  };

  return (
    <>
      <div className={`w-${props.navOpen ? '4' : '6'}/12 ml-${props.navOpen ? '16' : '12'} sm:mb-10 sm:w-6/12 sm:ml-4`}>
        <h2 className='text-red-600 font-semibold mt-2 text-lg sm:hidden'>MARKET STORIES</h2>
        <div className='flex mt-7 sm:ml-6'>
          <div className='w-2'>
            {stories.map((item) => (
              <div key={item.id} className={`text-md w-[20rem] sm:w-[13rem] `}>
                <div className='border mt-6 rounded-lg mr-12 p-2 shadow-lg'>
                  <img alt='story logo' src={require(`../image/${item.image}.png`)} className='w-24' />
                  <p className='flex-wrap-reverse'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='pl-80 sm:pl-44'>
            {!props.navOpen &&
              stories.map((item) => (
                <div key={item.id} className='text-md w-[20rem] sm:w-[13rem]'>
                  <div className='border mt-6 rounded-lg mr-12 p-2 shadow-lg'>
                    <img alt='story logo' src={require(`../image/${item.image}.png`)} className='w-24' />
                    <p className='flex-wrap-reverse'>{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={`border rounded-full w-12 h-12 translate-x-60 -translate-y-8 text-5xl bg-[#0a3967] sm:translate-x-80`}>
          <button className='text-white font-light translate-x-2 -translate-y-1'>+</button>
        </div>
      </div>
    </>
  );
};

export default MarketStories;
