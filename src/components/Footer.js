import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    getIcons();
  }, []);

  const getIcons = async () => {
    const data = await fetch('http://localhost:5000/footer');
    const json = await data.json();
    console.log(json);
    setIcons(json);
  };

  return (
    <div className='flex justify-around w-full text-white bg-[#0a3967] sm:sticky h-9 align-middle'>
      {icons.map((item, index) => (
        <button key={index} className='cursor-pointer'>
          <img alt='footer logo' className='w-7' src={require(`../image/${item.image}.png`)} />
        </button>
      ))}
    </div>
  );
};

export default Footer;
