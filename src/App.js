<<<<<<< HEAD
import React from 'react'
=======
>>>>>>> main
import './App.css';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-icons'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route exact path='/home' element={<Home />}/>
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
