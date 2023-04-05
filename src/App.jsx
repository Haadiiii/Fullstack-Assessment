import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Service from './pages/Service';
import Job from './pages/Job';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/job" element={<Job />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
