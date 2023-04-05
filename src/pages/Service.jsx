import React from 'react';
import profile from '../assets/Ellipse.png';
import UpcomingJobs from '../components/serviceDetails/UpcomingJobs';
import BrowserJobs from '../components/serviceDetails/BrowserJobs';

const Service = () => {
  const jobs = [
    <UpcomingJobs />,
  ];

  const browse = [
    <BrowserJobs />,
  ];

  return (
    <div className="flex flex-col bg-slate-900 min-h-screen">
      {/* back arrow to home */}
      <div
        className="flex flex-row py-2 px-4"
        onClick={() => {
          window.location.href = '/';
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
      <div className="flex gap-4 px-4">
        <div>
          {' '}
          <img className="w-16 h-16 rounded-full mt-10" src={profile} alt="" />
        </div>
        <div className="flex flex-col mt-12">
          <h4 className="text-white text-sm font-thin">Welcome back</h4>
          <h1 className="text-white font-bold">Anjelina Marcus</h1>
        </div>
      </div>
      <div className="flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-5 text-start text-stone-50 ">
          Upcoming Jobs
        </h1>
        <div
          className=" flex gap-4 rounded-2xl
          overflow-x-scroll overflow-y-hidden"
        >
          {jobs.map((job, index) => (
            <div key={index} className="slide">
              {job}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-6">
        <h1 className="text-2xl font-bold mt-1 text-start text-stone-50 mb-5">
          Browse More
        </h1>

        <div
          className=" flex gap-4 rounded-2xl
          overflow-x-scroll overflow-y-hidden
          "

        >
          {browse.map((job, index) => (
            <div key={index} className="slide">
              {job}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
