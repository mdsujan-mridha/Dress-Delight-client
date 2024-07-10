
import { Fragment } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
function App() {


  return (
    <Fragment>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>

    </Fragment>
  )
}

export default App
