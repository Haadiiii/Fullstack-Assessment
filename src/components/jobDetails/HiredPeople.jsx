import React from "react";
import profile from "../../assets/Ellipse.png";
import location from "../../assets/Vector.png";

const HiredPeople = () => {
  return (
      <div
        className="flex flex-col shadow-md bg-yellow-500 rounded-2xl w-full
           "
      >
        <div className="flex flex-col gap-2 px-6 py-3 ">
          <p
            className="text-gray-500 text-sm
                font-bold"
          >
            4pm today
          </p>
          <h1 className="text-2xl font-mono font-bold">Wash the Car</h1>
          <div className="flex gap-2">
            <div>
              {" "}
              <img
                className="w-10 h-10 rounded-full mt-2"
                src={profile}
                alt=""
              />
            </div>
            <div className="flex flex-col mt-4">
              <h1 className="text-black font-bold">Ana smith</h1>
            </div>
          </div>
        </div>

        <div
          className="flex flex-row bg-gradient-to-r from-pink-500 to-blue-600 justify-between
            px-5 py-3"
        >
          <div className="flex gap-2 mt-3">
            <img className="w-2 h-4 rounded-full" src={location} alt="" />
            <p className="text-black text-sm font-thin ">Remote</p>
          </div>
          <h2 className="text-black font-bold mt-2 bg-white text-sm rounded-md p-1">
            $3k-6k<span className="text-gray-500 font-thin">/moth</span>
          </h2>
        </div>
      </div>
  );
};

export default HiredPeople;
