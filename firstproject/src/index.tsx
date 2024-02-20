import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  './index.css'

// import pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NavBar from './components/NavBar';
import CityDetail from './pages/CityDetail';
import ProductDetail from './pages/ProductDetail';


const routerObj =

  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/cityDetail/:data' element={<CityDetail />} />
      <Route path='/productDetail/:data' element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(routerObj);


// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
