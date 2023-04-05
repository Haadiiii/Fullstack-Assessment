import React from "react";
import rectangle from "../../assets/Rectangle.png";

const PostJob = () => {
  return (
    <div className="flex flex-col shadow-md bg-white rounded-2xl mt-10 w-full">
      <div
        className="flex p-4 justify-between
            "
      >
        <h1 className="text-2xl font-bold">Post a new Job</h1>

        <h2
          className="text-black font-bold text-xl rounded-full
         p-2"
        >
          +
        </h2>
      </div>

      <div className="flex flex-row gap-2 bg-black p-4">
        <img className="w-10 h-10 rounded-full" src={rectangle} alt="" />

        <h2 className="text-white font-bold mt-2">Dino Studio</h2>
      </div>
    </div>
  );
};

export default PostJob;
