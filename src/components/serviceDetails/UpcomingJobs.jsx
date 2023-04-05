import React from 'react';
import rectangle from '../../assets/Rectangle.png';
import { useGetJobRecentQuery } from '../api/apiSlice';
import Spiner from '../spinner/Spinner';

const UpcomingJobs = () => {
  const { data: jobs, isLoading } = useGetJobRecentQuery();

  return (
    <div className="flex gap-5">
      {isLoading && <Spiner />}
      {jobs?.map((job, index) => (
        <div
          key={index}
          className="flex flex-col shadow-md bg-white rounded-2xl w-80 overflow-x-scroll
       "
        >
          <div className="flex flex-col gap-2 p-5">
            <p
              className="text-gray-500 text-sm
                font-bold"
            >
              {job.date.slice(0, 10)}
            </p>
            <h1 className="text-xl font-bold">{job.title}</h1>
            <p
              className="bg-gray-300
                text-gray-500
                 text-sm p-2 rounded-md"
            >
              Monthly salary
              {' '}
              <span className="text-green-500 font-bold">
                $
                {job.salary}
              </span>
              /month
            </p>
          </div>

          <div className="flex flex-row gap-2 bg-black p-4">
            <img
              className="w-10 h-10 rounded-full"
              src={rectangle}
              alt=""
            />

            <h2 className="text-white font-bold mt-2">Dino Studio</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingJobs;
