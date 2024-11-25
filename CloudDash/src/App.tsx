import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import Subnets from './pages/Subnets'
import VPCs from './pages/VPCs'
import RouteTables from './pages/RouteTables'
import Instances from './pages/Instances'
import Gateways from './pages/Gateways'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='container d-flex flex-column align-items-center mb-5'>
        <h1 className='text-center'>Create your own cloud infrastructure now</h1>
      <button className='btn btn-primary'>
        Start
      </button>
      </div>
      <div className='container d-flex justify-content-center text-center'>
          <p className='card m-2 p-2 fs-5'>
              Subnets
              <a href="">1</a>
          </p>
          <p className='card m-2 p-2 fs-5'>
              Instances
              <a href="">1</a>
          </p>
          <p className='card m-2 p-2 fs-5'>
              Route Tables
              <a href="">1</a>
          </p>
        </div>
        <div className='container d-flex justify-content-center text-center'>
          <p className='card m-2 p-2 fs-5'>
              VPCs
              <a href="">1</a>
          </p>
          <p className='card m-2 p-2 fs-5'>
              Gateways
              <a href="">1</a>
          </p>
      </div>

      <Routes>
        <Route path="/Subnets" element={<Subnets />} />
        <Route path="/VPCs" element={<VPCs />} />
        <Route path="/RouteTables" element={<RouteTables />} />
        <Route path="/Instances" element={<Instances />} />
        <Route path="/Gateways" element={<Gateways />} />
      </Routes>
      
    </>
  )
}

export default App