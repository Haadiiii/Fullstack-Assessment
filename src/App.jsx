import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Job from "./pages/Job"
import React from "react"

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
  )
}

export default App
