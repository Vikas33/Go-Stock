import React, { useState } from 'react';
import User from '../image/userLogo.png';

const list = ['Market Stories', 'Sentiment', 'Market', 'Sector', 'Watchlist', 'Events', 'News/Interview'];

const NavBar = (props) => {
  const [forum, setForum] = useState(true);

  const forumHandler = () => {
    setForum((prevState) => !prevState);
  };

  return (
    <div className={`flex justify-start w-${props.navOpen ? '2' : '1'}/12 sm:w-${props.navOpen ? '[49%]' : '0'} sm:absolute sm:top-[72px] sm:h-[59.9rem]`}>
      <div className={`w-${props.navOpen ? '11' : '0'}/12`}>
        {props.navOpen && (
          <div className='flex flex-col h-full p-4 w-full bg-[#0a3967] text-white sm:w-48'>
            <div className='border flex border-x-0 border-t-0 mt-2 p-1'>
              <img alt='user' src={User} className='w-6 ml-2 mb-1' />
              <h2 className='font-semibold ml-2 text-base sm:text-xl'>Hello, User </h2>
            </div>
            <div className='text-[18px] leading-[3rem] pl-2'>
              <button onClick={forumHandler} className='text-sm'>
                Discussion Forum 🔽
              </button>
              <ul>{forum && list.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </div>
          </div>
        )}
      </div>
      <div className={`w-${props.navOpen ? '1' : '12'}/12 `}>
        <button className={`translate-y-48 bg-[#0a3967] h-24 rounded-r-lg w-full text-sm`} onClick={props.setNavOpen}>
          {props.navOpen ? '◀️' : '▶️'}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
