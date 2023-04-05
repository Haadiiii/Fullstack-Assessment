import React, { useState } from 'react';
import { useCreateJobMutation } from '../api/apiSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [addNewJob] = useCreateJobMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      company,
      salary,
      location,
    };

    addNewJob(data);
    setTitle('');
    setCompany('');
    setSalary('');
    setLocation('');

    window.location.href = '/service';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Job Posting Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-gray-700 font-semibold mb-2"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-gray-700 font-semibold mb-2"
            >
              Salary
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 font-semibold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
