import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col justify-around items-center bg-gray-100 h-screen
    w-screen"
  >
    <div>
      <h1 className="text-5xl font-bold p-5 text-start m-5 leading-tight ">
        The
        {' '}
        <span className="text-green-700">Best</span>
        {' '}
        Platform To Look For
        {' '}
        <span className="text-red-500">Jobs</span>
      </h1>
    </div>
    <div className="flex flex-row
      bg-gradient-to-r from-green-400 to-blue-500 rounded-full
      "
    >
      <Link to="/service">
        <button
          type="button"
          className="bg-black  text-white font-bold py-2 px-4 rounded-full m-5
        hover:bg-gradient-to-r hover:from-yellow-400 hover:to-blue-500
        hover:text-black
        "
        >
          Services →
        </button>
      </Link>
      <Link to="/job">
        <button
          type="button"
          className="bg-black  text-white font-bold py-2 px-4 rounded-full m-5
        hover:bg-gradient-to-r hover:from-yellow-400 hover:to-blue-500
        hover:text-black
        "
        >
          Job Poster  →
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
