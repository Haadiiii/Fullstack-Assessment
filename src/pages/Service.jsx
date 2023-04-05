import React, { useState } from "react";
import profile from "../assets/Ellipse.png";
import UpcomingJobs from "../components/serviceDetails/UpcomingJobs";
import BrowserJobs from "../components/serviceDetails/BrowserJobs";

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const jobs = [
    <UpcomingJobs />,
  ];

  const browse = [
    <BrowserJobs />,
  ];

  const handleSwipe = (index, indexLatest) => {
    if (index < indexLatest) {
      setCurrentIndex(currentIndex - 1);
    } else if (index > indexLatest) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex flex-col bg-black h-screen w-screen">
      <div className="flex bg-black gap-4 p-4">
        <div>
          {" "}
          <img className="w-16 h-16 rounded-full mt-10" src={profile} alt="" />
        </div>
        <div className="flex flex-col mt-12">
          <h4 className="text-white font-thin">Welcome back</h4>
          <h1 className="text-white font-bold">Anjelina Marcus</h1>
        </div>
      </div>
      <div className="flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-5 text-start text-stone-50 ">
          Upcoming Jobs
        </h1>

        <div
          className=" flex gap-4 rounded-2xl"
          index={currentIndex}
          onTransitionEnd={handleSwipe}
        >
          {jobs.map((job, index) => (
            <div key={index} className="slide">
              {job}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col p-6">
        <h1 className="text-2xl font-bold mt-5 text-start text-stone-50 mb-5">
          Browse More
        </h1>

        <div
          className=" flex gap-4 rounded-2xl"
          index={currentIndex}
          onTransitionEnd={handleSwipe}
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
