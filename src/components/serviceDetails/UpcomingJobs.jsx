import React from 'react';
import rectangle from '../../assets/Rectangle.png';

const UpcomingJobs = () => (
  <div>
    <div className="flex flex-col shadow-md bg-white rounded-2xl
       "
    >
      <div
        className="flex flex-col gap-2 p-5"
      >
        <p
          className="text-gray-500 text-md
                font-bold"
        >
          4pm today
        </p>
        <h1 className="text-xl font-bold">Wash the Car</h1>
        <p
          className="bg-gray-300
                text-gray-500
                 text-sm p-2 rounded-md"
        >
          Monthly salary
          {' '}
          <span className="text-green-500 font-bold">$1000-$2000</span>
          /month
        </p>
      </div>

      <div className="flex flex-row gap-2 bg-black p-4">
        <img className="w-10 h-10 rounded-full" src={rectangle} alt="" />

        <h2
          className="text-white font-bold mt-2"
        >
          Dino Studio
        </h2>
      </div>
    </div>
  </div>
);

export default UpcomingJobs;
