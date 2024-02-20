import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Control from './utils/Control';
import LoginControl from './utils/LoginControl';
import './index.css'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'

// import pages

import Login from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import ProductDetail from './pages/ProductDetail';
import ProductSearch from './pages/ProductSearch';
import Profile from './pages/Profile';
import Likes from './pages/Likes';
import { Provider } from 'react-redux';
import { store } from './useRedux/store';
import Categories from './pages/Categories';
import Category from './pages/Category';

const routeObj =
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/login' element={<LoginControl page={<Login />} />} />
        <Route path='/' element={<LoginControl page={<Login />} />} />
        <Route path='/home' element={<Control page={<Home />} />} />
        <Route path='/users' element={<Control page={<Users />} />} />
        <Route path='/productDetail/:id' element={<Control page={<ProductDetail />} />} />
        <Route path='/productSearch/' element={<Control page={<ProductSearch />} />} />
        <Route path='/profile/' element={<Control page={<Profile />} />} />
        <Route path='/likes/' element={<Control page={<Likes />} />} />
        <Route path='/categories/' element={<Control page={<Categories />} />} />
        <Route path='/category/:name' element={<Control page={<Category />} />} />
      </Routes>
    </BrowserRouter>
  </Provider>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <>

    {routeObj}

  </>
);