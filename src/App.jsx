
import { Fragment } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import Profile from './pages/Profile';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Products from './pages/Products';
import Login from './pages/Login';
import Footer from './components/Footer';
function App() {


  return (
    <Fragment>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </Fragment>
  )
}

export default App
