
import { Fragment, useEffect, useState } from 'react';
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
import 'react-tabs/style/react-tabs.css';
import ProductCart from './pages/ProductCart';
import { useSelector } from 'react-redux';
import axios from 'axios';
import store from '../store';
import { loadUser } from './redux/action/userAction';
import ProtectedRoute from './utils/ProtectedRoute';
import ShippingOrder from './pages/ShippingOrder';
import ConfirmOrder from './pages/ConfirmOrder';
import Payment from './pages/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Success from './pages/Success';
import Orders from './user/Orders';

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  axios.defaults.withCredentials = true;

  async function getStripKey() {
    const { data } = await axios.get("http://localhost:5000/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
    console.log(data)
  }

  useEffect(() => {

    store.dispatch(loadUser());
    getStripKey();

  }, [])


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
          {/* this route will be protected  */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/cart' element={<ProductCart />}></Route>
            <Route path='/shipping' element={<ShippingOrder />} />
            <Route path='/confirm/order' element={<ConfirmOrder />} />
            <Route path='/orders' element={<Orders />} />
            <Route>
              {
                stripeApiKey && (
                  <Route path='/process/payment'
                    element={
                      <Elements stripe={loadStripe(stripeApiKey)}>
                        <Payment stripeApiKey={stripeApiKey} />
                      </Elements>
                    }
                  >
                  </Route>
                )
              }
            </Route>
            <Route path='/success' element={<Success />} />
          </Route>
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </Fragment>
  )
}

export default App
