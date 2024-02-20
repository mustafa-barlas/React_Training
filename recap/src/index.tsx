import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  './index.css';

// import pages 
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import LoginRegister from './pages/LoginRegister';


const routeObj =

  <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/login' element={<LoginRegister />} />
      <Route path='/register' element={<LoginRegister />} />
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
  
    {routeObj}
    {/* <ToastContainer /> */}
  </>
);