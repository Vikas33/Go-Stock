import React, { useState } from 'react';
import MarketStories from './MarketStories';
import NavBar from './NavBar';
import MainContainer from './MainContainer';
import Tabs from './Tabs';

const Body = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('discussion');

  const navToggleHandler = (e) => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className='md:hidden'>{window.innerWidth < 640 && <Tabs changeTab={(value) => setSelectedTab(value)} />}</div>
      <div className='flex justify-between'>
        <NavBar navOpen={isNavOpen} setNavOpen={navToggleHandler} tab={selectedTab} />
        {!!(window.innerWidth <= 650 && selectedTab === 'discussion') && <MainContainer />}
        {window.innerWidth > 650 && <MainContainer />}
        {window.innerWidth > 650 && <MarketStories navOpen={isNavOpen} />}
        {!!(window.innerWidth <= 650 && selectedTab === 'stories') && <MarketStories navOpen={isNavOpen} />}
      </div>
    </div>
  );
};

export default Body;
