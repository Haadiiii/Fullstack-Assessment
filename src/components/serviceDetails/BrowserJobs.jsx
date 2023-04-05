import React from "react";
import iconimg from "../../assets/imggroup.png";
import people from "../../assets/people.png";
import location from "../../assets/Vector.png";

const BrowserJobs = () => {
  return (
    <div>
      <div
        className="flex flex-col shadow-md bg-yellow-500 rounded-2xl
           "
      >
        <div className="flex flex-col gap-2 p-5">
          <h1 className="text-2xl font-bold">JavaScript Developer</h1>
          <div className="flex gap-2">
            <img className="w-5 h-5 rounded-full" src={iconimg} alt="" />
            <p
              className="text-gray-500 text-sm
                  "
            >
              Objectus Technology, LLC
            </p>
          </div>
          <img className="w-4/6 " src={people} alt="" />
        </div>

        <div
          className="flex flex-row bg-gradient-to-r from-pink-500 to-blue-600 justify-between
            px-5 py-3"
        >
          <div className="flex gap-2 mt-3">
            <img
              className="w-2 h-4 rounded-full"
             src={location} alt="" />
            <p className="text-black text-sm font-thin ">Remote</p>
          </div>
          <h2 className="text-black font-bold mt-2 bg-white text-sm rounded-md p-1">
            $3k-6k<span className="text-gray-500 font-thin">/moth</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BrowserJobs;
