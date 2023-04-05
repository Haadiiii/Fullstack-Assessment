import React from 'react';
import iconimg from '../../assets/imggroup.png';
import people from '../../assets/people.png';
import location from '../../assets/Vector.png';
import { useGetJobsQuery } from '../api/apiSlice';
import Spiner from '../spinner/Spinner';

const BrowserJobs = () => {
  const { data: jobs, isLoading } = useGetJobsQuery();

  return (
    <div className="flex gap-5">
      {isLoading && <Spiner />}
      {jobs?.map((job, index) => (
        <div
          key={index}
          className="flex flex-col shadow-md bg-yellow-500 rounded-2xl w-80
           "
        >
          <div className="flex flex-col gap-2 p-5">
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <div className="flex gap-2">
              <img className="w-5 h-5 rounded-full" src={iconimg} alt="" />
              <p
                className="text-gray-500 text-sm
                  "
              >
                {job.company}
              </p>
            </div>
            <img className="w-4/6 " src={people} alt="" />
          </div>

          <div
            className="flex flex-row justify-between
            px-5 py-3"
            style={{
              background:
                  'linear-gradient(270deg, #FD5D2D 0%, #FFE08F 22.96%, #FFC83F 41.19%, #22EEB1 69.32%, #BFFFE8 85.46%, #916FD0 100%)',
            }}
          >
            <div className="flex gap-2 mt-3">
              <img className="w-2 h-4 rounded-full" src={location} alt="" />
              <p className="text-black text-sm font-thin ">{job.location}</p>
            </div>
            <h2 className="text-black font-bold mt-2 bg-white text-sm rounded-md p-1">
              $
              {job.salary}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrowserJobs;
