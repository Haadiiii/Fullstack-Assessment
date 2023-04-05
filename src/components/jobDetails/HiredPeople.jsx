import React from 'react';
import profile from '../../assets/Ellipse.png';
import location from '../../assets/Vector.png';
import { useGetHiredQuery } from '../api/apiSlice';
import Spiner from '../spinner/Spinner';

const HiredPeople = () => {
  const {
    data: hire,
    isLoading,
  } = useGetHiredQuery();

  return (
    <>
      {isLoading && <Spiner />}
      {hire?.map((job, index) => (
        <div
          key={index}
          className="flex flex-col shadow-md bg-white rounded-2xl w-full
           "
        >
          <div className="flex flex-col gap-2 px-6 py-3 ">
            <p
              className="text-gray-500 text-sm
                font-bold"
            >
              {job.date.slice(0, 10)}
            </p>
            <h1 className="text-2xl font-mono font-bold">Wash the Car</h1>
            <div className="flex gap-2">
              <div>
                {' '}
                <img
                  className="w-10 h-10 rounded-full mt-2"
                  src={profile}
                  alt=""
                />
              </div>
              <div className="flex flex-col mt-4">
                <h1 className="text-black font-bold">{job.name}</h1>
              </div>
            </div>
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
              <span className="text-gray-500 font-thin">/moth</span>
            </h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default HiredPeople;
