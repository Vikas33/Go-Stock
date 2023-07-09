import React from 'react';

const stockStatus = {
  NIFTYBANK: [41559.64, '0.01%'],
  BAJFINANCE: [6435.25, '0.30%'],
  BHARTIARTL: [771.95, '0.69%'],
  HDFCBank: [657.1, '0.40%'],
  HINDULVR: [2557.5, '0.38%'],
  INDIGO: [2043.68, '0.21%'],
};

const stockList = Object.entries(stockStatus);

const LiveStockList = () => {
  return (
    <div className='h-6 bg-black sm:overflow-scroll'>
      <ul className='flex justify-between items-center text-sm text-white sm:text-[6px]'>
        {stockList.map((item, index) => (
          <div key={index} className='flex justify-between items-center'>
            <li className='sm:mx-2'>{item[0]}</li>
            <li className='ml-2 sm:mx-1 text-red-50'>{item[1][0]}</li>
            <li className='ml-2 sm:mx-1 text-red-700'>{item[1][1]}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default LiveStockList;
