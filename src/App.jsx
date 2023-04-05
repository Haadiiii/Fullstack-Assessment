import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Service from './pages/Service';
import Job from './pages/Job';
import Form from './components/form/Form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/job" element={<Job />} />
          <Route path="/new" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
