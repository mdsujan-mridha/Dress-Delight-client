
import { Fragment, lazy } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Navbar = lazy(() => import('./components/Navbar')) 
const Footer =lazy(()=>import('./components/Footer')) 
const About = lazy(()=>import('./pages/About')) ;
const Contact = lazy(()=> import("./pages/Contact"));
const  Blogs = lazy(()=>import('./pages/Blogs'))
const Products = lazy(()=>import('./pages/Products'));
const  Login = lazy(()=>import('./pages/Login'));
import { Toaster } from 'react-hot-toast';
import Profile from './pages/Profile';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
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
