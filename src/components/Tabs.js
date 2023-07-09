import React from 'react';

const Tabs = (props) => {
  return (
    <div className='flex justify-around bg-[#0a3967] text-white font-medium text-center w-full'>
      <div className='active:bg-[#072440] focus:ring-[#072440] w-1/2'>
        <button onClick={() => props.changeTab('discussion')}>Discussion Forum</button>
      </div>
      <div className='w-1/2 active:bg-[#072440] focus:ring-[#072440]'>
        <button onClick={() => props.changeTab('stories')}>Market Stories</button>
      </div>
    </div>
  );
};

export default Tabs;
