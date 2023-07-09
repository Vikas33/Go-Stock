import React, { useEffect, useState } from 'react';

const FeaturedCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    const data = await fetch('http://localhost:5000/companies');
    const json = await data.json();
    setCompanies(json);
  };

  return (
    <div>
      <div className='bg-yellow-50 h-7 sm:hidden'>
        <h1 className='text-red-600 font-semibold ml-4 '>FEATURED COMPANIES</h1>
      </div>
      <div className='sm:overflow-x-scroll'>
        <ul className='flex justify-between w-full h-16 sm:h-9 px-2'>
          {companies.map((item) => (
            <img key={item.id} alt='companies' src={require(`../image/${item.logo}.png`)} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedCompanies;
